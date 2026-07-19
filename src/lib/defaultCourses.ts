export interface PublicCourse {
  title: string;
  slug: string;
  image: string;
  description: string;
}

// The original six courses the site launched with. They are used to seed the
// database (npm run seed) and as a fallback on the public pages when the
// courses collection is still empty, so the site never renders blank.
export const DEFAULT_COURSES: PublicCourse[] = [
  {
    image: "/Quranic Qaidah.png",
    title: "Quranic Qaidah",
    slug: "quranic-qaidah",
    description:
      "The Quranic Qaida course is designed for beginners who want to learn how to read the Quran correctly from the very basics. In this course, students are taught Arabic letters, pronunciation, and essential Tajweed rules step by step, helping them build a strong foundation for accurate Quran recitation.",
  },
  {
    image: "/Quran Gateway.png",
    title: "Quran Gateway",
    slug: "quran-gateway",
    description:
      "The Quran Gateway course is designed to help students move beyond the basics and develop a deeper connection with the Quran. In this course, students improve their recitation, strengthen their Tajweed, and begin to understand the meanings of the Quran, making their learning more meaningful and impactful.",
  },
  {
    image: "/Quran memorizing Course.png",
    title: "Quran Memorizing",
    slug: "quran-memorizing",
    description:
      "The Quran Memorizing course is designed for students who wish to memorize the Holy Quran with proper guidance and discipline. Our teachers support students with structured lessons, regular revision, and effective memorization techniques to ensure strong retention and accuracy.",
  },
  {
    image: "/Translation of the Holy Quran.png",
    title: "Translation of The Holy Quran",
    slug: "translation-holy-quran",
    description:
      "The Translation of the Holy Quran course is designed to help students understand the meanings and message of the Quran in a clear and simple way. This course enables learners to connect deeply with the Quran by exploring its teachings, guidance, and practical application in daily life.",
  },
  {
    image: "/Woman Quranic Course.png",
    title: "Women Quranic Course",
    slug: "women-quranic-course",
    description:
      "The Women Quranic Course is specially designed for sisters who want to learn the Holy Quran in a comfortable and supportive environment. Our female teachers provide step-by-step guidance in Quran recitation, Tajweed, and basic Islamic teachings, ensuring a respectful and easy learning experience from home.",
  },
  {
    image: "/Tajweed Course.png",
    title: "Tajweed Course",
    slug: "tajweed-course",
    description:
      "The Tajweed Course is designed to help students master the correct pronunciation and recitation of the Holy Quran. In this course, learners are taught the detailed rules of Tajweed in a simple and practical way, enabling them to recite the Quran with accuracy, fluency, and beauty.",
  },
];
