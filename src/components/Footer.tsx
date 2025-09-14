import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <div className="text-primary-foreground font-bold text-lg">P</div>
              </div>
              <div>
                <div className="font-bold text-lg">PADMANAABH</div>
                <div className="text-sm opacity-80">Dental Clinic and Implant Centre</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Experience exceptional dental care in a comfortable environment. 
              Our dedicated team is here to ensure your smile shines bright.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Youtube className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <div className="text-sm">
                  <div className="font-medium">Location</div>
                  <div className="opacity-80">
                    Padmanaabh Dental Clinic, Lane No. 1 Sainik Colony, 
                    Pathore Wasti, Lohegaon, Pune, Maharashtra, India
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80" />
                <div className="text-sm">
                  <div className="font-medium">Phone</div>
                  <div className="opacity-80">+91 9999999999</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-80" />
                <div className="text-sm">
                  <div className="font-medium">Email</div>
                  <div className="opacity-80">hello@padmanaabhclinic.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Services
              </Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/gallery" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Gallery
              </Link>
              <Link to="/blog" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Blog
              </Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-80">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Sunday</span>
                <span>By Appointments Only</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Clock className="h-5 w-5 opacity-80" />
              <span className="text-sm opacity-80">Open Today: 10:00 AM - 08:00 PM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Padmanaabh Dental Clinic and Implant Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:opacity-100 transition-opacity">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;