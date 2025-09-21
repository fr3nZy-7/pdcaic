// src/components/CalcomWidget.tsx
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Stethoscope } from 'lucide-react';

interface CalcomWidgetProps {
  username?: string;
  eventSlug?: string;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  className?: string;
  uiConfig?: {
    layout?: 'month_view' | 'week_view';
    theme?: 'light' | 'dark' | 'auto';
    hideEventTypeDetails?: boolean;
    hideBranding?: boolean;
  };
}

const CalcomWidget = ({
  username = "dr-neha",
  eventSlug = "dental-appointment", // This is the default value
  title = "Book Your Dental Appointment",
  subtitle = "Select a convenient date and time for your visit",
  showHeader = true,
  className = "",
  uiConfig = {
    layout: 'month_view',
    theme: 'light',
    hideEventTypeDetails: false,
    hideBranding: true
  }
}: CalcomWidgetProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // The 'calLink' now correctly uses the 'eventSlug' prop
  const calLink = `${username}/${eventSlug}`;
  
  useEffect(() => {
    setIsMounted(true);
    
    (async function () {
      const cal = await getCalApi({});
      cal("ui", uiConfig);
    })();
  }, [uiConfig]);
  
  if (!isMounted) {
    return null;
  }

  return (
    <section className={`calcom-widget-section ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {showHeader && (
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
                {title}
              </h2>
              <p className="text-lg text-black/80">{subtitle}</p>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Easy Online Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Flexible Time Slots</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-primary" />
                  <span>Professional Care</span>
                </div>
              </div>
            </div>
          )}

          <GlassmorphismCard className="bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <Cal 
                calLink={calLink}
                style={{ width: "100%", height: "600px", overflow: "scroll" }}
              />
            </CardContent>
          </GlassmorphismCard>
          
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Having trouble booking? Call us directly at{' '}
              <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                +91 98765 43210
              </a>
              {' '}or WhatsApp us for assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-shade mb-2">Instant Confirmation</h3>
              <p className="text-sm text-gray-600">Receive immediate booking confirmation via email</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-shade mb-2">Easy Rescheduling</h3>
              <p className="text-sm text-gray-600">Modify your appointment anytime via email link</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-shade mb-2">Personalized Care</h3>
              <p className="text-sm text-gray-600">We'll also confirm via WhatsApp for personal touch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalcomWidget;