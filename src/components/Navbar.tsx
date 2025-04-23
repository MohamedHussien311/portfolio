import { Download, Menu, X } from "lucide-react";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const base = import.meta.env.MODE === "production" ? "/portfolio/" : "/";

type Section = {
  id: string;
  name: string;
};

const sections: Section[] = [
  { id: "about", name: "About" },
  { id: "education", name: "Education" },
  { id: "services", name: "Services" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-dark-background/90 backdrop-blur border-b border-gray-200 dark:border-dark-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* العناصر الجانبية (الثيم وزر التنزيل) */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={`${base}Mohamed-Hussein-Software-Testing-Engineer.pdf`}
              download
              className="flex items-center bg-primary text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform gap-2"
            >
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">Download CV</span>
              <Download size={18} className="flex-shrink-0" />
            </a>
          </div>

          {/* عناصر النافبار للشاشات الكبيرة */}
          <div className="hidden md:flex gap-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 transition-colors"
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* زر القائمة للجوال */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال */}
      <div 
        className={`md:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-dark-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-2 space-y-2 h-full overflow-y-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="block w-full text-left px-3 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;