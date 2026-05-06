export const downloadsData = [
  {
    id: "colorful-tajweedi-quran",
    name: "Colorful Tajweedi Quran",
    description: "A beautifully color-coded Quran with Tajweed rules highlighted for easy learning and recitation.",
    image: "/quran.png",
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
    ],
  },
];

export type DownloadCategory = (typeof downloadsData)[0];
export type DownloadPdf = DownloadCategory["pdfs"][0];
