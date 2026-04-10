export default function HadeesSection() {
  return (
    <section className="bg-[var(--color-black-soft)] py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[var(--color-surface)] rounded-2xl px-8 md:px-16 py-14 grid gap-10 items-center">

          {/* Left — label + Arabic + translation + attribution */}
          <div className="flex items-center w-full flex-col gap-5 text-center">

            <h2 className="arabic text-[var(--color-sky)] text-2xl sm:text-4xl md:text-8xl leading-loose">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </h2>

            <p className="text-white text-base sm:text-xl md:text-3xl leading-relaxed font-medium">
              "The best among you are those who learn the Qur&apos;an and teach it"
            </p>

            <p className="text-[var(--color-sky)] text-xl font-semibold">
              Prophet Muhammad ﷺ
            </p>
           </div>

        </div>

      </div>
    </section>
  );
}
