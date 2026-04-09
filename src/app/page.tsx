import Banner from "@/components/Banner";
import HadeesSection from "@/components/HadeesSection";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <StatsSection />
      <WhyChooseUs />
      <HadeesSection />
    </main>
  );
}