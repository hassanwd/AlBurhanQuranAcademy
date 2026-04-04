"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Payments", href: "/payments" },
  { label: "Careers", href: "/careers" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-gold)] sticky top-0 z-50 shadow-[0_2px_20px_rgba(201,168,76,0.4)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`
                    block px-4 py-4 text-sm font-semibold tracking-wide transition-all duration-200
                    ${
                      link.active
                        ? "bg-[var(--color-black)] text-[var(--color-white)]"
                        : "text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)]"
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-auto p-3 text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="md:hidden border-t border-[var(--color-gold-dark)] pb-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`
                    block px-4 py-3 text-sm font-semibold
                    ${
                      link.active
                        ? "bg-[var(--color-black)] text-white"
                        : "text-black hover:bg-[var(--color-black)] hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}