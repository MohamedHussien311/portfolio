import { Settings } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // لو بتستخدم shadcn أو tailwind button component

const sections = [
  {
    title: "Technical Skills",
    color: "primary",
    items: [
      { skill: "Manual Testing" },
      { skill: "API Testing" },
      { skill: "Automation Testing" },
      { skill: "Regression testing" },
      { skill: "Confirmation testing" },
      { skill: "Create & Execute test cases" },
      { skill: "Write bugs report" },
      { skill: "SDLC" },
      { skill: "STLC" },
    ],
  },
  {
    title: "Soft Skills",
    color: "secondary",
    items: [
      { skill: "Communication" },
      { skill: "Search" },
      { skill: "Problem Solving" },
      { skill: "Attention to details" },
    ],
  },
  {
    title: "Tools & Frameworks",
    color: "primary",
    items: [
      { skill: "Trello" },
      { skill: "Google sheets" },
      { skill: "Postman" },
      { skill: "Selenium WebDriver" },
      { skill: "TestNG" },
      { skill: "Java & OOP" },
      { skill: "Github" },
    ],
  },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="py-20 bg-white animate-fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center mb-6 gap-2">
          <Settings size={28} className="text-primary" />
          <h2 className="font-playfair text-2xl font-bold text-primary">Skills & Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h3
                className={`font-semibold text-lg mb-4 ${
                  section.color === "primary" ? "text-primary" : "text-secondary"
                }`}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {(showAll ? section.items : section.items.slice(0, 3)).map(({ skill }) => (
                  <li key={skill}>
                    <span className="text-base font-medium text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* زرار إظهار/إخفاء باقي المهارات */}
        <div className="flex justify-center mt-10">
          <Button variant="secondary" size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse skills" : "View all skills"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
