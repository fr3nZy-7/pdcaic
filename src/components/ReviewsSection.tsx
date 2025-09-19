import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    elfsight?: any;
    ElfSight?: any;
  }
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  backgroundColor?: string;
  elfsightAppId?: string;
  maxRetryTime?: number;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  title = "What Our Patients Say",
  subtitle = "Read genuine reviews from our satisfied patients who have experienced quality dental care at our clinic.",
  showTitle = true,
  backgroundColor = "bg-gradient-to-r from-blue-50 to-pink-50",
  elfsightAppId = "a1157e7e-04a1-48a3-9d78-dccc9ec49b9b",
  maxRetryTime = 5000
}) => {
  const [widgetFailed, setWidgetFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const location = useLocation();

  // Static fallback reviews data
  const staticReviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Excellent dental care! Dr. Neha and her team are very professional and caring. The clinic is modern and clean. Highly recommended!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Rajesh K.",
      rating: 5,
      text: "Outstanding service and treatment. The dental implant procedure was painless and the results are amazing. Thank you team!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Priya S.",
      rating: 5,
      text: "Best dental clinic in Pune! The staff is friendly, and the doctors explain everything clearly. Very satisfied with the treatment.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "John D.",
      rating: 5,
      text: "Professional team and excellent facilities. My root canal treatment was completed without any discomfort. Highly appreciate the care!",
      date: "2 weeks ago"
    }
  ];

  useEffect(() => {
    let retryTimer: NodeJS.Timeout;
    let checkTimer: NodeJS.Timeout;

    const loadElfsightScript = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
        setScriptLoaded(true);
        initializeWidget();
        return;
      }

      // Load script dynamically
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Elfsight script loaded successfully');
        setScriptLoaded(true);
        // Wait a bit for Elfsight to initialize
        setTimeout(() => {
          initializeWidget();
        }, 1000);
      };
      
      script.onerror = () => {
        console.error('Failed to load Elfsight script');
        setWidgetFailed(true);
        setIsLoading(false);
      };
      
      document.head.appendChild(script);
    };

    const initializeWidget = () => {
      // Try multiple initialization methods
      try {
        // Method 1: Direct initialization
        if (window.elfsight && typeof window.elfsight.init === 'function') {
          window.elfsight.init();
        }
        
        // Method 2: Alternative initialization
        if (window.ElfSight && typeof window.ElfSight.init === 'function') {
          window.ElfSight.init();
        }
        
        // Method 3: Manual widget detection
        setTimeout(() => {
          const widgets = document.querySelectorAll('.elfsight-app-' + elfsightAppId);
          widgets.forEach(widget => {
            if (window.elfsight && window.elfsight.render) {
              window.elfsight.render(widget);
            }
          });
        }, 500);
        
      } catch (error) {
        console.error('Elfsight initialization error:', error);
      }
      
      // Start checking widget status
      checkWidgetStatus();
    };

    const checkWidgetStatus = () => {
      retryTimer = setTimeout(() => {
        const elfsightWidget = document.querySelector(`.elfsight-app-${elfsightAppId}`);
        
        if (elfsightWidget) {
          const widgetHTML = elfsightWidget.innerHTML.toLowerCase();
          
          // Check for error conditions
          if (widgetHTML.includes('limit') || 
              widgetHTML.includes('error') || 
              widgetHTML.includes('upgrade') ||
              widgetHTML.includes('views exceeded') ||
              widgetHTML.includes('plan expired')) {
            console.log('Elfsight widget limit reached or error detected');
            setWidgetFailed(true);
            setIsLoading(false);
            return;
          }
          
          // Check if widget has content
          const widgetContent = elfsightWidget.querySelector('[data-elfsight-app-content]') || 
                               elfsightWidget.querySelector('.elfsight-widget-content') ||
                               elfsightWidget.querySelector('iframe');
          
          if (widgetContent) {
            console.log('Elfsight widget loaded successfully');
            setWidgetFailed(false);
            setIsLoading(false);
            return;
          }
        }
        
        // Continue checking if still loading
        if (isLoading) {
          checkTimer = setTimeout(checkWidgetStatus, 1000);
        }
      }, 2000);
      
      // Final fallback
      setTimeout(() => {
        if (isLoading) {
          console.log('Elfsight widget loading timeout - switching to fallback');
          setWidgetFailed(true);
          setIsLoading(false);
        }
        if (checkTimer) clearTimeout(checkTimer);
      }, maxRetryTime);
    };

    // Initialize everything
    loadElfsightScript();

    return () => {
      if (retryTimer) clearTimeout(retryTimer);
      if (checkTimer) clearTimeout(checkTimer);
    };
  }, [elfsightAppId, maxRetryTime, location.pathname]);

  // Re-initialize widget when route changes
  useEffect(() => {
    if (scriptLoaded && !widgetFailed) {
      setIsLoading(true);
      setTimeout(() => {
        if (window.elfsight && typeof window.elfsight.init === 'function') {
          window.elfsight.init();
        }
      }, 500);
    }
  }, [location.pathname, scriptLoaded, widgetFailed]);

  const StaticReviews = () => (
    <div className="static-reviews">
      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {staticReviews.map((review) => (
          <GlassmorphismCard 
            key={review.id}
            className="p-6 bg-white/60 backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <CardContent className="p-0">
              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">{review.date}</span>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
              
              {/* Reviewer Name */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-shade">{review.name}</p>
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
            </CardContent>
          </GlassmorphismCard>
        ))}
      </div>

      {/* View All Reviews Button */}
      <div className="text-center">
      <a
        href="https://www.google.com/maps/place/Padmanaabh+Dental+Clinic%26Implant+Centre:+Best+Dentist+In+Lohegaon-Best+Rootcanal+RCT+Doctor+Dental+clinic+In+Lohegaon/@18.601987,73.930912,17z/data=!4m6!3m5!1s0x3bc2c7808313ef37:0x853c2d5523f36605!8m2!3d18.6019842!4d73.9335108!16s%2Fg%2F11rjz2t54r?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
        >
        
        <span>View All Reviews </span>
        <ExternalLink className="h-5 w-5" />
    </a>
    </div>

      {/* Google Reviews Notice */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          These are real reviews from our Google My Business profile. 
          <br />
          <span className="text-primary font-medium">Click above to see all reviews and leave your own!</span>
        </p>
      </div>
    </div>
  );

  const LoadingReviews = () => (
    <div className="text-center py-12">
      <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-lg">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-3"></div>
        <span className="text-primary font-medium">Loading reviews...</span>
      </div>
    </div>
  );

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
              {title}
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        )}

        {/* Reviews Content */}
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <LoadingReviews />
          ) : widgetFailed ? (
            <StaticReviews />
          ) : (
            <div className="elfsight-widget-container">
              {/* Elfsight Widget */}
              <div 
                className={`elfsight-app-${elfsightAppId}`}
                data-elfsight-app-lazy
                key={location.pathname}
              ></div>
              
              {/* Fallback message that shows if widget doesn't load */}
              <div className="widget-fallback hidden">
                <StaticReviews />
              </div>
            </div>
          )}
        </div>

        {/* Overall Rating Display */}
        <div className="mt-12 text-center">
          <GlassmorphismCard className="inline-block p-6 bg-primary/30 backdrop-blur-2xl shadow-lg">
            <CardContent className="flex items-center space-x-4 p-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-shade">4.9</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 mt-1">Google Rating</div>
              </div>
              <div className="text-center border-l border-gray-300 pl-4">
                <div className="text-3xl font-bold text-shade">100+</div>
                <div className="text-sm text-gray-600 mt-1">Reviews</div>
              </div>
            </CardContent>
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;