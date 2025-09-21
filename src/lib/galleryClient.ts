// src/lib/galleryClient.ts
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type GalleryInsert = Database["public"]["Tables"]["gallery"]["Insert"];

export async function uploadFileToGalleryStorage(file: File) {
  // build a safe path: images/<year>/<uuid>.<ext>
  const ext = file.name.split(".").pop() ?? "bin";
  const filename = `${Date.now()}_${crypto.randomUUID()}.${ext}`;
  const path = `images/${new Date().getFullYear()}/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from("gallery")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (uploadError) throw uploadError;

  // get public URL (getPublicUrl is synchronous)
  const publicUrl = supabase.storage.from("gallery").getPublicUrl(path).data?.publicUrl ?? null;
  if (!publicUrl) throw new Error("Could not get public URL for uploaded file.");

  return { path, publicUrl };
}

export async function insertGalleryRows(rows: GalleryInsert[]) {
  const { data, error } = await supabase.from("gallery").insert(rows);
  if (error) throw error;
  return data;
}

export async function fetchCategories() {
  const { data, error } = await supabase.from("categories").select("id, name, slug").order("name");
  if (error) throw error;
  return data as { id: string; name: string; slug: string }[];
}

export async function fetchServices() {
  const { data, error } = await supabase.from("services").select("id, title, slug").order("title");
  if (error) throw error;
  return data as { id: string; title: string; slug: string }[];
}

export async function fetchTagSuggestions(limit = 200) {
  // get recent gallery rows, extract tags arrays and flatten unique
  const { data, error } = await supabase
    .from("gallery")
    .select("tags")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  const set = new Set<string>();
  (data ?? []).forEach((row: any) => {
    if (Array.isArray(row.tags)) row.tags.forEach((t: string) => set.add(t));
  });
  return Array.from(set);
}
