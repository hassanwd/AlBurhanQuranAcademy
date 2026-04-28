import Banner from "@/components/Banner";
import HadeesSection from "@/components/HadeesSection";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <StatsSection />
      <WhyChooseUs />
      <HadeesSection />
      <Footer />
    </main>
  );
}