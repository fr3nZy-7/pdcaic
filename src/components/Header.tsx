import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import BookAppointmentButton from "./BookAppointmentButton";
import ShortLogo from "@/assets/short-logo-wo-name.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Hover delay timer
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      children: [
        { name: "Root Canal", href: "/services/root-canal" },
        { name: "Orthodontics", href: "/services/orthodontics" },
        { name: "Dental Implants", href: "/services/dental-implants" },
        { name: "General Dentistry", href: "/services/general-dentistry" },
        { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
        { name: "Oral Surgery", href: "/services/oral-surgery" },
        { name: "Periodontal Treatment", href: "/services/periodontal-treatment" },
        { name: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
        { name: "Emergency Dental Care", href: "/services/emergency-dental-care" },
      ],
    },
    { name: "Dental Tourism", href: "/dental-tourism" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation */}
        <div className="flex items-center justify-between h-18">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img
              className="w-32 h-20 rounded-md"
              src={ShortLogo}
              alt="Clinic Logo"
            />
          </Link>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`relative transition-colors flex items-center text-md font-medium font-heading ${
                    isActive(item.href)
                      ? "text-shade font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={(e) => {
                    if (item.hasDropdown && window.innerWidth < 1024) {
                      // On mobile/tablet, toggle dropdown instead of immediate nav
                      e.preventDefault();
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      );
                    }
                  }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <ul
                    className={`
                      absolute left-0 mt-2 bg-white border rounded-lg shadow-lg transition-all
                      lg:min-w-[200px]
                      ${openDropdown === item.name ? "block" : "hidden"}
                    `}
                  >
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          to={child.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          
          

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
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`py-2 flex items-center justify-between transition-colors ${
                      isActive(item.href)
                        ? "text-primary font-medium"
                        : "text-foreground"
                    }`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        );
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {/* Mobile dropdown */}
                  {item.hasDropdown && openDropdown === item.name && (
                    <ul className="ml-4 mt-1 space-y-1 border-l pl-3">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            to={child.href}
                            className="block py-1 text-sm hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
