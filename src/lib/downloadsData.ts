export const downloadsData = [
  {
    id: "colorful-tajweedi-quran",
    name: "Colorful Tajweedi Quran",
    description: "A beautifully color-coded Quran with Tajweed rules highlighted for easy learning and recitation.",
    image: "/Colorful Tajweedi Quran - 1 downloads.jpeg",
    tag: "Tajweed",
    pdfs: [
      {
        id: "colorful-tajweedi-quran-full",
        name: "Colorful Tajweedi Quran",
        description: "Complete Quran with color-coded Tajweed rules for all levels.",
        pages: "604 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
      {
        id: "colorful-tajweedi-quran-full",
        name: "Colorful Tajweedi Quran",
        description: "Complete Quran with color-coded Tajweed rules for all levels.",
        pages: "604 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
  {
    id: "english-quran-word-to-word-translation",
    name: "English Quran Word to Word Translation",
    description: "A comprehensive word-by-word English translation of the Quran to help understand the meaning of every verse.",
    image: "/English Quran Word to word Translation - 2 downloads.jpeg",
    tag: "Translation",
    pdfs: [
      {
        id: "english-quran-word-to-word-full",
        name: "English Quran Word to Word Translation",
        description: "Complete word-by-word English translation of the Holy Quran.",
        pages: "604 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
  {
    id: "english-quranic-qaidah",
    name: "English Quranic Qaidah",
    description: "A beginner-friendly Qaidah guide in English to help new learners start reading the Quran correctly.",
    image: "/English Quranic Qaidah - 3 downloads.jpeg",
    tag: "Beginner",
    pdfs: [
      {
        id: "english-quranic-qaidah-full",
        name: "English Quranic Qaidah",
        description: "Step-by-step Qaidah guide for beginners learning Quran in English.",
        pages: "80 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
  {
    id: "six-kalimas",
    name: "Six Kalima's",
    description: "The six essential Kalimas every Muslim should know, with Arabic text, transliteration, and translation.",
    image: "/Six Kalima's - 4 downloads.jpeg",
    tag: "Basics",
    pdfs: [
      {
        id: "six-kalimas-full",
        name: "Six Kalima's",
        description: "All six Kalimas with Arabic, transliteration, and English translation.",
        pages: "12 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
  {
    id: "namaz",
    name: "Namaz",
    description: "A complete guide to Salah (Namaz) including steps, duas, and rules for performing the daily prayers correctly.",
    image: "/Namaz - 5 downloads.jpeg",
    tag: "Prayer",
    pdfs: [
      {
        id: "namaz-full",
        name: "Namaz Guide",
        description: "Complete illustrated guide to performing Salah with all duas and steps.",
        pages: "48 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
  {
    id: "essential-duas",
    name: "Essential Duas in the Life of a Muslim",
    description: "A collection of essential daily duas every Muslim should memorize for morning, evening, and everyday situations.",
    image: "/Essential Duas in the life of a Muslim - 6 downloads.jpeg",
    tag: "Duas",
    pdfs: [
      {
        id: "essential-duas-full",
        name: "Essential Duas in the Life of a Muslim",
        description: "Daily duas for morning, evening, meals, travel, and more.",
        pages: "36 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
  {
    id: "ramadan-planner",
    name: "Ramadan Planner",
    description: "A structured Ramadan planner to help you make the most of the blessed month with daily goals and ibadah tracking.",
    image: "/Ramdan Planner - 7 downloads.jpeg",
    tag: "Ramadan",
    pdfs: [
      {
        id: "ramadan-planner-full",
        name: "Ramadan Planner",
        description: "Daily planner for Ramadan with ibadah tracker, goals, and reflection pages.",
        pages: "30 pages",
        viewUrl: "https://drive.google.com/file/d/1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IPuckbpUkoNKpWafBITYS3deIQbcX0Dc",
      },
    ],
  },
];

export type DownloadCategory = (typeof downloadsData)[0];
export type DownloadPdf = DownloadCategory["pdfs"][0];
