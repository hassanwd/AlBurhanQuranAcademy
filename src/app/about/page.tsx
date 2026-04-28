import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import VisionCarousel from "@/components/about/VisionCarousel";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | AL Burhan Quran Academy",
  description: "Learn about AL Burhan Quran Academy — our mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <VisionCarousel />
      <MissionSection />
      <ValuesSection />
      <Footer />
    </main>
  );
}
