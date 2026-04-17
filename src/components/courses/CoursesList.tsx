import Image from "next/image";

const courses = [
  {
    image: "/course1.jpeg",
    title: "Quranic Qaidah",
    description:
      "The Quranic Qaida course is designed for beginners who want to learn how to read the Quran correctly from the very basics. In this course, students are taught Arabic letters, pronunciation, and essential Tajweed rules step by step, helping them build a strong foundation for accurate Quran recitation.",
  },
  {
    image: "/course2.jpeg",
    title: "Quran Gateway",
    description:
      "The Quran Gateway course is designed to help students move beyond the basics and develop a deeper connection with the Quran. In this course, students improve their recitation, strengthen their Tajweed, and begin to understand the meanings of the Quran, making their learning more meaningful and impactful.",
  },
  {
    image: "/course3.jpeg",
    title: "Quran Memorizing",
    description:
      "The Quran Memorizing course is designed for students who wish to memorize the Holy Quran with proper guidance and discipline. Our teachers support students with structured lessons, regular revision, and effective memorization techniques to ensure strong retention and accuracy.",
  },
  {
    image: "/course4.jpeg",
    title: "Translation of The Holy Quran",
    description:
      "The Translation of the Holy Quran course is designed to help students understand the meanings and message of the Quran in a clear and simple way. This course enables learners to connect deeply with the Quran by exploring its teachings, guidance, and practical application in daily life.",
  },
  {
    image: "/course5.jpeg",
    title: "Women Quranic Course",
    description:
      "The Women Quranic Course is specially designed for sisters who want to learn the Holy Quran in a comfortable and supportive environment. Our female teachers provide step-by-step guidance in Quran recitation, Tajweed, and basic Islamic teachings, ensuring a respectful and easy learning experience from home.",
  },
  {
    image: "/course6.jpeg",
    title: "Tajweed Course",
    description:
      "The Tajweed Course is designed to help students master the correct pronunciation and recitation of the Holy Quran. In this course, learners are taught the detailed rules of Tajweed in a simple and practical way, enabling them to recite the Quran with accuracy, fluency, and beauty.",
  },
];

export default function CoursesList() {
  return (
    <section className="bg-[var(--color-black)] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Our <span className="text-[var(--color-accent)]">Courses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(({ image, title, description }, i) => (
            <div
              key={i}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-sky)]/20 flex flex-col group cursor-pointer transition-all duration-300 hover:border-orange-500/60"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white font-black text-xl transition-colors duration-300 group-hover:text-orange-400">{title}</h3>
                {/* <div className="w-10 h-0.5 bg-[var(--color-accent)] rounded-full" /> */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
                <button className="mt-4 self-start px-5 py-2 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
