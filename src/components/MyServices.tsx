
import { CheckSquare, Cpu, ServerCog, Bug } from "lucide-react";

const services = [
  {
    icon: <CheckSquare size={34} className="text-secondary" />,
    title: "Manual Testing",
    desc: "Comprehensive testing to identify bugs and ensure functionality aligns with software requirements.",
  },
  {
    icon: <Cpu size={34} className="text-primary" />,
    title: "Automation Testing",
    desc: "Development and execution of automated test scripts using Selenium, Java, and TestNG.",
  },
  {
    icon: <ServerCog size={34} className="text-primary" />,
    title: "API Testing",
    desc: "Validation and performance testing of APIs.",
  },
  {
    icon: <Bug size={34} className="text-secondary" />,
    title: "Bug Reporting and Documentation",
    desc: "Detailed reporting of bugs, test cases, and test reports.",
  },
];


const MyServices = () => (
  <section id="services" className="py-20 bg-gradient-to-l from-white via-primary/10 to-secondary/5 animate-fade-in">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-2xl font-bold mb-10 text-primary flex items-center gap-2">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {services.map((svc) => (
          <div
            className="bg-white rounded-xl shadow-lg flex flex-col items-center p-7 transition-transform hover:scale-105 group"
            key={svc.title}
          >
            <div className="mb-4 group-hover:rotate-12 transition-transform">{svc.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-primary">{svc.title}</h3>
            <p className="text-gray-600 text-center">{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MyServices;
