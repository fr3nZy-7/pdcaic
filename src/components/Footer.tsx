import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import FullLogo from "@/assets/full-logo-w-name.svg";

const Footer = () => {
  return (
    <footer className="bg-primary/00 text-white relative overflow-hidden">
      {/* Background Design Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 728" 
          className="object-cover w-full h-full"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern id="footerPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="2" fill="currentColor" opacity="0.3"/>
            <circle cx="150" cy="50" r="1" fill="currentColor" opacity="0.2"/>
            <circle cx="50" cy="150" r="1" fill="currentColor" opacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerPattern)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Clinic Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center ">
              <img
                src={FullLogo}
                alt="Padmanaabh Dental Clinic & Implant Centre"
                className="h-48 filter brightness-100 "
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              {/* Fallback text logo */}
              <div className="hidden">
                <div className="font-heading font-bold text-2xl">PADMANAABH</div>
                <div className="font-body text-sm opacity-80">Dental Clinic & Implant Centre</div>
              </div>
            </div>

            {/* Clinic Description */}
            <p className="font-body text-black/80 leading-relaxed max-w-md">
              Experience exceptional dental care with state-of-the-art technology and 
              personalized treatment plans. Your smile is our passion, your comfort is our priority.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <div className="font-body">
                  <div className="font-medium text-black">Our Location</div>
                  <div className="text-black/80 text-sm leading-relaxed">
                    Lane No. 1 Sainik Colony, Pathore Wasti,<br />
                    Lohegaon, Pune, Maharashtra 411047
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="font-body">
                  <div className="font-medium text-black">Call Us</div>
                  <a 
                    href="tel:+917507325539" 
                    className="text-black/80 text-sm hover:text-accent transition-colors"
                  >
                    +91 7507 32 55 39
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="font-body">
                  <div className="font-medium text-black">Email Us</div>
                  <a 
                    href="mailto:nehaendo2019@gmail.com" 
                    className="text-black/80 text-sm hover:text-accent transition-colors"
                  >
                    nehaendo2019@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="font-body">
                  <div className="font-medium text-black">Working Hours</div>
                  <div className="text-black/80 text-sm">
                    Mon-Sat: 10:00 AM - 8:00 PM<br />
                    Sun: By Appointment Only
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-black mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 font-body">
                <Link to="/" className="text-black/80 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
                <Link to="/services" className="text-black/80 hover:text-accent transition-colors text-sm">
                  Services
                </Link>
                <Link to="/about" className="text-black/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/gallery" className="text-black/80 hover:text-accent transition-colors text-sm">
                  Gallery
                </Link>
                <Link to="/blog" className="text-black/80 hover:text-accent transition-colors text-sm">
                  Blog
                </Link>
                <Link to="/contact" className="text-black/80 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
                <Link to="/faq" className="text-black/80 hover:text-accent transition-colors text-sm">
                  FAQ
                </Link>
                <Link to="/dental-tourism" className="text-black/80 hover:text-accent transition-colors text-sm">
                  Dental Tourism
                </Link>
              </div>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-black mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/dr.nehadeshpandetambe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-shade/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-9 w-9" />
                </a>
                <a
                  href="https://www.facebook.com/DrNehaDeshpande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-shade/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-9 w-9" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-neha-deshpande/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-shade/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-9 w-9" />
                </a>
                <a
                  href="https://www.youtube.com/@Padmanaabh_Dental_Clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-shade/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube className="h-9 w-9" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div className="space-y-6">
            
            
            {/* Google Maps Embed */}
            <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0963574982745!2d73.93091212485284!3d18.601984287134454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7808313ef37%3A0x853c2d5523f36605!2sPadmanaabh%20Dental%20Clinic%26Implant%20Centre%3A%20Best%20Dentist%20In%20Lohegaon-Best%20Rootcanal%20RCT%20Doctor%20Dental%20clinic%20In%20Lohegaon!5e0!3m2!1sen!2sin!4v1709234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Padmanaabh Dental Clinic Location"
                className="absolute inset-0"
              />
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/place/Padmanaabh+Dental+Clinic%26Implant+Centre:+Best+Dentist+In+Lohegaon-Best+Rootcanal+RCT+Doctor+Dental+clinic+In+Lohegaon/@18.601987,73.930912,17z/data=!4m6!3m5!1s0x3bc2c7808313ef37:0x853c2d5523f36605!8m2!3d18.6019842!4d73.9335108!16s%2Fg%2F11rjz2t54r?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-black/80 text-sm text-center md:text-left">
              © 2025 Padmanaabh Dental Clinic & Implant Centre. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 font-body text-sm">
              <Link to="/privacy" className="text-black/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-black/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-black/80 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;