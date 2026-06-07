export default function TopBar() {
  return (
    <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--color-gray-muted)]">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Call USA */}
          <a
            href="tel:+13236395853"
            className="flex items-center gap-1.5 hover:text-[var(--color-sky)] transition-colors"
          >
            <svg className="w-4 h-4 fill-[var(--color-accent)]" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
            USA +1(323) 639-5853
          </a>

          {/* Email */}
          <a
            href="mailto:info@alburhanquranacademy.org"
            className="flex items-center gap-1.5 hover:text-[var(--color-sky)] transition-colors"
          >
            <svg className="w-4 h-4 stroke-[var(--color-accent)] fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            info@alburhanquranacademy.org
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a href="https://www.facebook.com/share/18AVd6ZE6s/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:text-[#1877F2] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/al.burhan.quran.academy?utm_source=qr&igsh=eWw4eWRzY3doZWdm" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:text-[#E1306C] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}