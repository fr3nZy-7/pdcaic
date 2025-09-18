import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, MessageCircle, Phone, ArrowLeft, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GlassmorphismCard from '@/components/GlassmorphismCard';
import WhatsAppUsButton from '@/components/WhatsAppUsButton';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import FooterCTA from '@/components/FooterCTA';

const faqHeroData = {
  title: "Frequently Asked Questions",
  shortDescription: "Find answers to common queries that patients have about dental care, treatments, and our clinic.",
  heroImage: "/images/faq-hero-bg.jpg",
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "Will my root canal or implant hurt?",
      answer: "Not at all. Root canal procedures have come a long way. We use advanced anesthesia and gentle techniques to ensure a pain-free experience. Be assured we will ensure your treatment is pain free.",
    },
    {
      question: "How many sittings will my treatment need?",
      answer: "The number of sittings depends on the type and complexity of your treatment. Simple procedures like fillings may require just one visit, while complex treatments like implants or orthodontics may require multiple appointments spread over several months. We'll provide you with a detailed treatment plan during your consultation.",
    },
    {
      question: "I'm diabetic. Can I still get dental implants or surgery?",
      answer: "Yes, diabetes doesn't automatically disqualify you from dental implants or surgery. However, it requires special consideration and careful management. Well-controlled diabetes generally allows for successful dental procedures. We'll work closely with your physician to ensure optimal healing and treatment outcomes.",
    },
    {
      question: "How much will my treatment cost?",
      answer: "Treatment costs vary depending on the complexity and type of procedure required. We provide transparent pricing and detailed treatment estimates during your consultation. We also offer flexible payment options and will discuss insurance coverage to help make your treatment affordable.",
    },
    {
      question: "Can I reschedule my appointment if needed?",
      answer: "Absolutely! We understand that schedules can change. Please give us at least 24 hours notice when possible so we can accommodate other patients. You can call us or use our online portal to reschedule your appointment conveniently.",
    },
    {
      question: "How long will a typical dental appointment take?",
      answer: "Appointment duration varies by treatment type. Regular cleanings typically take 45-60 minutes, while complex procedures may require 1-3 hours. We'll inform you of the expected duration when scheduling your appointment so you can plan accordingly.",
    },
    {
      question: "I'm coming from outside Pune. Can I complete treatment quickly?",
      answer: "Yes, we can often accommodate patients from outside Pune by scheduling intensive treatment plans. Depending on your procedure, we may be able to complete multiple steps in fewer visits. Contact us to discuss your specific needs and timeline.",
    },
    {
      question: "Can I get in touch with someone who's had a similar treatment?",
      answer: "We respect patient privacy and confidentiality, so we cannot directly connect you with other patients. However, we can share anonymized testimonials and case studies. We're also happy to provide references to general patient satisfaction surveys and reviews.",
    },
    {
      question: "What if I feel nervous or anxious during treatment?",
      answer: "We completely understand dental anxiety and offer several options to help you feel comfortable. These include detailed explanations of procedures, relaxation techniques, sedation options when appropriate, and a calming environment. Our team is trained to work with anxious patients.",
    },
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${faqHeroData.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ABDA]/80 to-[#4DD0E1]/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Home
          </Link>

          {/* Hero Content */}
          <div className="max-w-3xl mx-auto text-center">
            <GlassmorphismCard className="p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {faqHeroData.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {faqHeroData.shortDescription}
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-lg mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6" />
                <Input
                  type="text"
                  placeholder="Search for an answer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-4 text-lg rounded-full border-2 border-primary/40 bg-white shadow-xl text-black placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-colors"
                />
              </div>

              
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-primary-light/10 rounded-lg border border-primary/20 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">
                    {index + 1}. {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      
      <FloatingActionButtons />
      <FooterCTA/>
      <Footer />
    </div>
  );
};

export default FAQ;