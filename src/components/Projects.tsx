import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const projects = [
  {
    title: "Magento E-Commerce Website",
    img: "/magento.jpeg",
    link: "https://github.com/MohamedHussien311/MagentoEcommerceWebsite.git",
    desc: "Created test cases to cover several modules like Sign In, Login, products cart and checkout pages.",
    more: "Tools: Selenium WebDriver with Java, TestNG, POM Design Pattern, Allure Report for generating automation reports.",
  },
  {
    title: "Guru99 Banking System",
    img: "/guru99.jpeg",
    link: "https://github.com/MohamedHussien311/Guru99BankingProject.git",
    desc: "Performed manual and automation testing.",
    more: "Identified bugs and designed reports, Automated testing using Selenium with Java, POM design pattern, TestNG, and Allure report.",
  },
  {
    title: "ToDo application",
    img: "/todo.png",
    link: "https://github.com/MohamedHussien311/Test-a-Todo-Application..git",
    desc: "Performed manual testing to cover sign In, login and ToDo pages.",
  },
  {
    title: "NopCommerce Store",
    img: "/nopcommerce.jpeg",
    link: "https://github.com",
    desc: "Performed Automation Testing with Selenium WebDriver and TestNG.",
  },
  ];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const shownProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-secondary/10 via-white to-primary/5 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Code size={32} className="text-secondary" />
          <h2 className="font-playfair text-2xl font-bold text-secondary">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shownProjects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform flex flex-col"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6 flex-1 flex flex-col">
                <span className="font-bold text-xl text-primary mb-2">{p.title}</span>
                <span className="mb-2 text-gray-700">{p.desc}</span>
                <span className="mb-4 text-gray-500 text-sm">{p.more}</span>
                <div className="mt-auto">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="mt-2">View Project</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="flex items-center justify-center mt-10">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Collapse projects" : "View all projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
