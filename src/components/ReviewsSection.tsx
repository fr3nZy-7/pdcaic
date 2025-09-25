import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { CardContent } from "@/components/ui/card";
import { ElfsightWidget } from "react-elfsight-widget";

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  backgroundColor?: string;
  elfsightAppId?: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  title = "What Our Patients Say",
  subtitle = "Read genuine reviews from our satisfied patients who have experienced quality dental care at our clinic.",
  showTitle = true,
  backgroundColor = "bg-gradient-to-r from-blue-50 to-pink-50",
  elfsightAppId = "a1157e7e-04a1-48a3-9d78-dccc9ec49b9b",
}) => {
  const [widgetFailed, setWidgetFailed] = useState(false);
  const location = useLocation();

  const staticReviews = [
    {
      id: 1,
      name: "Sampada",
      rating: 5,
      text: "I was searching for the best dental clinic near me for tooth pain and found Dr. Neha Deshpande – she’s absolutely amazing! I got a single-sitting root canal done painlessly. Her hands are so gentle you don’t even realize when she gives you an injection. She explains each procedure in detail, has a great personality, and truly makes you feel comfortable. She’s well-spoken, calm, and perfect for every age group – whether it’s kids, adults, or seniors, you’ll be in safe hands. The clinic also offers braces, smile makeovers, dental implants, and Invisalign. It’s a clean, hygienic space with friendly staff and top-notch service – ideal for anyone in Dhanori, Wagholi, Vishrantwadi, or Viman Nagar.",
      date: "1 month ago"
    },
    {
      id: 2,
      name: "Siddhi",
      rating: 5,
      text: "I had a painless and stress-free tooth extraction at Padmanaabh Dental Clinic, and I couldn't be more thankful. Dr. Neha Deshpande is incredibly kind, patient, and really listens. She explained everything so clearly, which made the whole experience feel a lot less intimidating. Dental treatments can often be confusing and expensive, but she recommends only what is genuinely necessary, and her fees are very reasonable.I’m extremely satisfied with the care I received and would highly recommend Padmanaabh Dental Clinic to anyone seeking reliable and professional dental treatment.",
      date: "2 month ago"
    },
    {
      id: 3,
      name: "Sonali Kadus",
      rating: 5,
      text: "I was looking for good dentist for my 7 yr old daughter since long time as didn't have good experience with few in past. after  many  search found Dr Nena  on google  and I can say she is bestest doctor I have found. She is very polite  , experience and skilled doc. She knows how to handle children. From now  on she is my family  dentist.",
      date: "3 months ago"
    },
    {
      id: 4,
      name: "Sayali Dubash",
      rating: 5,
      text: "Had a great experience with the ortho treatment for our Son! Both Dr. Neha and Dr. Meenakshi did a wonderful job. We felt very much at ease after consulting with the doctors and receiving the assurance of best possible treatment. The follow up and appointment schedule went off very smoothly. Had great communication with the doctors. Will definately recommend the clinic for a number of Dental treatments! Thank you!",
      date: "2 weeks ago"
    }
  ];

  const StaticReviews = () => (
    <div id="reviews" className="static-reviews">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {staticReviews.map((review) => (
          <GlassmorphismCard 
            key={review.id}
            className="p-6 bg-white/60 backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <CardContent className="p-0">
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-shade">{review.name}</p>
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
            </CardContent>
          </GlassmorphismCard>
        ))}
      </div>
      <div className="text-center px-8">
        <a
          href="https://www.google.com/maps/place/Padmanaabh+Dental+Clinic%26Implant+Centre:+Best+Dentist+In+Lohegaon-Best+Rootcanal+RCT+Doctor+Dental+clinic+In+Lohegaon/@18.601987,73.930912,17z/data=!4m6!3m5!1s0x3bc2c7808313ef37:0x853c2d5523f36605!8m2!3d18.6019842!4d73.9335108!16s%2Fg%2F11rjz2t54r?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
        >
          <span>View All Reviews </span>
          <ExternalLink className="h-5 w-5" />
        </a>
        <a 
          href="/gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
          >View Gallery</a>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          These are real reviews from our Google My Business profile. 
          <br />
          <span className="text-primary font-medium">Click above to see all reviews and leave your own!</span>
        </p>
      </div>
    </div>
  );

  // Attempt to render widget, fallback if it fails
  // Widget failure logic can be improved with robust error boundaries or a timeout
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
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

        <div className="max-w-6xl mx-auto">
          {!widgetFailed ? (
            <div className="elfsight-widget-container">
              <ElfsightWidget widgetId={elfsightAppId} />
            </div>
          ) : (
            <StaticReviews />
          )}
        </div>

        <div className="mt-12 text-center">
          <GlassmorphismCard className="inline-block p-6 bg-primary/30 backdrop-blur-2xl shadow-lg">
            <CardContent className="flex items-center space-x-4 p-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-shade">5</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500/90 fill-current" />
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
