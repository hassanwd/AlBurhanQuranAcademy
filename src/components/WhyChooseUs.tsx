const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
    title: "Free Trial Classes",
    desc: "Start your journey risk-free with a complimentary trial class before you commit.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
      </svg>
    ),
    title: "Special Focus on Slow Learners",
    desc: "Our teachers adapt their pace to every student, ensuring no one is left behind.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Online Quran Memorization",
    desc: "Structured Hifz program with expert guidance to help students memorize the Holy Quran.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Female Teachers for Women",
    desc: "Dedicated female Quran teachers available for sisters and young girls in a comfortable environment.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Expert Teachers with English Fluency",
    desc: "Qualified and experienced Quran teachers who communicate clearly in English for better understanding.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Monthly Progress Assessment",
    desc: "Regular feedback and assessments keep students and parents informed of learning milestones.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Flexible Timings That Suit You",
    desc: "Choose class timings that fit your daily routine — whether at home or traveling.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Diverse Islamic & Quranic Courses",
    desc: "From Tajweed to Islamic studies — a wide range of courses tailored to every level and age.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-black)] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-semibold mb-2">
            Our Commitment
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Why Choose <span className="text-[var(--color-gold)]">Us?</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            AL Burhan Quran Academy is committed to providing quality Quran education to Muslims around the world.
            Our mission is to help students develop a strong connection with the Holy Quran and understand the true
            teachings of Islam in a simple and effective way.
          </p>
        </div>

        {/* Section image */}
        <div className="relative h-72 rounded-2xl overflow-hidden mb-14">
          <img
            src="/whyChooseUs.jpeg"
            alt="Why Choose Al Burhan Quran Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-gold)]/10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Two-column layout: description left, features right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Left — long description */}
          <div className="space-y-5 text-gray-400 text-base leading-relaxed">
            <p>
              At AL Burhan Quran Academy, we follow a structured and step-by-step learning approach that enables
              students of all ages to learn the Quran correctly with proper Tajweed. Our goal is not only to teach
              Quran recitation but also to help students build confidence and consistency in their learning journey.
            </p>
            <p>
              Our online learning system allows students to take Quran classes from the comfort of their homes.
              With flexible scheduling, you can easily choose class timings that fit your daily routine. Whether
              you are at home or traveling with your family, our online platform keeps you connected with your
              Quran lessons without interruption.
            </p>
            <p>
              Our qualified and experienced Quran teachers are dedicated to guiding every student with patience
              and care. They understand the importance of time and maintain punctuality in every class to ensure
              a smooth and reliable learning experience.
            </p>
            <p>
              By joining AL Burhan Quran Academy, students receive personal attention, structured guidance, and
              a supportive learning environment that helps them improve their Quran recitation and understanding.
              With regular practice and expert guidance, students can soon read the Holy Quran with confidence
              and fluency.
            </p>

            {/* Green accent stat row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[["500+", "Students"], ["50+", "Teachers"], ["10+", "Courses"]].map(([num, label]) => (
                <div
                  key={label}
                  className="text-center py-4 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5"
                >
                  <div className="text-3xl font-black text-[var(--color-gold)]">{num}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group p-3 rounded-xl border border-white/5 bg-[var(--color-black-soft)] hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--color-gold)]/10 text-[var(--color-gold)] flex items-center justify-center mb-3 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-xs mb-1 leading-snug">{title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
