import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

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

const DownloadButton = () => {
  const base = import.meta.env.BASE_URL || "/";
  return (
    <div className="flex gap-4 items-center">
      <a
        href={`${base}Mohamed-Hussein-Software-Testing-Engineer.pdf`}
        download
        className="flex items-center rounded bg-primary text-white px-4 py-2 ml-2 gap-2 font-semibold shadow hover:scale-105 transition-transform hover:bg-primary/90"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <ArrowDown size={18} /> Download Resume
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle dark mode
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 ${isDarkMode ? "bg-gray-800" : "bg-white/80"} backdrop-blur border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm`}
    >
      <div className="flex gap-4">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleScroll(s.id)}
            className="relative font-medium text-gray-600 hover:text-primary transition-colors px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:content-['']"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleMode}
        className="p-2 text-sm font-medium text-gray-600 dark:text-gray-200"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Download Button */}
      <DownloadButton />
    </nav>
  );
};

export default Navbar;
