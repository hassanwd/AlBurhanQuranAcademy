import Header from "@/components/Header";
import CoursesHero from "@/components/courses/CoursesHero";
import CoursesList from "@/components/courses/CoursesList";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Courses | Al Burhan Quran Academy",
  description: "Explore our Quranic and Islamic courses tailored for every student.",
};

export default function CoursesPage() {
  return (
    <main>
      <Header />
      <CoursesHero />
      <CoursesList />
      <Footer />
    </main>
  );
}
