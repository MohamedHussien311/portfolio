
import { ArrowDown} from "lucide-react";
import React from "react";

const HERO = {
  name: "Mohamed Hussein",
  title: "Software Testing Engineer",
  brief:
    "I ensure your software is bulletproof—free of bugs, high-quality, and ready for users.",
};

const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroHeader = () => (
  <header className="pt-20 md:pt-32 pb-14 bg-gradient-to-b from-white via-secondary/5 to-white dark:from-dark-background dark:via-dark-surface dark:to-dark-background min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-10 px-4 max-w-5xl mx-auto relative">
    <div className="flex flex-col items-start gap-7 flex-1">
      <div>
      <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">{HERO.name}</h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-secondary dark:text-gray-300 font-semibold">{HERO.title}</h2>
        <div className="mt-4 mb-1 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">{HERO.brief}</div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={() => handleScroll("projects")}
          className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform"
        >
          View my work
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="border-2 border-primary text-primary dark:text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary/10 transition"
        >
          Contact
        </button>
      </div>
    </div>
    <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
      <div className="w-[370px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-primary/10 border-8 border-primary shadow-2xl flex items-center justify-center overflow-hidden text-gray-400 text-lg relative">
        <img src="photo.png" className="absolute w-full h-full object-cover" />
        <span className="italic text-xl opacity-50 z-10"></span>
      </div>
    </div>

  </header>
);

export default HeroHeader;
