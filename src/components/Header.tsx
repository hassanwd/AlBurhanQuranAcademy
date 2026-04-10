import Navbar from "@/variants/Navbar";
import TopBar from "@/variants/TopBar";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <TopBar />

      {/* Logo row with overlay */}
      <div className="relative overflow-hidden py-6 px-4">
        {/* Overlay background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1b5e20 0%, #0d0d0d 40%, #FA841E33 100%)",
          }}
        />
        {/* Color blobs */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, #FA841E55 0%, transparent 45%), radial-gradient(circle at 85% 50%, #09949055 0%, transparent 45%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/png-logo.png"
              alt="Al Burhan Quran Academy Logo"
              className="w-25 h-25 object-cover"
            />
            <div className="flex flex-col">
              <div className="text-xl font-black tracking-tight leading-tight">
                <span className="text-white">Al Burhan </span>
                <span className="text-[var(--color-accent)]">Quran </span>
                <span className="text-white">Academy</span>
              </div>
              <span className="text-[var(--color-sky)] text-xs tracking-widest uppercase mt-0.5">
                Online Quran Learning
              </span>
            </div>
          </div>
        </div>

        {/* Right — Quran image cropped/bleeding from right edge */}
        <div
          className="hidden sm:block absolute right-50 top-0 h-full"
          style={{ width: "220px" }}
        >
          <img
            src="/quran.png"
            alt="Quran"
            className="h-full w-full object-cover object-left"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navbar />
    </header>
  );
}