"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardProjects from "@/components/project/CardProjects";
import Image from "next/image";
interface Project {
  title: string;
  link: string;
  image: string;
  techstack: string;
  detail: string;
  github: string;
}
const Projects = () => {
  
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedProjects, setSelectedProject] = useState<Project | null>(null);

  const projects : Project[] = [
    {
      title: "Age Calculator (Nextjs)",
      link: "https://age-calculator-bd.vercel.app/",
      image: "/assets/bg/Age-cal.png",
      techstack: "Next.js Typescript",
      detail:
        "Calculate age from day, month, year (AD) Responsive for mobile and pc",
      github: "https://github.com/pramebt/age-calculator",
    },
    {
      title: "Todolist",
      link: "https://mini-todolist-bd.vercel.app/",
      image: "/assets/bg/mini-todolist.png",
      techstack: "React.js Vite",
      detail:
        "Todo List for managing tasks with Local Storage persistence. Supports add/edit/delete.",
      github: "https://github.com/pramebt/miniTodolist-bd",
    },
    {
      title: "Ticket Generate",
      link: "https://ticket-generate-bd.vercel.app/",
      image: "/assets/bg/ticket.png",
      techstack: "Next.js Typescript",
      detail: "Generate ticket for yourself",
      github: "https://github.com/pramebt/ticket-generate-bd",
    },
    {
      title: "Contactform-BD",
      link: "https://contactform-bd.vercel.app/",
      image: "/assets/bg/contactform.png",
      techstack: "Next.js Typescript",
      detail: "Contactform template",
      github: "https://github.com/pramebt/contactform-bd",
    },
    {
      title: "Portfolio template BD",
      link: "https://portfolio-bd-template.vercel.app/",
      image: "/assets/bg/portfolio.png",
      techstack: "React Vite",
      detail: "Simple modern portfolio template",
      github: "https://github.com/pramebt/PortfolioBD",
    },
    {
      title: "Login UI",
      link: "https://template-login-2.vercel.app/",
      image: "/assets/bg/template-ui.png",
      techstack: "Next.js Typescript",
      detail: "Training project cloning login UI",
      github: "",
    },
  ];

  const visibleProjects: Project[] = showMore ? projects : projects.slice(0, visibleCount);

  const openModal = (projects: Project) => setSelectedProject(projects);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCount(width >= 1024 ? 3 : 4); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="projects"
      className="relative w-full lg:px-[12%] mt-50 text-center flex flex-col items-center justify-center gap-4 scroll-mt-40"
    >
      <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-5xl">
        Projects
      </h2>
      <h2 data-aos="fade-up" className="text-white text-base md:text-lg">
        keep my projects here
      </h2>

      <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => openModal(item)}
          >
            <CardProjects item={item} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProjects && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="border border-black bg-white/90 backdrop-blur rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <Image
                src="/assets/icons/close-icon.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProjects.title}</h2>
            <Image
              src={selectedProjects.image}
              alt={selectedProjects.title}
              width={500}
              height={300}
              className="w-full h-auto rounded-md mb-4 object-cover"
            />
            <p className="mb-4">{selectedProjects.detail}</p>
            <p className="mb-4 bg-black text-white px-3 py-1 rounded-3xl inline-block">
              Techstack: {selectedProjects.techstack}
            </p>

            <div className="flex justify-center gap-6">
              <a href={selectedProjects.link} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-white text-black rounded-3xl border">
                  Demo
                </button>
              </a>
              {selectedProjects.github && (
                <a href={selectedProjects.github} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-black text-white rounded-3xl">
                    GitHub
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          data-aos="fade-up"
          className="mt-10 px-10 py-3 bg-black/20 border rounded-full text-gray-700 hover:bg-gray-100 transition"
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Projects;
