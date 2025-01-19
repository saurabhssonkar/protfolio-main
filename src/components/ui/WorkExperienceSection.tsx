"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { CardContent } from "./card";
import { Badge } from "./badge";
import { DATA } from "@/data/resume";

const WorkExperienceSection = () => {
  const experiences = [
   
  ];

  return (
    <section
      id="work-experience"
      className="py-12 px-6 text-justify "
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
        <div className="border  border-white rounded-lg shadow-md hover:shadow-lg">
          <div className="flex justify-between px-5  mt-5 font-bold text-gray-800 dark:text-white">
          <h1 className="text-2xl">{DATA.work[0].company}</h1>
          <p className="text-[1.4rem]">{DATA.work[0].period}</p>

          </div>
          {DATA.work.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="  p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
             
              {/* <div className="flex items-center mb-4">
                <HiOutlineCalendar className="text-gray-600 dark:text-gray-400 text-lg mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.period}
                </span>
              </div> */}
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-600 hover:underline"
                >
                  {experience.project}
                </a>
              </h4>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {experience.description.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {/* {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))} */}

<CardContent className="mt-auto px-4 py-2">
    {experience && experience.technologies.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-2">
        {experience.technologies.map((tag) => (
          <Badge
            key={tag}
            className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-300 rounded-md"
          >
            {tag}
          </Badge>
        ))}
      </div>
    )}
  </CardContent>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
