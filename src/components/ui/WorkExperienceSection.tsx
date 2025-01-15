"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";

const WorkExperienceSection = () => {
  const experiences = [
    {
      company: "Edumitram Private Limited",
      title: "Software Engineer",
      period: "May 2023 - Present",
      project: "LMS (Learning Management System)",
      link: "https://educrafter.edumitram.com",
      description: [
        "Developed a comprehensive Learning Management System (LMS) featuring school creation, user management, course management, live classes, and MCQ features.",
        "Uploaded recorded lectures to enhance student engagement.",
      ],
      technologies: [
        "ASP.Net Core",
        "MySQL",
        "Typescript",
        "Bootstrap",
        "React",
        "Angular 16",
      ],
    },
    {
      company: "Hem Aunty Publications",
      title: "Full Stack Developer",
      period: "Jan 2023 - Apr 2023",
      project: "E-book Platform",
      link: "https://hemaunty.org",
      description: [
        "Developed a comprehensive e-book platform with an admin panel, categorized book listings, secure online payments, and 1000+ daily active users.",
        "Implemented a scalable and secure solution, enhancing user experience and driving business growth.",
      ],
      technologies: [
        "React",
        "ASP.Net Core",
        "MySQL",
        "Tailwind CSS",
        "Redux",
        "Typescript",
      ],
    },
    {
      company: "SOCIETY - RADHI ADDA",
      title: "Full Stack Developer",
      period: "Aug 2022 - Dec 2022",
      project: "Society Management Web App",
      link: "https://radhiadda.com",
      description: [
        "Built a scalable society management web app with messaging, user authentication, and a multimedia gallery.",
        "Implemented secure registration, a family tree module, and a matrimony feature with profile controls.",
      ],
      technologies: [
        "ASP.Net Core",
        "MySQL",
        "Typescript",
        "Bootstrap",
        "Angular 16",
      ],
    },
    {
      company: "SOCIETY - RADHI ADDA",
      title: "Full Stack Developer",
      period: "Aug 2022 - Dec 2022",
      project: "Society Management Web App",
      link: "https://radhiadda.com",
      description: [
        "Built a scalable society management web app with messaging, user authentication, and a multimedia gallery.",
        "Implemented secure registration, a family tree module, and a matrimony feature with profile controls.",
      ],
      technologies: [
        "ASP.Net Core",
        "MySQL",
        "Typescript",
        "Bootstrap",
        "Angular 16",
      ],
    },
  ];

  return (
    <section
      id="work-experience"
      className="py-12 px-6 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            A snapshot of my professional journey.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <FaBuilding className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {experience.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <HiOutlineCalendar className="text-gray-600 dark:text-gray-400 text-lg mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.period}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {experience.project}
                </a>
              </h4>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
