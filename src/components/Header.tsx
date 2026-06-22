import Navbar from "@/variants/Navbar";
import TopBar from "@/variants/TopBar";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <TopBar />

      {/* Logo row with overlay */}
      <div className="relative overflow-hidden py-3 sm:py-5 lg:py-8 px-4 sm:px-6 lg:px-8 transition-all duration-500">
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

        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-start">
          {/* Logo Container */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-shrink-0 transition-all duration-300">
            {/* Logo Image */}
            <div className="flex-shrink-0 transition-all duration-300">
              <img
                src="/png-logo.png"
                alt="Al Burhan Quran Academy Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Branding Text */}
            <div className="flex flex-col min-w-0 transition-all duration-300">
              {/* Main Title */}
              <div className="text-base sm:text-xl lg:text-2xl font-black tracking-tight leading-tight transition-all duration-300">
                <span className="text-white">Al Burhan </span>
                <span className="text-[var(--color-accent)]">Quran </span>
                <span className="text-white">Academy</span>
              </div>
              {/* Subtitle */}
              <span className="text-[var(--color-sky)] text-xs sm:text-sm lg:text-base tracking-widest uppercase font-semibold mt-1 lg:mt-1.5 transition-all duration-300">
                Online Quran Learning
              </span>
              {/* Description */}
              <span className="text-[var(--color-gray-muted)] text-xs sm:text-xs lg:text-sm mt-1 opacity-80 transition-all duration-300">
                Professional Quranic Education
              </span>
            </div>
          </div>

          {/* Decorative Quran Image - Tablet and Up */}
          <div
            className="hidden sm:block absolute right-0 top-0 h-full pointer-events-none transition-all duration-500"
            style={{ width: "120px" }}
          >
            <img
              src="/quran.png"
              alt="Quran decoration"
              className="h-full w-full object-cover object-left opacity-50 transition-all duration-500 hover:opacity-70"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)",
              }}
            />
          </div>

          {/* Decorative Quran Image - Large Screens */}
          <div
            className="hidden lg:block absolute right-16 top-0 h-full pointer-events-none transition-all duration-500"
            style={{ width: "240px" }}
          >
            <img
              src="/quran.png"
              alt="Quran decoration"
              className="h-full w-full object-cover object-left opacity-60 transition-all duration-500 hover:opacity-80"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />
    </header>
  );
}