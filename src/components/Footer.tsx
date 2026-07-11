import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

const courses = [
  { label: "Quranic Qaidah", slug: "quranic-qaidah" },
  { label: "Quran Gateway", slug: "quran-gateway" },
  { label: "Quran Memorizing", slug: "quran-memorizing" },
  { label: "Translation of The Holy Quran", slug: "translation-holy-quran" },
  { label: "Women Quranic Course", slug: "women-quranic-course" },
  { label: "Tajweed Course", slug: "tajweed-course" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18AVd6ZE6s/",
    hoverColor: "hover:text-[#1877F2]",
    icon: <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/al.burhan.quran.academy?utm_source=qr&igsh=eWw4eWRzY3doZWdm",
    hoverColor: "hover:text-[#E1306C]",
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />,
  },
  {
    label: "Call",
    href: "tel:+13236395853",
    hoverColor: "hover:text-[var(--color-sky)]",
    icon: <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black-soft)] border-t border-[var(--color-border)]">

      {/* CTA strip */}
      <div className="bg-gradient-to-r from-[var(--color-green)]/60 via-[var(--color-surface)] to-[var(--color-sky)]/20 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Start Your Quran Journey Today</p>
            <p className="text-gray-400 text-sm mt-0.5">Join thousands of students learning online with expert teachers.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm transition-colors duration-200"
          >
            Book a Trial Class
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Logo + about + socials */}
        <div className="flex flex-col gap-6">
          <Image
            src="/logo-white.png"
            alt="AL Burhan Quran Academy"
            width={120}
            height={120}
            className="object-contain"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing authentic Islamic education to students around the world — simply, accessibly, and meaningfully.
          </p>
          <div className="flex items-center gap-2.5">
            {socials.map(({ label, href, icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] ${hoverColor} hover:border-[var(--color-sky)]/40 transition-all duration-200`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">{icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Quick Links</h4>
            <div className="w-8 h-0.5 bg-[var(--color-accent)] rounded-full" />
          </div>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="group text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2.5">
                  <svg className="w-3 h-3 text-[var(--color-accent)] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Courses */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Our Courses</h4>
            <div className="w-8 h-0.5 bg-[var(--color-accent)] rounded-full" />
          </div>
          <ul className="flex flex-col gap-3">
            {courses.map(({ label, slug }) => (
              <li key={slug}>
                <Link href={`/courses#${slug}`} className="group text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2.5">
                  <svg className="w-3 h-3 text-[var(--color-sky)] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Contact Us</h4>
            <div className="w-8 h-0.5 bg-[var(--color-accent)] rounded-full" />
          </div>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="tel:+13305975880" className="group flex items-start gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-sky)]/40 transition-colors">
                  <svg className="w-4 h-4 fill-[var(--color-accent)]" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">USA</p>
                  <p>+1(323) 639-5853</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/contact" className="group flex items-start gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-sky)]/40 transition-colors">
                  <svg className="w-4 h-4 stroke-[var(--color-accent)] fill-none" viewBox="0 0 24 24" strokeWidth={2}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <p>info@alburhanquranacademy.org</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AL Burhan Quran Academy. All rights reserved.</p>
          <p>Designed with <span className="text-[var(--color-accent)]">♥</span> for the Ummah</p>
        </div>
      </div>

    </footer>
  );
}
