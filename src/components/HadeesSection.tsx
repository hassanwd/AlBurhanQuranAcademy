export default function HadeesSection() {
  return (
    <section className="bg-[var(--color-black-soft)] py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/Hadees.jpeg"
            alt="Hadees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-gold)]/10" />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-right space-y-6">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-semibold">
            Hadees Mubarak
          </p>

          <h2 className="arabic text-4xl md:text-5xl leading-loose text-white">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </h2>

          <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto lg:ml-auto lg:mr-0 rounded-full" />

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            &ldquo;The best among you are those who learn the Qur&apos;an and teach it.&rdquo;
          </p>
          <p className="text-[var(--color-gold)] text-sm font-semibold">
            — Sahih al-Bukhari
          </p>
        </div>

      </div>
    </section>
  );
}
