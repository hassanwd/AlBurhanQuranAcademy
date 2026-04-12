"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const visions = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    label: "Accessible Education",
    text: "Our vision is to make quality Quran and Islamic education easily accessible for everyone, including working professionals, students, and families. We offer flexible learning options, including evening and weekend classes, to ensure that every learner can continue their journey without difficulty.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "Personal Growth",
    text: "We strongly believe that seeking knowledge and focusing on personal growth can bring positive change not only in an individual's life but also in the wider community.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "Community Impact",
    text: "By staying connected to Islamic teachings and values, our goal is to nurture responsible and knowledgeable individuals who contribute to society in a meaningful and faith-driven way.",
  },
];

export default function VisionCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className="bg-[var(--color-black)] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Our <span className="text-[var(--color-accent)]">Vision</span>
          </h2>
        </div>

        {/* Embla viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Embla container — must not have overflow:hidden */}
          <div className="flex">
            {visions.map(({ icon, label, text }, i) => (
              <div
                key={i}
                style={{ flex: "0 0 100%", minWidth: 0 }}
              >
                <div className="bg-[var(--color-surface)] border border-[var(--color-sky)]/20 rounded-2xl p-10 md:p-14 flex items-center justify-center flex-col gap-6 mx-1">
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-sky)]/10 border border-[var(--color-sky)]/20 flex items-center justify-center text-[var(--color-sky)]">
                    {icon}
                  </div>
                  <h3 className="text-white font-bold text-2xl">{label}</h3>
                  <p className="text-gray-400 text-center leading-relaxed text-base md:text-lg">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {visions.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-3 bg-[var(--color-accent)]"
                  : "w-3 h-3 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
