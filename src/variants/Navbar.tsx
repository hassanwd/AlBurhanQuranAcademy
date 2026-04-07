"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-black-nav)] sticky top-0 z-50 border-b border-[var(--color-border)] shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`
                    block px-4 py-4 text-sm font-medium tracking-wide transition-all duration-200
                    ${
                      link.active
                        ? "text-[var(--color-accent-light)] border-b-2 border-[var(--color-accent)]"
                        : "text-[var(--color-gray-muted)] hover:text-white hover:border-b-2 hover:border-[var(--color-accent-light)]"
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
            className="md:hidden ml-auto p-3 text-[var(--color-gray-muted)] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
          <ul className="md:hidden border-t border-[var(--color-border)] pb-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`
                    block px-4 py-3 text-sm font-medium
                    ${
                      link.active
                        ? "text-[var(--color-accent-light)] border-l-2 border-[var(--color-accent)] pl-3"
                        : "text-[var(--color-gray-muted)] hover:text-white hover:pl-3 transition-all"
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