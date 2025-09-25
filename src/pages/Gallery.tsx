import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { X, Play } from "lucide-react";
import FooterCTA from "@/components/FooterCTA";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import HeroSection from "@/components/HeroSection";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  media_url: string;
  media_type: 'image' | 'video';
  tags?: string[];
  pair_id?: string;
  alt_text?: string;
}

interface BeforeAfterPair {
  id: string;
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPair, setSelectedPair] = useState<BeforeAfterPair | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [beforeAfterPairs, setBeforeAfterPairs] = useState<BeforeAfterPair[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GalleryHeroData = {
    title: "Our Gallery",
    shortDescription: "Take a visual journey through our modern dental clinic, see our advanced treatments in action, and meet our dedicated team of professionals.",
    heroImage: "/images/common/gallery-bg.jpg",
  };

  const categories = [
    { id: "all", name: "All" },
    { id: "clinic", name: "Clinic" },
    { id: "treatments", name: "Treatments" },
    { id: "team", name: "Team" },
    { id: "before-after", name: "Before & After" },
  ];

  // Fetch gallery data from Supabase
  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('gallery')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      const items: GalleryItem[] = [];
      const pairs: BeforeAfterPair[] = [];
      const pairMap = new Map<string, GalleryItem[]>();

      // Process the data
      data?.forEach((item) => {
        if (item.pair_id) {
          // Group paired items
          if (!pairMap.has(item.pair_id)) {
            pairMap.set(item.pair_id, []);
          }
          pairMap.get(item.pair_id)?.push({
            id: item.id,
            title: item.title,
            description: item.description || undefined,
            media_url: item.media_url,
            media_type: item.media_type as 'image' | 'video',
            tags: item.tags || undefined,
            pair_id: item.pair_id,
            alt_text: item.alt_text || undefined,
          });
        } else {
          // Individual items
          items.push({
            id: item.id,
            title: item.title,
            description: item.description || undefined,
            media_url: item.media_url,
            media_type: item.media_type as 'image' | 'video',
            tags: item.tags || undefined,
            alt_text: item.alt_text || undefined,
          });
        }
      });

      // Convert pairs to before/after format
      pairMap.forEach((pairItems, pairId) => {
        if (pairItems.length === 2) {
          // Sort by title to ensure "Before" comes first
          const sortedPair = pairItems.sort((a, b) => {
            if (a.title.includes('Before')) return -1;
            if (b.title.includes('Before')) return 1;
            return 0;
          });

          pairs.push({
            id: pairId,
            title: sortedPair[0].title.replace(' - Before', ''),
            before: sortedPair[0].media_url,
            after: sortedPair[1].media_url,
            beforeAlt: sortedPair[0].alt_text || 'Before',
            afterAlt: sortedPair[1].alt_text || 'After',
          });
        }
      });

      setGalleryItems(items);
      setBeforeAfterPairs(pairs);
    } catch (err: any) {
      setError(err.message || 'Failed to load gallery');
      console.error('Gallery fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter items based on selected category
  const getFilteredItems = () => {
    if (selectedCategory === "all") {
      return galleryItems;
    }
    if (selectedCategory === "before-after") {
      return []; // Before/after items are handled separately
    }
    return galleryItems.filter(item => 
      item.tags?.includes(selectedCategory)
    );
  };

  const getFilteredPairs = () => {
    if (selectedCategory === "all" || selectedCategory === "before-after") {
      return beforeAfterPairs;
    }
    return [];
  };

  const filteredItems = getFilteredItems();
  const filteredPairs = getFilteredPairs();

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
            <p className="text-red-600 mb-4">Error loading gallery: {error}</p>
            <Button onClick={fetchGalleryData}>Try Again</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <> 
    <Helmet>
  <title>Smile Gallery | Padmanaabh Dental Clinic Pune</title>
  <meta
    name="description"
    content="View our smile gallery showcasing real patient results from dental implants, braces, smile makeovers, and cosmetic dentistry in Pune."
  />
  <link rel="canonical" href="https://padmanaabhdental.clinic/gallery" />
  <meta property="og:title" content="Smile Gallery | Padmanaabh Dental Clinic" />
  <meta property="og:description" content="See before-and-after photos from happy patients at Padmanaabh Dental Clinic in Pune." />
  <meta property="og:url" content="https://padmanaabhdental.clinic/gallery" />
  <meta property="og:image" content="https://padmanaabhdental.clinic/images/common/og-gallery.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://padmanaabhdental.clinic/gallery#page",
        "name": "Gallery | Padmanaabh Dental Clinic",
        "mainEntity": { "@id": "https://padmanaabhdental.clinic/#dentist" }
      }),
    }}
  />
</Helmet>


    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={GalleryHeroData.title}
        description={GalleryHeroData.shortDescription}
        backgroundImage={GalleryHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/20"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      >
        <>
          <WhatsAppUsButton className="w-full"/>
          <BookAppointmentButton />
        </>
      </HeroSection>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200/40 to-pink-100/70">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Regular Items */}
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.media_url)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.media_url}
                      alt={item.alt_text || item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {item.media_type === "video" && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                      {item.tags && item.tags[0] && (
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(cat => cat.id === item.tags?.[0])?.name || item.tags[0]}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Before/After Pairs */}
            {filteredPairs.map((pair) => (
              <Card 
                key={pair.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPair(pair)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <div className="w-full h-full relative">
                      {/* Split image preview */}
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 overflow-hidden">
                          <img
                            src={pair.before}
                            alt={pair.beforeAlt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'left center' }}
                          />
                        </div>
                        <div className="w-1/2 overflow-hidden">
                          <img
                            src={pair.after}
                            alt={pair.afterAlt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'right center' }}
                          />
                        </div>
                      </div>
                      {/* Divider line */}
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 transform -translate-x-0.5"></div>
                      {/* Before/After labels */}
                      <div className="absolute top-2 left-2">
                        <Badge className="text-xs bg-black/70 text-white">Before</Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge className="text-xs bg-black/70 text-white">After</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm mb-2">{pair.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        Before & After
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && filteredPairs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Regular Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Before/After Slider Modal */}
      {selectedPair && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPair(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={() => setSelectedPair(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">{selectedPair.title}</h3>
              <BeforeAfterSlider
                before={selectedPair.before}
                after={selectedPair.after}
                beforeAlt={selectedPair.beforeAlt}
                afterAlt={selectedPair.afterAlt}
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200/40 to-pink-100/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our patients about their experiences at 
              Padmanaabh Dental Clinic and how we've helped transform their smiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted/50 relative cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-foreground font-semibold text-sm mb-1">
                        Patient Testimonial {video}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        Success story from our satisfied patient
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
      <FloatingActionButtons />
      <Footer />
    </div>
    </>
  );
};

export default Gallery;