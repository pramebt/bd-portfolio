"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { TbHandClick } from "react-icons/tb";

const CardProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedProjects, setSelectedProject] = useState<{
    title: string;
    detail: string;
    techstack: string;
    link: string;
    image: string;
    github: string;
  } | null>(null);

  const projects = [
    {
      title: "Age Calculator (Nextjs)",
      subtitle: "",
      link: "https://age-calculator-bd.vercel.app/",
      image: "/assets/bg/Age-cal.png",
      techstack: "Next.js Typescript",
      detail:
        "Calculate age from day, month, year (AD) Responsive for mobile and pc",
      github: "https://github.com/pramebt/age-calculator",
    },
    {
      title: "Todolist",
      subtitle: "",
      link: "https://mini-todolist-bd.vercel.app/",
      image: "/assets/bg/mini-todolist.png",
      techstack: "React.js Vite",
      detail:
        "Todo List is a simple yet effective web application for managing your daily tasks and you can add edit delete your task. Whether it’s small chores, important assignments, or simple reminders, this app helps ensure you never miss a thing.\n\n It uses Local Storage to save your data, allowing you to access your task list without the need for an account or internet connection.",
      github: "https://github.com/pramebt/miniTodolist-bd",
    },
    {
      title: "Ticket Generate",
      subtitle: "",
      link: "https://ticket-generate-bd.vercel.app/",
      image: "/assets/bg/ticket.png",
      techstack: "Next.js Typescript",
      detail: "Generate ticket for yourself",
      github: "https://github.com/pramebt/ticket-generate-bd",
    },
    {
      title: "Contactform-BD",
      subtitle: "",
      link: "https://contactform-bd.vercel.app/",
      image: "/assets/bg/contactform.png",
      techstack: "Next.js Typescript",
      detail: "Contactform template",
      github: "https://github.com/pramebt/contactform-bd",
    },
    {
      title: "Portfolio template BD",
      subtitle: "",
      link: "https://portfolio-bd-template.vercel.app/",
      image: "/assets/bg/portfolio.png",
      techstack: "React Vite",
      detail: "portfolio template",
      github: "https://github.com/pramebt/PortfolioBD",
    },
    {
      title: "Login UI",
      subtitle: "training",
      link: "https://template-login-2.vercel.app/",
      image: "/assets/bg/template-ui.png",
      techstack: "Next.js Typescript",
      detail: "trainning clone login ui",
      github: "",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCount(width >= 768 ? 3 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = showMore ? projects : projects.slice(0, visibleCount);

  const openModal = (projects: {
    title: string;
    detail: string;
    techstack: string;
    link: string;
    image: string;
    github: string;
  }) => setSelectedProject(projects);
  const closeModal = () => setSelectedProject(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {visibleProjects.map((projects, index) => (
          <div
            key={index}
            className="border border-white bg-black/80 backdrop-blur rounded-4xl px-10 py-10 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => openModal(projects)}
          >
            <Image
              src={projects.image}
              alt={projects.title}
              width={500}
              height={500}
              className="border border-white w-full h-[250px] object-contain rounded-2xl"
            />
            <div className="bg-white flex flex-row mt-5 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out">
              <div className="flex flex-col">
                <h2 className="font-semibold md:text-base">{projects.title}</h2>
                <h2 className="text-sm md:text-base">{projects.subtitle}</h2>
              </div>
              <div className="flex items-center justify-center ml-auto">
                <TbHandClick width={20} height={20} />
              </div>
            </div>
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
                width={200}
                height={200}
                className="w-6"
              />
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProjects.title}</h2>
            <Image
              src={selectedProjects.image}
              alt={selectedProjects.title}
              width={500}
              height={500}
              className="w-full h-auto rounded-md mb-4"
            />
            <p className="mb-4">{selectedProjects.detail}</p>
            <p className="mb-4 bg-black text-white px-2 py-2 rounded-3xl">
              Techstack : {selectedProjects.techstack}
            </p>

            <div className="flex justify-center gap-10">
              <a href={selectedProjects.link} target="_blank">
                <button className="mt-2 px-4 py-2 bg-white text-black rounded-3xl  cursor-pointer ">
                  Demo
                </button>
              </a>
              <a href={selectedProjects.github} target="_blank">
                <button className="mt-2 px-4 py-2 bg-black text-white rounded-3xl cursor-pointer ">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="w-max flex gap-2 items-center justify-center text-gray-700 border-[0.5px] rounded-full px-10 py-3 mx-auto transition hover:bg-gray-100"
        >
          show more
        </button>
      )}
    </div>
  );
};

export default CardProjects;
