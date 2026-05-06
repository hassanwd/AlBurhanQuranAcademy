import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DownloadsHero from "@/components/downloads/DownloadsHero";
import DownloadsList from "@/components/downloads/DownloadsList";

export const metadata = {
  title: "Downloads | Al Burhan Quran Academy",
  description: "Download free Quranic resources, Tajweed guides, and Islamic learning materials.",
};

export default function DownloadsPage() {
  return (
    <main>
      <Header />
      <DownloadsHero />
      <DownloadsList />
      <Footer />
    </main>
  );
}
