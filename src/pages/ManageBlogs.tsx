import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom"; // Will be added when integrating
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Toaster } from "sonner";

// Helper to upload featured image to Supabase storage
async function uploadFeaturedImage(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `blog_${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from('gallery') // Using same bucket for simplicity
    .upload(`blog/${filePath}`, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('gallery')
    .getPublicUrl(`blog/${filePath}`);

  return { publicUrl, filePath };
}

const ManageBlogs: React.FC = () => {
  const navigate = useNavigate();
    //useNavigate();
  // Form fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("general");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Categories matching your blog component
  const categories = [
    { id: "general", name: "General Dentistry" },
    { id: "cosmetic", name: "Cosmetic Dentistry" },
    { id: "implants", name: "Dental Implants" },
    { id: "oral-health", name: "Oral Health" },
    { id: "pediatric", name: "Pediatric Dentistry" },
  ];

  // Admin route protection - add navigate import when integrating
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (!user) {
        // navigate('/admin'); // Uncomment when adding useNavigate import
        console.log('User not authenticated');
      }
    };
    checkAuth();
  }, []);

  // Auto-generate slug from title
  useEffect(() => {
    if (title) {
      const autoSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setSlug(autoSlug);
    }
  }, [title]);

  // Calculate reading time based on content
  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFeaturedImage(file);
    }
  }

  async function handleSubmit() {
    setMessage(null);
    setErrorMsg(null);

    // Validation
    if (!title.trim()) {
      setErrorMsg("Please enter a title.");
      return;
    }
    if (!slug.trim()) {
      setErrorMsg("Please enter a slug.");
      return;
    }
    if (!excerpt.trim()) {
      setErrorMsg("Please enter an excerpt.");
      return;
    }
    if (!content.trim()) {
      setErrorMsg("Please enter content.");
      return;
    }

    setUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Get author profile ID (similar to gallery approach)
      let authorId = null;
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('user_id', user.id)
          .single();
        authorId = profile?.id || null;
      }

      // Upload featured image if provided
      let featuredImageUrl = null;
      if (featuredImage) {
        const { publicUrl } = await uploadFeaturedImage(featuredImage);
        featuredImageUrl = publicUrl;
      }

      // Prepare blog post data
      const readingTime = calculateReadingTime(content);
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(Boolean);

      const blogData: Database["public"]["Tables"]["blog_posts"]["Insert"] = {
        title,
        slug,
        excerpt,
        content,
        featured_image_url: featuredImageUrl,
        category_id: null, // We'll use a different approach for categories
        author_id: authorId,
        tags: tagsArray.length > 0 ? tagsArray : null,
        reading_time: readingTime,
        is_featured: isFeatured,
        status: status,
        published_at: status === 'published' ? new Date().toISOString() : null,
        seo_title: title, // Use title as SEO title for now
        seo_description: excerpt, // Use excerpt as SEO description
      };

      // Since we're not using category_id, we'll add the category as the first tag
      if (blogData.tags) {
        blogData.tags = [category, ...blogData.tags];
      } else {
        blogData.tags = [category];
      }

      // Insert blog post
      const { error: insertError } = await supabase.from("blog_posts").insert([blogData]);
      if (insertError) throw insertError;

      setMessage(`Blog post "${title}" ${status === 'published' ? 'published' : 'saved as draft'} successfully!`);
      
      // Clear form
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setCategory("general");
      setTags("");
      setFeaturedImage(null);
      setIsFeatured(false);
      setStatus("draft");
    } catch (err: any) {
      console.error("Blog creation error:", err);
      setErrorMsg(err?.message ?? "Failed to create blog post. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <Link
          to="/admin"
          className="inline-flex items-center text-shade font-bold hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
           Back to Admin Dashboard
        </Link>

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Manage Blog Posts</h1>
          <p className="text-muted-foreground mb-8">Create and publish dental health articles</p>

          <div className="space-y-6 bg-card p-6 rounded-lg border">
            {/* Title & Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title"
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="e.g. The Complete Guide to Dental Implants"
                />
              </div>
              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input 
                  id="slug"
                  value={slug} 
                  onChange={(e) => setSlug(e.target.value)} 
                  placeholder="complete-guide-dental-implants"
                />
                <p className="text-xs text-muted-foreground mt-1">Auto-generated from title, but you can edit it</p>
              </div>
            </div>

            {/* Category & Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div>
                <Label htmlFor="status">Status</Label>
                <select 
                  id="status"
                  value={status} 
                  onChange={(e) => setStatus(e.target.value as "draft" | "published")} 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="flex items-center space-x-2 pt-6">
                <input
                  type="checkbox"
                  id="featured"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                />
                <Label htmlFor="featured">Featured Post</Label>
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea 
                id="excerpt"
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                placeholder="Brief description that appears in blog listings..."
                rows={3}
              />
            </div>

            {/* Content */}
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea 
                id="content"
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Write your blog post content here. You can use HTML tags for formatting..."
                rows={15}
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;strong&gt;, etc. for formatting
              </p>
            </div>

            {/* Tags */}
            <div>
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input 
                id="tags"
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
                placeholder="dental implants, oral surgery, tooth replacement"
              />
            </div>

            {/* Featured Image */}
            <div>
              <Label className="block mb-2">Featured Image</Label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {featuredImage && (
                <div className="mt-3">
                  <img 
                    src={URL.createObjectURL(featuredImage)} 
                    alt="Featured image preview" 
                    className="w-full max-w-md h-48 object-cover rounded-lg border" 
                  />
                  <p className="text-sm text-muted-foreground mt-2">{featuredImage.name}</p>
                </div>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  setStatus("draft");
                  setTimeout(handleSubmit, 100);
                }} 
                disabled={uploading} 
                variant="outline"
                className="flex-1"
              >
                {uploading && status === "draft" ? "Saving Draft..." : "Save as Draft"}
              </Button>
              <Button 
                onClick={() => {
                  setStatus("published");
                  setTimeout(handleSubmit, 100);
                }} 
                disabled={uploading} 
                className="flex-1"
              >
                {uploading && status === "published" ? "Publishing..." : "Publish Post"}
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => {
                  setTitle(""); 
                  setSlug("");
                  setExcerpt("");
                  setContent("");
                  setTags("");
                  setFeaturedImage(null);
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

export default ManageBlogs;