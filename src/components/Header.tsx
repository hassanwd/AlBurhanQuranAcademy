import Navbar from "@/variants/Navbar";
import TopBar from "@/variants/TopBar";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <TopBar />

      {/* Logo + decorative image row */}
      <div className="bg-[var(--color-black-soft)] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Al Burhan Quran Academy Logo" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="text-lg font-black tracking-tight leading-none">
                <span className="text-white">Al </span>
                <span className="text-white">Burhan </span>
                <span className="text-[var(--color-gold)]">Quran </span>
                <span className="text-white">Academy</span>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Navigation */}
      <Navbar />
    </header>
  );
}