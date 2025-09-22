import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-dental-clinic.jpg";


interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  author_id: string | null;
  tags: string[] | null;
  reading_time: number | null;
  is_featured: boolean;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
}

interface Author {
  id: string;
  full_name: string | null;
  email: string;
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  featured_image_url: string | null;
  excerpt: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Categories mapping for display
  const categories = [
    { id: "general", name: "General Dentistry" },
    { id: "cosmetic", name: "Cosmetic Dentistry" },
    { id: "implants", name: "Dental Implants" },
    { id: "oral-health", name: "Oral Health" },
    { id: "pediatric", name: "Pediatric Dentistry" },
  ];

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch the specific blog post
      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (postError) {
        if (postError.code === 'PGRST116') {
          // No rows returned
          setError('Blog post not found');
        } else {
          throw postError;
        }
        return;
      }

      setBlogPost(post);

      // Fetch author information
      if (post.author_id) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('id, full_name, email')
          .eq('id', post.author_id)
          .single();
        
        if (profile) setAuthor(profile);
      }

      // Fetch related posts (same category, different post)
      if (post.tags && post.tags.length > 0) {
        const category = post.tags[0]; // First tag is category
        const { data: related } = await supabase
          .from('blog_posts')
          .select('id, title, slug, featured_image_url, excerpt')
          .eq('status', 'published')
          .contains('tags', [category])
          .neq('id', post.id)
          .limit(3);

        if (related) setRelatedPosts(related);
      }

    } catch (err: any) {
      setError(err.message || 'Failed to load blog post');
      console.error('BlogPost fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get category name from tags
  const getCategoryFromTags = (tags: string[] | null) => {
    if (!tags || tags.length === 0) return "General Dentistry";
    const categoryId = tags[0];
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || "General Dentistry";
  };

  // Get author name
  const getAuthorName = () => {
    if (!author) return "Dr. Padmanaabh";
    return author.full_name || author.email || "Dr. Padmanaabh";
  };

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return new Date().toLocaleDateString();
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">{error || "The requested blog post could not be found."}</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="flex items-center justify-between mb-6">
            <Badge variant="secondary">{getCategoryFromTags(blogPost.tags)}</Badge>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(blogPost.published_at)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.reading_time || 5} min read
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Author and Social Share */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{getAuthorName()}</p>
                <p className="text-sm text-muted-foreground">Chief Endodontist & Founder</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          {blogPost.featured_image_url && (
            <div className="mb-8">
              <img
                src={blogPost.featured_image_url}
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          {blogPost.content && (
            <div 
              className="prose prose-lg max-w-none mb-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:mb-4 [&>ul>li]:mb-2 [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          )}

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 1 && (
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.slice(1).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.featured_image_url || heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          Read More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;