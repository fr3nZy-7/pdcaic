import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Helper to upload file to Supabase storage
async function uploadFileToGalleryStorage(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from('gallery')
    .upload(filePath, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('gallery')
    .getPublicUrl(filePath);

  return { publicUrl, filePath };
}

const ManageGallery: React.FC = () => {
  // Form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("clinic");
  const [uploadType, setUploadType] = useState<"individual" | "pair">("individual");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Fixed categories matching your gallery page
  const categories = [
    { id: "clinic", name: "Clinic" },
    { id: "treatments", name: "Treatments" },
    { id: "team", name: "Team" },
    { id: "before-after", name: "Before & After" },
  ];

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
    
    // Validation based on upload type
    if (uploadType === "pair" && list.length !== 2) {
      setErrorMsg("For before & after pairs, please select exactly 2 images.");
      return;
    }
    
    if (uploadType === "individual" && list.length > 1) {
      setErrorMsg("For individual upload, please select only 1 image.");
      return;
    }

    setFiles(list);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit() {
    setMessage(null);
    setErrorMsg(null);

    // Validation
    if (!title.trim()) {
      setErrorMsg("Please enter a title.");
      return;
    }
    
    if (files.length === 0) {
      setErrorMsg("Please select image(s) to upload.");
      return;
    }

    if (uploadType === "pair" && files.length !== 2) {
      setErrorMsg("For before & after pairs, please select exactly 2 images.");
      return;
    }

    if (uploadType === "individual" && files.length !== 1) {
      setErrorMsg("For individual upload, please select exactly 1 image.");
      return;
    }

    setUploading(true);
    try {
      // Skip uploaded_by tracking for now
      const uploadedBy = null;

      const pairId = uploadType === "pair" ? crypto.randomUUID() : null;
      const rowsToInsert: Database["public"]["Tables"]["gallery"]["Insert"][] = [];

      // Handle file uploads
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { publicUrl } = await uploadFileToGalleryStorage(file);
        
        const row: Database["public"]["Tables"]["gallery"]["Insert"] = {
          title: uploadType === "pair" ? `${title} - ${i === 0 ? "Before" : "After"}` : title,
          description: description || null,
          media_type: "image",
          media_url: publicUrl,
          thumbnail_url: publicUrl,
          category_id: null, // We'll use tags instead for simplicity
          service_id: null,
          alt_text: uploadType === "pair" ? `${title} - ${i === 0 ? "Before" : "After"}` : title,
          tags: [category], // Store category as tag for easy filtering
          is_featured: false,
          is_active: true,
          sort_order: null,
          uploaded_by: uploadedBy,
          pair_id: pairId,
        };
        rowsToInsert.push(row);
      }

      // Insert all rows
      const { error: insertError } = await supabase.from("gallery").insert(rowsToInsert);
      if (insertError) throw insertError;

      setMessage(`Successfully uploaded ${files.length} image(s) to gallery!`);
      
      // Clear form
      setTitle("");
      setDescription("");
      setFiles([]);
      setUploadType("individual");
      setCategory("clinic");
    } catch (err: any) {
      console.error("Upload error:", err);
      setErrorMsg(err?.message ?? "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Manage Gallery</h1>
          <p className="text-muted-foreground mb-8">Upload images to your dental clinic gallery</p>

          <div className="space-y-6 bg-card p-6 rounded-lg border">
            {/* Upload Type Selection */}
            <div>
              <Label className="text-base font-medium mb-4 block">Upload Type</Label>
              <RadioGroup value={uploadType} onValueChange={(value) => setUploadType(value as "individual" | "pair")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual">Individual Image</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pair" id="pair" />
                  <Label htmlFor="pair">Before & After Pair</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Title */}
            <div>
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder={uploadType === "pair" ? "e.g. Smile Makeover Case #1" : "e.g. Modern Dental Equipment"}
              />
            </div>

            {/* Category */}
            <div>
              <Label htmlFor="category">Category</Label>
              <select 
                id="category"
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea 
                id="description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Brief description about the image(s)"
                rows={3}
              />
            </div>

            {/* File Upload */}
            <div>
              <Label className="block mb-2">
                {uploadType === "pair" ? "Select Before & After Images (2 images)" : "Select Image (1 image)"}
              </Label>
              <input
                type="file"
                accept="image/*"
                multiple={uploadType === "pair"}
                onChange={handleFileChange}
                className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              <p className="text-sm text-muted-foreground mt-1">
                {uploadType === "pair" ? "Select 2 images: first will be 'Before', second will be 'After'" : "Select 1 image for individual upload"}
              </p>
            </div>

            {/* File Previews */}
            {previews.length > 0 && (
              <div className="space-y-4">
                <Label>Preview</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {previews.map((preview, i) => (
                    <div key={i} className="relative">
                      <img 
                        src={preview.url} 
                        alt={preview.name} 
                        className="w-full h-48 object-cover rounded-lg border" 
                      />
                      {uploadType === "pair" && (
                        <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {i === 0 ? "Before" : "After"}
                        </div>
                      )}
                      <Button 
                        type="button" 
                        variant="destructive" 
                        size="sm"
                        className="absolute top-2 right-2" 
                        onClick={() => removeFile(i)}
                      >
                        Remove
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2 truncate">{preview.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button onClick={handleSubmit} disabled={uploading} className="flex-1">
                {uploading ? "Uploading..." : `Upload ${uploadType === "pair" ? "Pair" : "Image"}`}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setTitle(""); 
                  setDescription(""); 
                  setFiles([]);
                  setMessage(null);
                  setErrorMsg(null);
                }}
              >
                Clear
              </Button>
            </div>

            {/* Messages */}
            {message && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 text-sm">{message}</p>
              </div>
            )}
            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{errorMsg}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageGallery;