
import { GraduationCap } from "lucide-react";
// <div className="text-sm text-gray-500">Relevant Coursework: Data Structures, Web Development, UI/UX Design</div>
const Education = () => (
  <section id="education" className="py-20 bg-gradient-to-r from-secondary/5 via-white to-white animate-fade-in">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-6 gap-3">
        <GraduationCap size={32} className="text-secondary" />
        <h2 className="font-playfair text-2xl font-bold text-secondary">Education</h2>
      </div>
      <div className="space-y-5">
        <div className="bg-white shadow rounded-lg p-5 border-l-4 border-primary animate-scale-in">
          <h3 className="text-primary font-bold text-lg">B.S. in Computer Science and Engineering</h3>
          <div className="text-gray-700">Faculty of Electronic Engineering, Menofia University – 2020–2025</div>
        </div>
      </div>
    </div>
  </section>
);
export default Education;
