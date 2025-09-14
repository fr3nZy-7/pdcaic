import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import dentalImplantImage from "@/assets/dental-implant.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  // In a real application, you would fetch the blog post data based on the slug
  const blogPost = {
    title: "The Complete Guide to Dental Implants: What You Need to Know",
    content: `
      <p>Dental implants have revolutionized the field of dentistry, offering a permanent solution for missing teeth that looks, feels, and functions like natural teeth. If you're considering dental implants, this comprehensive guide will provide you with all the information you need to make an informed decision.</p>

      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts that are surgically placed into the jawbone to replace the root of a missing tooth. Once the implant integrates with the bone, a crown is attached to restore the appearance and function of the tooth.</p>

      <h2>Benefits of Dental Implants</h2>
      <ul>
        <li><strong>Permanent Solution:</strong> With proper care, dental implants can last a lifetime</li>
        <li><strong>Natural Appearance:</strong> Implants look and feel like your natural teeth</li>
        <li><strong>Preserve Bone:</strong> Implants stimulate jawbone growth and prevent bone loss</li>
        <li><strong>Improved Function:</strong> Eat your favorite foods without worry</li>
        <li><strong>No Impact on Adjacent Teeth:</strong> Unlike bridges, implants don't require altering healthy teeth</li>
      </ul>

      <h2>The Implant Process</h2>
      <p>The dental implant process typically involves several stages:</p>
      
      <h3>1. Initial Consultation</h3>
      <p>During your first visit, we'll evaluate your oral health, take X-rays, and discuss your treatment options.</p>

      <h3>2. Implant Placement</h3>
      <p>The titanium implant is surgically placed into the jawbone under local anesthesia. This procedure is typically painless.</p>

      <h3>3. Healing and Integration</h3>
      <p>Over the next 3-6 months, the implant will integrate with your jawbone in a process called osseointegration.</p>

      <h3>4. Crown Placement</h3>
      <p>Once healing is complete, we'll attach an abutment and crown to complete your new tooth.</p>

      <h2>Are You a Candidate for Dental Implants?</h2>
      <p>Most people with good oral and general health are candidates for dental implants. Factors we consider include:</p>
      <ul>
        <li>Adequate bone density in the jaw</li>
        <li>Healthy gums</li>
        <li>Commitment to good oral hygiene</li>
        <li>Non-smoker or willingness to quit</li>
      </ul>

      <h2>Post-Implant Care</h2>
      <p>Caring for your dental implants is similar to caring for natural teeth:</p>
      <ul>
        <li>Brush twice daily with a soft-bristled toothbrush</li>
        <li>Floss daily around the implant</li>
        <li>Use an antimicrobial mouth rinse</li>
        <li>Schedule regular dental check-ups and cleanings</li>
        <li>Avoid hard foods that could damage the crown</li>
      </ul>

      <h2>Why Choose Padmanaabh Dental Clinic for Your Implants?</h2>
      <p>At Padmanaabh Dental Clinic, we have over 15 years of experience in dental implant placement. Our state-of-the-art facility and expert team ensure you receive the highest quality care in a comfortable environment.</p>

      <p>If you're ready to restore your smile with dental implants, contact us today to schedule your consultation.</p>
    `,
    category: "implants",
    author: "Dr. Padmanaabh",
    date: "2024-01-15",
    readTime: "8 min read",
    image: dentalImplantImage,
    tags: ["dental implants", "oral surgery", "tooth replacement", "dental care"],
  };

  const relatedPosts = [
    {
      title: "Root Canal Treatment: Myths vs Reality",
      slug: "root-canal-myths-reality",
      image: dentalImplantImage,
    },
    {
      title: "Cosmetic Dentistry: Transform Your Smile",
      slug: "cosmetic-dentistry-modern-techniques",
      image: dentalImplantImage,
    },
    {
      title: "10 Essential Tips for Maintaining Oral Health",
      slug: "oral-health-tips-home",
      image: dentalImplantImage,
    },
  ];

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
            <Badge variant="secondary">Dental Implants</Badge>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
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
                <p className="font-semibold">{blogPost.author}</p>
                <p className="text-sm text-muted-foreground">Lead Dentist & Founder</p>
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
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-primary text-primary-foreground mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Smile?
              </h3>
              <p className="mb-6 opacity-90">
                Schedule a consultation with our dental experts to discuss your treatment options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Call: +91 9999999999
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;