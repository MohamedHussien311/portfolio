
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Testing Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI) ",
    period: "Oct 2024 – Present",
    desc: "Learned Java programming language, Mastered fundamentals of testing and ISTQB FL concepts, Practiced manual, API, and automation testing, Enhanced soft skills and English proficiency.",
  },
  {
    role: "Software Testing Trainee",
    company: "ITI Summer Training",
    period: "Jul 2024 – Aug 2024",
    desc: "Developed foundational software testing skills.",
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-white animate-fade-in">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase size={32} className="text-primary" />
        <h2 className="font-playfair text-2xl font-bold text-primary">Experience</h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="rounded-lg border-l-4 border-secondary bg-gray-50 px-6 py-4 shadow animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="text-primary font-bold">{exp.role} — <span className="text-gray-700">{exp.company}</span></h3>
              <span className="text-gray-500 text-sm">{exp.period}</span>
            </div>
            <div className="text-gray-600">{exp.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
