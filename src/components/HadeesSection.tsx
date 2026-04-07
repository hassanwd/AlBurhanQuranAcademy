export default function HadeesSection() {
  return (
    <section className="bg-[var(--color-black-soft)] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        {/* <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] uppercase tracking-[0.3em] text-sm font-semibold mb-2">
            Hadees Mubarak
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Words of the <span className="text-[var(--color-accent)]">Prophet ﷺ</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
        </div> */}

        {/* Full-width image with content overlaid */}
        <div className="relative rounded-2xl overflow-hidden min-h-[800px] flex items-center justify-center">
          <img
            src="/Hadees.jpeg"
            alt="Hadees"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 px-8 py-16 md:px-16 flex flex-col items-center text-center gap-6 w-full">

            <h2 className="arabic text-5xl md:text-7xl leading-loose text-white">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </h2>

            <div className="w-16 h-1 bg-[var(--color-sky)] rounded-full" />

            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl">
              &ldquo;The best among you are those who learn the Qur&apos;an and teach it.&rdquo;
            </p>

            <p className="text-[var(--color-sky)] text-2xl font-semibold">
              Prophet Muhammad ﷺ
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
