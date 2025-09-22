// /src/pages/Blog.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
// import { Link } from "react-router-dom"; // Will be added when integrating
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import HeroSection from "@/components/HeroSection";
import FooterCTA from "@/components/FooterCTA";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";


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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const blogHeroData = {
    title: "Knowledge Center",
    shortDescription: "Your Trusted Source for Dental Health Insights and Tips",
    heroImage: heroImage,
  };

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "endodontics", name: "Endodontics" },
    { id: "general", name: "General Dentistry" },
    { id: "cosmetic", name: "Cosmetic Dentistry" },
    { id: "implants", name: "Dental Implants" },
    { id: "oral-health", name: "Oral Health" },
    { id: "pediatric", name: "Pediatric Dentistry" },
  ];

  // Fetch blog posts and authors from Supabase
  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch published blog posts
      const { data: posts, error: postsError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (postsError) throw postsError;

      // Fetch authors
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, full_name, email');

      if (profilesError) throw profilesError;

      setBlogPosts(posts || []);
      setAuthors(profiles || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load blog posts');
      console.error('Blog fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get author name by ID
  const getAuthorName = (authorId: string | null) => {
    if (!authorId) return "Dr. Padmanaabh"; // Default author
    const author = authors.find(a => a.id === authorId);
    return author?.full_name || author?.email || "Dr. Padmanaabh";
  };

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    
    if (selectedCategory === "all") {
      return matchesSearch;
    }
    
    // Check if the category is in the tags array (first tag is the category)
    const matchesCategory = post.tags?.includes(selectedCategory) ?? false;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.is_featured);
  const allFilteredPosts = filteredPosts;

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return new Date().toLocaleDateString();
    return new Date(dateString).toLocaleDateString();
  };

  // Get category name from tags
  const getCategoryFromTags = (tags: string[] | null) => {
    if (!tags || tags.length === 0) return "General Dentistry";
    const categoryId = tags[0]; // First tag is the category
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || "General Dentistry";
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

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading blog posts: {error}</p>
            <Button onClick={fetchBlogData}>Try Again</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Search */}
      <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={blogHeroData.title}
        description={blogHeroData.shortDescription}
        backgroundImage={blogHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/20"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      >
        <>
          {/* Search Bar */}
          <div className="w-full mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg rounded-full bg-background/90"
            />
          </div>
        </>
      </HeroSection>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.featured_image_url || heroImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">
                        {getCategoryFromTags(post.tags)}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.reading_time || 5} min read
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {getAuthorName(post.author_id)}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.published_at)}
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter and All Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 mt-4 justify-center
                  ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white hover:bg-purple-700" // selected
                      : "bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white hover:opacity-90"
                  }
                  hover:scale-105 hover:shadow-lg
                `}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFilteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featured_image_url || heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {getCategoryFromTags(post.tags)}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.reading_time || 5} min read
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <User className="h-3 w-3 mr-1" />
                        {getAuthorName(post.author_id)}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.published_at)}
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="ml-auto">
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {allFilteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
              {blogPosts.length === 0 && (
                <p className="text-muted-foreground text-sm mt-2">
                  No blog posts have been published yet.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <FloatingActionButtons />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Blog;