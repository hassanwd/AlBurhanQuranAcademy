export default function HadeesSection() {
  return (
    <section className="bg-[var(--color-black-soft)] py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[var(--color-surface)] rounded-2xl px-8 md:px-16 py-14 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — label + Arabic + translation + attribution */}
          <div className="flex flex-col gap-5">

            <h2 className="arabic text-[var(--color-sky)] w-max text-2xl sm:text-4xl md:text-7xl leading-loose text-right whitespace-nowrap overflow-hidden text-ellipsis">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </h2>

            <p className="text-white w-max text-base sm:text-xl md:text-2xl leading-relaxed font-medium">
              The best among you are those who learn the Qur&apos;an and teach it.
            </p>

            <div className="w-12 h-1 bg-[var(--color-sky)] rounded-full" />

            <p className="text-[var(--color-sky)] text-lg font-semibold">
              — Prophet Muhammad ﷺ
            </p>
           </div>

        </div>

      </div>
    </section>
  );
}
