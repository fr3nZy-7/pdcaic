// src/pages/admin/ManageGallery.tsx
import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { uploadFileToGalleryStorage, insertGalleryRows, fetchCategories, fetchServices, fetchTagSuggestions } from "@/lib/galleryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

// small helper to split and normalise tags
function parseTags(value: string) {
  return value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

const ManageGallery: React.FC = () => {
  // form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [altText, setAltText] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [sortOrder, setSortOrder] = useState<number | undefined>(undefined);
  const [pairMode, setPairMode] = useState(false); // upload before/after pair
  const [files, setFiles] = useState<File[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState(""); // if adding video via YouTube
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // lookups
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [services, setServices] = useState<{ id: string; title: string }[]>([]);
  const [tagSuggestions, setTagSuggestions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const cats = await fetchCategories();
        setCategories(cats || []);
      } catch (err) {
        console.error("fetch categories", err);
      }
      try {
        const svcs = await fetchServices();
        setServices(svcs || []);
      } catch (err) {
        console.error("fetch services", err);
      }
      try {
        const tags = await fetchTagSuggestions();
        setTagSuggestions(tags || []);
      } catch (err) {
        console.error("fetch tags", err);
      }
    })();
  }, []);

  useEffect(() => {
    setTags(parseTags(tagsInput));
  }, [tagsInput]);

  const previews = useMemo(
    () =>
      files.map((f) => ({
        name: f.name,
        url: URL.createObjectURL(f),
        size: f.size,
      })),
    [files]
  );

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(null);
    setErrorMsg(null);
    const list = e.target.files ? Array.from(e.target.files) : [];
    // If pairMode enforce exactly 2 files
    if (pairMode && list.length > 2) {
      setErrorMsg("In pair mode please select exactly two files (before & after).");
      return;
    }
    setFiles(list);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setMessage(null);
    setErrorMsg(null);

    // validations
    if (!title.trim()) {
      setErrorMsg("Please enter a title.");
      return;
    }
    if (!youtubeUrl && files.length === 0) {
      setErrorMsg("Please choose file(s) to upload or provide a YouTube URL for video.");
      return;
    }
    if (pairMode && files.length !== 2) {
      setErrorMsg("Pair mode requires exactly 2 images selected.");
      return;
    }

    setUploading(true);
    try {
      // try to get current user (for uploaded_by)
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const uploadedBy = user?.id ?? null;

      // compute pair_id if required
      const pairId = pairMode ? crypto.randomUUID() : null;

      const rowsToInsert: Database["public"]["Tables"]["gallery"]["Insert"][] = [];

      // 1) handle file uploads (images)
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { publicUrl } = await uploadFileToGalleryStorage(file);
        const row: Database["public"]["Tables"]["gallery"]["Insert"] = {
          title: pairMode ? `${title} - ${i === 0 ? "Before" : "After"}` : title,
          description: description || null,
          media_type: "image",
          media_url: publicUrl,
          thumbnail_url: publicUrl,
          category_id: categoryId ?? null,
          service_id: serviceId ?? null,
          alt_text: altText || null,
          tags: tags.length ? tags : null,
          is_featured: isFeatured,
          is_active: isActive,
          sort_order: sortOrder ?? null,
          uploaded_by: uploadedBy,
          pair_id: pairId,
        };
        rowsToInsert.push(row);
      }

      // 2) optionally handle YouTube video entry (admin can either upload files OR submit a YouTube URL)
      if (!files.length && youtubeUrl) {
        // store youtube url as media_url; thumbnail_url can be derived by frontend from video id
        const row: Database["public"]["Tables"]["gallery"]["Insert"] = {
          title,
          description: description || null,
          media_type: "video",
          media_url: youtubeUrl,
          thumbnail_url: null,
          category_id: categoryId ?? null,
          service_id: serviceId ?? null,
          alt_text: altText || null,
          tags: tags.length ? tags : null,
          is_featured: isFeatured,
          is_active: isActive,
          sort_order: sortOrder ?? null,
          uploaded_by: uploadedBy,
          pair_id: null,
        };
        rowsToInsert.push(row);
      }

      // insert rows in one call
      if (rowsToInsert.length > 0) {
        const { error: insertError } = await supabase.from("gallery").insert(rowsToInsert);
        if (insertError) throw insertError;
      }

      setMessage("Upload successful. Gallery updated.");
      // clear form (keeping categories to speed repetitive uploads)
      setTitle("");
      setDescription("");
      setFiles([]);
      setYoutubeUrl("");
      setTagsInput("");
      setAltText("");
      setIsFeatured(false);
      setSortOrder(undefined);
    } catch (err: any) {
      console.error("upload error", err);
      setErrorMsg(err?.message ?? "Upload failed. See console for details.");
    } finally {
      setUploading(false);
      // refresh tag suggestions + maybe categories/services if you allow new ones
      try {
        const tags = await fetchTagSuggestions();
        setTagSuggestions(tags || []);
      } catch (e) {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Manage Gallery</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
          <div>
            <label className="block mb-2 text-sm font-medium">Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Smile Makeover - Case #102" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Description</label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description (optional)" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Category</label>
              <select value={categoryId ?? ""} onChange={(e) => setCategoryId(e.target.value || null)} className="w-full rounded-md p-2 border">
                <option value="">— None —</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Service</label>
              <select value={serviceId ?? ""} onChange={(e) => setServiceId(e.target.value || null)} className="w-full rounded-md p-2 border">
                <option value="">— None —</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Alt text (for accessibility)</label>
              <Input value={altText} onChange={(e) => setAltText(e.target.value)} placeholder="e.g. Before teeth whitening" />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Tags (comma separated)</label>
            <Input
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. whitening, anterior, paediatric"
            />
            {tagSuggestions.length > 0 && (
              <div className="mt-2 text-sm text-muted-foreground">
                Suggestions:{" "}
                {tagSuggestions.slice(0, 10).map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="inline-block mr-2 mb-1 px-2 py-1 rounded bg-muted/30 text-xs"
                    onClick={() => {
                      const merged = Array.from(new Set([...tags, t]));
                      setTagsInput(merged.join(", "));
                      setTags(merged);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <Checkbox checked={isFeatured} onCheckedChange={(v) => setIsFeatured(Boolean(v))} />
              <span className="text-sm">Featured</span>
            </label>

            <label className="flex items-center gap-2">
              <Checkbox checked={isActive} onCheckedChange={(v) => setIsActive(Boolean(v))} />
              <span className="text-sm">Active</span>
            </label>

            <label className="flex items-center gap-2">
              <Checkbox checked={pairMode} onCheckedChange={(v) => setPairMode(Boolean(v))} />
              <span className="text-sm">Upload as Before & After pair</span>
            </label>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Upload images (images only) {pairMode ? " — select exactly 2" : ""}</label>
            <input
              type="file"
              accept="image/*"
              multiple={!pairMode}
              onChange={handleFileChange}
              className="block w-full"
            />
            {previews.length > 0 && (
              <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                {previews.map((p, i) => (
                  <div key={i} className="relative rounded border overflow-hidden">
                    <img src={p.url} alt={p.name} className="w-full h-36 object-cover" />
                    <button type="button" className="absolute top-1 right-1 bg-white/80 rounded-full p-1 text-xs" onClick={() => removeFile(i)}>
                      Remove
                    </button>
                    <div className="p-2 text-xs">{p.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Or add a YouTube video (paste full URL)</div>
            <Input value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." />
            <div className="text-xs text-muted-foreground mt-1">If YouTube URL is provided, no file upload is required for that entry.</div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Sort order (optional)</label>
            <Input type="number" value={sortOrder ?? ""} onChange={(e) => setSortOrder(Number(e.target.value || undefined))} />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" onClick={handleSubmit} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload to Gallery"}
            </Button>
            <Button variant="ghost" onClick={() => {
              setTitle(""); setDescription(""); setFiles([]); setTagsInput(""); setAltText(""); setYoutubeUrl("");
            }}>
              Reset
            </Button>
          </div>

          {message && <div className="text-sm text-success mt-2">{message}</div>}
          {errorMsg && <div className="text-sm text-destructive mt-2">{errorMsg}</div>}
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ManageGallery;
