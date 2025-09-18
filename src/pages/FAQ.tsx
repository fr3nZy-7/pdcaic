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
  heroImage: "/images/services/faq.jpg",
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
    {
      question: "My gums bleed when I brush. Is this normal?",
      answer: "No, bleeding gums are a sign of inflammation, often caused by gum disease (gingivitis). It's a common misconception that this is normal. When caught early, gingivitis is easily reversible with a professional cleaning and improved home care. Don't ignore it—addressing it promptly can prevent more serious issues like periodontitis.",
    },
    {
      question: "How often should I visit the dentist?",
      answer: "For most people, we recommend a dental check-up and cleaning every six months. Regular visits are crucial for preventing cavities and gum disease, as they allow us to detect minor issues before they become major problems. However, if you have a history of dental problems, we may suggest more frequent appointments.",
    },
    {
      question: "Is teeth whitening safe for my teeth?",
      answer: "Yes, professional teeth whitening is a safe and effective way to brighten your smile. We use dentist-approved products and techniques that minimize sensitivity and protect your tooth enamel. Unlike DIY kits, our professional treatments are tailored to your needs and supervised by a dental expert for optimal results.",
    },
    {
      question: "Why are my teeth sensitive to hot and cold?",
      answer: "Tooth sensitivity can be caused by several factors, including cavities, worn-down enamel, gum recession, or a cracked tooth. It's not a condition to be ignored. A dental exam can pinpoint the exact cause, and we can recommend treatments like desensitizing toothpaste, fillings, or fluoride applications to provide lasting relief.",
    },
    {
      question: "I only have a small cavity. Do I really need a filling?",
      answer: "Yes, even small cavities should be treated. A cavity is a progressive disease that will continue to grow, destroying more of your tooth's structure. Filling it early is a simple, quick, and cost-effective way to prevent the decay from reaching the nerve, which would require a more complex and expensive root canal.",
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, modern dental X-rays are extremely safe. We use digital X-ray technology that emits a very low dose of radiation—significantly less than what you're exposed to from everyday sources like sunlight. They are a vital diagnostic tool that allows us to see what's happening beneath the surface and identify issues invisible to the naked eye.",
    },
    {
      question: "What's the best way to brush my teeth?",
      answer: "The key is to brush gently but thoroughly. Use a soft-bristled toothbrush and brush in small, circular motions at a 45-degree angle to the gumline. Brush for at least two minutes, covering all surfaces of your teeth and your tongue. Remember to floss daily as well—it's just as important!",
    },
    {
      question: "Do I need to replace my missing tooth?",
      answer: "We strongly recommend replacing a missing tooth, even if it's not a front tooth. A missing tooth can cause the surrounding teeth to shift, affecting your bite and leading to jaw pain and more tooth loss. Options like dental implants or bridges can restore your smile, function, and oral health.",
    },
    {
      question: "Are dental implants a permanent solution?",
      answer: "Yes, dental implants are considered a permanent and highly durable solution for missing teeth. The implant fuses with your jawbone, creating a stable foundation that can last a lifetime with proper oral hygiene and regular dental check-ups.",
    },
    {
      question: "Can my child get a cavity even if they don't eat many sweets?",
      answer: "Unfortunately, yes. While sugar is a major culprit, any food containing carbohydrates can contribute to cavities. Good oral hygiene, including regular brushing and flossing, is the most important factor. Dental sealants and fluoride treatments are also highly effective at protecting children's teeth from decay.",
    },
    {
      question: "Is bad breath always a sign of a dental problem?",
      answer: "Persistent bad breath (halitosis) is often a sign of a dental issue, such as gum disease, cavities, or bacteria on the tongue. In some cases, it can be related to a medical condition. A professional dental exam can help us identify the cause and provide a solution to get your breath fresh and healthy again.",
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
        className="relative bg-gradient-to-r from-[#23AAB9] to-[#0194C1] min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${faqHeroData.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#23AAB9] to-[#0194C1]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Home
          </Link>

          {/* Hero Content  */}
          <div className="max-w-3xl mx-auto text-center ">
            <GlassmorphismCard className="p-8 md:p-12 bg-white/40 backdrop-blur-2xl shadow-lg">
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
                className="bg-primary-light/30 rounded-lg border border-primary/20 px-6"
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