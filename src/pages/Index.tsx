import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import MyServices from "@/components/MyServices";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactMe";
import ScrollButtons from "@/components/ScrollButtons";

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroHeader />
        <AboutMe />
        <Education />
        <MyServices />
        <Experience />
        <Projects />
        <Skills />
        <ContactSection />
        <ScrollButtons />
        <footer className="text-center py-10 text-gray-400 mt-12">
          &copy; {new Date().getFullYear()} Designed by Mohamed Hussein
        </footer>
      </main>
    </div>
  );
};

export default Index;
