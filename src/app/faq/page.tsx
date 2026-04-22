import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/faq/FaqSection";

export const metadata = {
  title: "FAQs | Al Burhan Quran Academy",
  description: "Frequently asked questions about our Quran courses, teachers, and online classes.",
};

export default function FaqPage() {
  return (
    <main>
      <Header />
      <FaqSection />
      <Footer />
    </main>
  );
}
