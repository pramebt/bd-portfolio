"use client";
import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { TbHandClick } from "react-icons/tb";

const CardProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedProjects, setSelectedProject] = useState<{
    title: string;
    subtitle: string;
    link: string;
    image: string;
  } | null>(null);

  const projects = [
    { title: "Age Calculator (Nextjs)", subtitle: "Calculate age from day, month, year (AD)", link: "https://age-calculator-bd.vercel.app/", image: "/assets/bg/Age-cal.png" },
    { title: "Todolist (React + Vite)", subtitle: "", link: "https://mini-todolist-bd.vercel.app/", image: "/assets/bg/mini-todolist.png" },
    { title: "Ticket Generate (Nextjs)", subtitle: "Ticket Generate", link: "https://ticket-generate-bd.vercel.app/", image: "/assets/bg/ticket.png" },
    { title: "Contactform-BD (Nextjs)", subtitle: "", link: "https://contactform-bd.vercel.app/", image: "/assets/bg/contactform.png" },
    { title: "Portfolio template BD (React + Vite)", subtitle: "", link: "https://portfolio-bd-template.vercel.app/", image: "/assets/bg/portfolio.png" },
    { title: "Login UI", subtitle: "training", link: "https://template-login-2.vercel.app/", image: "/assets/bg/template-ui.png" },
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

  const openModal = (projects: { title: string; subtitle: string; link: string; image: string }) => 
        setSelectedProject(projects);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
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
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProjects.title}</h2>
            <Image
              src={selectedProjects.image}
              alt={selectedProjects.title}
              width={500}
              height={500}
              className="w-full h-auto rounded-md mb-4"
            />
            <p className="mb-4">{selectedProjects.subtitle}</p>
            {/* ใส่รายละเอียดเพิ่มเติมหรือปุ่มลิงก์ภายหลังได้ */}
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={closeModal}
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProjects;