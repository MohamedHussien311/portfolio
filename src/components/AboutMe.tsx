import { User } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 bg-white animate-fade-in">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* الصورة */}
      <div className="w-370 h-320 rounded-full overflow-hidden shadow-lg border-4 border-primary">
        <img
          src={`${import.meta.env.BASE_URL}personalPhoto.png`}
          alt="Mohamed Hussein"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="font-playfair text-3xl font-bold text-primary mb-3">About</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I’m <span className="text-primary font-bold">Mohamed Hussein</span>, Highly skilled and ISTQB certified software testing engineer with a passion for delivering high-quality software
          solutions. Proficient in manual, API, and automation testing, with hands-on experience using tools such as
          Selenium WebDriver, TestNG framework, Java, and Postman. I specialize in meeting tight deadlines while
          ensuring precision and excellence in every task. My commitment to quality and efficiency sets me apart as a
          dependable professional in software testing.
        </p>
      </div>
    </div>
  </section>
);

export default About;
