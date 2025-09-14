import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
      
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Link>
      </div>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light/20 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find answers to common queries that patients have
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg rounded-full border-primary/20 focus:border-primary"
            />
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

      {/* Still Have Questions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still have questions?
              </h2>
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Open today 10:00 am – 08:00 pm</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday to Friday</span>
                      <span>9:00am to 6:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00am to 08:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointments Only</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Experience exceptional dental care in a comfortable environment. 
                  Our dedicated team is here to ensure your smile shines bright.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center justify-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Us</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Book Appointment</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Location</h4>
                      <p className="opacity-90">
                        Padmanaabh Dental Clinic, Lane No. 1 Sainik Colony, 
                        Pathore Wasti, Lohegaon, Pune, Maharashtra, India
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <p className="opacity-90">+91 9999999999</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="opacity-90">hello@padmanaabhclinic.com</p>
                    </div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="mt-6 w-full"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;