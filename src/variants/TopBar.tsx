"use client";
import { useState } from "react";

export default function TopBar() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] transition-all duration-300">
      {/* Main Top Bar */}
      <div className="py-2.5 lg:py-3.5 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[var(--color-gray-muted)]">
            {/* Phone */}
            <div className="flex items-center gap-2 group cursor-pointer transition-all duration-300">
              <div className="p-1.5 rounded-lg bg-[var(--color-accent)]/10 group-hover:bg-[var(--color-accent)]/20 transition-all duration-300 group-hover:shadow-md">
                <svg className="w-4 h-4 fill-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
              </div>
              <a
                href="tel:+13236395853"
                className="hover:text-[var(--color-sky)] transition-all duration-300 font-medium group-hover:translate-x-1"
              >
                USA: +1 (323) 639-5853
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 group cursor-pointer transition-all duration-300">
              <div className="p-1.5 rounded-lg bg-[var(--color-accent)]/10 group-hover:bg-[var(--color-accent)]/20 transition-all duration-300 group-hover:shadow-md">
                <svg className="w-4 h-4 stroke-[var(--color-accent)] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <a
                href="mailto:info@alburhanquranacademy.org"
                className="hover:text-[var(--color-sky)] transition-all duration-300 font-medium group-hover:translate-x-1"
              >
                info@alburhanquranacademy.org
              </a>
            </div>
          </div>

          {/* Desktop Spacer */}
          <div className="hidden md:block flex-1" />

          {/* Mobile Contact Toggle */}
          <button
            onClick={() => setShowContactInfo(!showContactInfo)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-accent)]/10 transition-all duration-300 group relative hover:shadow-md active:scale-95"
            aria-label="Contact info"
            title="View contact info"
          >
            <svg 
              className="w-5 h-5 text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              Contact
            </span>
          </button>

          {/* Social Icons - Show on all screens */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18AVd6ZE6s/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-1.5 rounded-lg hover:bg-[#1877F2]/10 transition-all duration-300 hover:shadow-md active:scale-95"
            >
              <svg 
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[var(--color-accent)] group-hover:text-[#1877F2] transition-all duration-300 group-hover:scale-125" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/al.burhan.quran.academy?utm_source=qr&igsh=eWw4eWRzY3doZWdm"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-1.5 rounded-lg hover:bg-[#E1306C]/10 transition-all duration-300 hover:shadow-md active:scale-95"
            >
              <svg 
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[var(--color-accent)] group-hover:text-[#E1306C] transition-all duration-300 group-hover:scale-125" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Contact Info Dropdown */}
      <div
        className={`md:hidden border-t border-[var(--color-border)] bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface)]/50 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
          showContactInfo ? "opacity-100 visible max-h-96" : "opacity-0 invisible max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Phone */}
            <a
              href="tel:+13236395853"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-accent)]/10 transition-all duration-300 group active:scale-95 hover:shadow-md"
            >
              <div className="p-2 rounded-lg bg-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)]/30 transition-all duration-300 group-hover:shadow-md">
                <svg className="w-5 h-5 fill-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[var(--color-gray-muted)] uppercase tracking-wide transition-colors duration-300">Phone</span>
                <span className="text-sm font-semibold text-white group-hover:text-[var(--color-sky)] transition-all duration-300">
                  +1 (323) 639-5853
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@alburhanquranacademy.org"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-accent)]/10 transition-all duration-300 group active:scale-95 hover:shadow-md"
            >
              <div className="p-2 rounded-lg bg-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)]/30 transition-all duration-300 group-hover:shadow-md">
                <svg className="w-5 h-5 stroke-[var(--color-accent)] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-[var(--color-gray-muted)] uppercase tracking-wide transition-colors duration-300">Email</span>
                <span className="text-sm font-semibold text-white group-hover:text-[var(--color-sky)] transition-all duration-300 truncate">
                  info@alburhanquranacademy.org
                </span>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
}