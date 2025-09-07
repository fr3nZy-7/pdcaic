'use client';

import Link from "next/link";
import BookAppointmentButton from "@/components/common/BookAppointmentButton";

const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/dental-tourism", label: "Dental Tourism" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blog" },
    { href: "/faqs", label: "FAQ" },
  ];

  // Handle mouse events with proper typing
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = '#00ABDA';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = '#007099';
  };

  return (
    <header style={{
      background: 'white', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px'
      }}>
        {/* Left Navigation */}
        <nav style={{
          display: 'flex',
          gap: '24px',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              style={{
                color: '#007099',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <Link href="/">
            <img
              src="/images/common/short-logo-wo-name.svg"
              alt="Padmanaabh Dental Clinic Logo"
              style={{height: 'auto', width: '64px'}}
            />
          </Link>
        </div>

        {/* Right CTA */}
        <div>
          <BookAppointmentButton />
        </div>
      </div>
    </header>
  );
};

export default Header;