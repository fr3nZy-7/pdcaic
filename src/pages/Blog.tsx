import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dentalImplantImage from "@/assets/dental-implant.jpg";
import heroImage from "@/assets/hero-dental-clinic.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "general", name: "General Dentistry" },
    { id: "cosmetic", name: "Cosmetic Dentistry" },
    { id: "implants", name: "Dental Implants" },
    { id: "oral-health", name: "Oral Health" },
    { id: "pediatric", name: "Pediatric Dentistry" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Dental Implants: What You Need to Know",
      excerpt: "Discover everything about dental implants, from the procedure to recovery, and why they're the best solution for missing teeth.",
      category: "implants",
      author: "Dr. Padmanaabh",
      date: "2024-01-15",
      readTime: "8 min read",
      image: dentalImplantImage,
      slug: "complete-guide-dental-implants",
      featured: true,
    },
    {
      id: 2,
      title: "10 Essential Tips for Maintaining Oral Health at Home",
      excerpt: "Simple yet effective daily habits that can help you maintain excellent oral health and prevent common dental problems.",
      category: "oral-health",
      author: "Dr. Priya Sharma",
      date: "2024-01-10",
      readTime: "5 min read",
      image: heroImage,
      slug: "oral-health-tips-home",
      featured: false,
    },
    {
      id: 3,
      title: "Cosmetic Dentistry: Transform Your Smile with Modern Techniques",
      excerpt: "Explore the latest cosmetic dentistry options available to enhance your smile and boost your confidence.",
      category: "cosmetic",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-08",
      readTime: "6 min read",
      image: dentalImplantImage,
      slug: "cosmetic-dentistry-modern-techniques",
      featured: true,
    },
    {
      id: 4,
      title: "Root Canal Treatment: Myths vs Reality",
      excerpt: "Debunking common misconceptions about root canal treatment and explaining the modern, painless approach.",
      category: "general",
      author: "Dr. Padmanaabh",
      date: "2024-01-05",
      readTime: "7 min read",
      image: heroImage,
      slug: "root-canal-myths-reality",
      featured: false,
    },
    {
      id: 5,
      title: "Dental Care for Children: Starting Early for Lifelong Health",
      excerpt: "Important guidelines for parents on maintaining their children's dental health from infancy through adolescence.",
      category: "pediatric",
      author: "Dr. Priya Sharma",
      date: "2024-01-03",
      readTime: "6 min read",
      image: dentalImplantImage,
      slug: "dental-care-children-guide",
      featured: false,
    },
    {
      id: 6,
      title: "Understanding Gum Disease: Prevention and Treatment",
      excerpt: "Comprehensive guide to recognizing, preventing, and treating gum disease to maintain optimal oral health.",
      category: "oral-health",
      author: "Dr. Rajesh Kumar",
      date: "2023-12-28",
      readTime: "9 min read",
      image: heroImage,
      slug: "gum-disease-prevention-treatment",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light to-primary overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground leading-tight">
            Dental Health Blog
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Stay informed about the latest in dental health, treatment options, 
            and oral care tips from our experienced dental professionals.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg rounded-full bg-background/90"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
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
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
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
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6 py-2"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
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
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest dental health tips 
            and insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;