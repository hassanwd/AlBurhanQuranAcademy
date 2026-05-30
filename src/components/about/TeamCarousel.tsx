"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Prof. H. Ateeq ur Rehman",
    role: "Founder & CEO",
    bio: "A dedicated scholar with decades of experience in Quranic education, leading the academy with vision, passion, and unwavering commitment to authentic Islamic learning.",
    initials: "AR",
    color: "from-[var(--color-accent)] to-orange-600",
    badge: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  },
  {
    name: "Prof. H. Ateeq ur Rehman",
    role: "Founder & CEO",
    bio: "A dedicated scholar with decades of experience in Quranic education, leading the academy with vision, passion, and unwavering commitment to authentic Islamic learning.",
    initials: "AR",
    color: "from-[var(--color-accent)] to-orange-600",
    badge: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  },
  {
    name: "Prof. H. Ateeq ur Rehman",
    role: "Founder & CEO",
    bio: "A dedicated scholar with decades of experience in Quranic education, leading the academy with vision, passion, and unwavering commitment to authentic Islamic learning.",
    initials: "AR",
    color: "from-[var(--color-accent)] to-orange-600",
    badge: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  },
  {
    name: "Prof. H. Ateeq ur Rehman",
    role: "Founder & CEO",
    bio: "A dedicated scholar with decades of experience in Quranic education, leading the academy with vision, passion, and unwavering commitment to authentic Islamic learning.",
    initials: "AR",
    color: "from-[var(--color-accent)] to-orange-600",
    badge: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  },
  {
    name: "Prof. H. Ateeq ur Rehman",
    role: "Founder & CEO",
    bio: "A dedicated scholar with decades of experience in Quranic education, leading the academy with vision, passion, and unwavering commitment to authentic Islamic learning.",
    initials: "AR",
    color: "from-[var(--color-accent)] to-orange-600",
    badge: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  },
];

export default function TeamCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: "start" },
    [autoplay.current]
  );

  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className="relative bg-[var(--color-black-soft)] py-24 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-sky)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            The People Behind the Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Meet Our <span className="text-[var(--color-accent)]">Team</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--color-sky)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--color-sky)]" />
          </div>
          <p className="text-gray-400 mt-5 text-base max-w-xl mx-auto leading-relaxed">
            Dedicated scholars and educators committed to guiding every student on their Quranic journey.
          </p>
        </div>

        {/* Carousel area */}
        <div className="relative">

          {/* Left Arrow — sits outside the clipping zone */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-11 h-11 rounded-full bg-[var(--color-surface)] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/10 transition-all duration-200 z-20 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-11 h-11 rounded-full bg-[var(--color-surface)] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/10 transition-all duration-200 z-20 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Embla viewport — padded so cards don't touch arrows, clipping is clean */}
          <div
            className="px-14"
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.play()}
          >
            <div ref={emblaRef} className="overflow-hidden rounded-3xl">
              <div
                className="flex ml-2"
                style={{ paddingTop: "16px", paddingBottom: "16px" }}
              >
                {team.map(({ name, role, bio, initials, color, badge }, idx) => (
                  <div
                    key={idx}
                    style={{ flex: "0 0 calc(33.333% - 16px)" }}
                    className="min-w-0 max-sm:!flex-[0_0_100%] sm:max-lg:![flex:0_0_calc(50%-12px)]"
                  >
                    <div className="group mx-2 bg-[var(--color-surface-raised)] border border-white/[0.08] rounded-3xl flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-white/15">

                      {/* Card body */}
                      <div className="flex flex-col items-center text-center gap-5 p-8 flex-1">

                        {/* Avatar */}
                        <div className="relative mt-2">
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} blur-md opacity-40 scale-110`} />
                          <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-2xl font-black shadow-lg`}>
                            {initials}
                          </div>
                        </div>

                        {/* Name + badge */}
                        <div className="flex flex-col items-center gap-2">
                          <h3 className="text-white font-bold text-lg leading-snug">{name}</h3>
                          <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${badge}`}>
                            {role}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="w-10 h-px bg-white/10 rounded-full" />

                        {/* Bio */}
                        <div className="relative">
                          <span className="absolute -top-3 -left-1 text-5xl leading-none text-white/5 font-serif select-none">&ldquo;</span>
                          <p className="text-gray-400 text-sm leading-relaxed relative z-10">{bio}</p>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to member ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-[var(--color-accent)]"
                  : "w-2.5 h-2.5 bg-white/15 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}