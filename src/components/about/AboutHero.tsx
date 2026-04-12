import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-[var(--color-black-soft)] py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            About <span className="text-[var(--color-sky)]">Us</span>
          </h2>
          <div className="flex flex-col gap-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              AL Burhan Quran Academy committed to providing authentic Islamic education to students around the world.
              Our academy is managed by a passionate team of professionals who strive to make Quran learning simple,
              accessible, and meaningful for everyone.
            </p>
            <p>
              We warmly welcome students of all ages and backgrounds, regardless of race, color, or nationality.
              Our goal is to help every Muslim understand the teachings of the Holy Quran and follow the core
              principles of Islam in their daily lives.
            </p>
            <p>
              We believe that by spreading true knowledge of the Quran, we can contribute towards building a
              stronger Ummah and a more peaceful and positive society.
            </p>
          </div>
        </div>

        {/* Right — logo */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-[var(--color-sky)]/10 border border-[var(--color-sky)]/20 flex items-center justify-center shadow-[0_0_60px_rgba(9,148,144,0.15)]">
            <Image
              src="/logo-white.png"
              alt="AL Burhan Quran Academy Logo"
              width={350}
              height={350}
              className="object-contain p-8"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
