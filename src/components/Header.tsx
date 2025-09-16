import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";
import BookAppointmentButton from "./BookAppointmentButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Dental Tourism", href: "/dental-tourism", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky  top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation */}
        <div className="flex items-center justify-between h-18">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={`relative transition-colors hover:text-primary flex items-center text-sm font-medium font-heading ${
                    isActive(item.href)
                      ? "text-shade font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Logo - Centered */}
          <Link to="/" className="flex items-center">
            
              <img className="w-32 h-16 rounded-md flex items-center justify-center" src="/src/assets/short-logo-wo-name.svg" alt="Clinic Logo"/>
              
            
          </Link>

          {/* Book Appointment Button */}
          <div className="hidden lg:block">
            <BookAppointmentButton />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <BookAppointmentButton className="mt-4" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;