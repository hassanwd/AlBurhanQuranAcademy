export default function HadeesSection() {
  return (
    <section className="bg-[var(--color-black-soft)] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[var(--color-surface)] rounded-2xl px-8 md:px-16 py-14 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — label + Arabic + translation + attribution */}
          <div className="flex flex-col gap-5">
            <p className="text-[var(--color-accent)] uppercase tracking-[0.3em] text-sm font-semibold">
              Hadees Mubarak
            </p>

            <h2 className="arabic text-[var(--color-sky)] text-3xl md:text-5xl lg:text-6xl leading-loose text-right">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </h2>

            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
              The best among you are those who learn the Qur&apos;an and teach it.
            </p>

            <div className="w-12 h-1 bg-[var(--color-sky)] rounded-full" />

            <p className="text-[var(--color-sky)] text-sm font-semibold">
              — Prophet Muhammad ﷺ &nbsp;·&nbsp; Sahih al-Bukhari
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
