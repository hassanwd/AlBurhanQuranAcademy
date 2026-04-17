import Header from "@/components/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Us | Al Burhan Quran Academy",
  description: "Book a free trial Quran class with Al Burhan Quran Academy. Reach out via WhatsApp, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactSection />
    </main>
  );
}
