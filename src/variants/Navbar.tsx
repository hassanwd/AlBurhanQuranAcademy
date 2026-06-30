"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TopBar from "@/variants/TopBar";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[var(--color-black-nav)] sticky top-0 z-50 border-b border-[var(--color-border)] shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/png-logo.png" alt="Al Burhan Quran Academy" className="h-11 w-11 rounded-full object-cover" />
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-black tracking-wide text-white">Al Burhan</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Quran Academy
              </span>
            </div>
          </Link>

          <div>
            <ul className="hidden md:flex items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-4 text-sm font-medium tracking-wide transition-all duration-200 border-b-2 ${isActive
                          ? "text-[var(--color-accent-light)] border-[var(--color-accent)]"
                          : "text-[var(--color-gray-muted)] border-transparent hover:text-white hover:border-[var(--color-accent-light)]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center justify-center min-w-0">

            <div className="hidden lg:flex ml-4 shrink-0">
              <TopBar className="bg-transparent border-none px-0 py-0" />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-3 text-[var(--color-gray-muted)] hover:text-white transition-colors"
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
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="md:hidden border-t border-[var(--color-border)] pb-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-all ${isActive
                        ? "text-[var(--color-accent-light)] border-l-2 border-[var(--color-accent)] pl-3"
                        : "text-[var(--color-gray-muted)] hover:text-white hover:pl-3"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}