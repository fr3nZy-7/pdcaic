// components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import BookAppointmentButton from "@/components/common/BookAppointmentButton";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/dental-tourism", label: "Dental Tourism" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blog" },
    { href: "/faqs", label: "FAQ" },
  ];

  // Keep your typed mouse handlers (they still work)
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = "#00ABDA";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = "#007099";
  };

  return (
    <header className="header">
      <div className="container">
        {/* Mobile hamburger (hidden on desktop) */}
        <button
          type="button"
          className="mobileMenuButton"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
        >
          {/* simple inline SVG icons - no external dependency */}
          {!isOpen ? (
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="22" height="2" rx="1" fill="#007099" />
              <rect y="7" width="22" height="2" rx="1" fill="#007099" />
              <rect y="14" width="22" height="2" rx="1" fill="#007099" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 3L17 17" stroke="#007099" strokeWidth="2" strokeLinecap="round" />
              <path d="M17 3L3 17" stroke="#007099" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Desktop nav (hidden on mobile) */}
        <nav className="desktopNav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navLink"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <div className="centerLogo">
          <Link href="/">
            <img
              src="/images/common/short-logo-wo-name.svg"
              alt="Padmanaabh Dental Clinic Logo"
              style={{ height: "auto", width: 64 }}
            />
          </Link>
        </div>

        {/* Right CTA */}
        <div className="ctaWrapper">
          <BookAppointmentButton />
        </div>
      </div>

      {/* Mobile dropdown menu (only effective / visible on small screens) */}
      <div className={`mobileDropdown ${isOpen ? "open" : ""}`} role="menu" aria-hidden={!isOpen}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobileNavLink"
            onClick={() => setIsOpen(false)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Styled JSX for responsiveness (keeps this self-contained) */}
      <style jsx>{`
        :root {
          --teal: #007099;
          --teal-bright: #00ABDA;
          --header-h: 64px;
        }

        .header {
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          font-family: "Poppins", sans-serif;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          position: relative;
          height: var(--header-h);
        }

        /* Desktop nav */
        .desktopNav {
          display: flex;
          gap: 24px;
          font-size: 16px;
          font-weight: 500;
        }

        .navLink {
          color: var(--teal);!important
          text-decoration: none; !important
          transition: color 0.18s ease;
          font-weight: 500;
        }

        .navLink:hover {
          color: var(--teal-bright);
        }

        /* center logo absolute so it stays in center */
        .centerLogo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 50%;
          transform-origin: center;
          transform: translate(-50%, -50%);
        }

        .ctaWrapper {
          display: flex;
          align-items: center;
        }

        /* Mobile hamburger button - hidden on desktop */
        .mobileMenuButton {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 8px;
          margin-right: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .mobileMenuButton svg {
          display: block;
        }

        /* Mobile dropdown (hidden on desktop via media query) */
        .mobileDropdown {
          display: none; /* default hidden for desktop */
        }

        /* ========== Responsive rules ========== */
        @media (max-width: 767px) {
          .container {
            padding: 12px 16px;
          }

          /* hide desktop nav, show hamburger */
          .desktopNav {
            display: none;
          }

          .mobileMenuButton {
            display: inline-flex;
            z-index: 60;
          }

          /* mobile dropdown will be display:block and animated via max-height */
          .mobileDropdown {
            display: flex;
            font-family: "Poppins", sans-serif;
            align-items: flex-start;
            flex-direction: column;
            position: absolute;
            top: var(--header-h);
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid rgba(0, 112, 153, 0.06);
            padding: 8px 12px;
            box-shadow: 0 6px 20px rgba(2, 12, 20, 0.06);
            overflow: hidden;
            max-height: 0;
            transition: max-height 260ms ease-in-out, opacity 180ms ease;
            opacity: 0;
            z-index: 49;
            
          }

          .mobileDropdown.open {
            max-height: 400px; /* enough for links */
            opacity: 1;
            flex-direction: column;
          }

          .mobileNavLink {
            display: block;
            width: 100%;
            padding: 10px 8px;
            color: var(--teal); !important
            text-decoration: none; !important
            border-radius: 8px;
            font-weight: 500;
            transition: background 0.12s ease, color 0.12s ease;
            flex-direction: column;
          }

          .mobileNavLink:hover {
            background: rgba(0, 171, 218, 0.06);
            color: var(--teal-bright);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
