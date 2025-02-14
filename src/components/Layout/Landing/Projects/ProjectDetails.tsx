"use client";
import { projectsArray } from "@/lib/projects";
import { Project } from "@/types/proyects";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import ImageCarousel from "../../../ImageCarousel";
import { Tooltip } from "@nextui-org/react";

const ProjectDetails = () => {
  const router = useRouter();
  const [project, setProject] = useState<Project>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const param = useParams();
  useEffect(() => {
    if (param.id) {
      setProject(projectsArray.find((_, index) => index === Number(param.id)));
    }
  }, [param]);

  return (
    <div className="absolute h-full overflow-y-scroll md:overflow-y-hidden z-[99]">
      <div className="w-screen flex mb-16 md:mb-0 flex-col justify-center items-center">
        <div
          onClick={() => router.push("/landing")}
          className="absolute flex gap-2 text-gray-300 items-center top-8 left-4 md:left-8 cursor-pointer hover:text-white rounded-md px-2 py-1"
        >
          <span className="icon-[material-symbols--arrow-left-alt] text-[25px]"></span>{" "}
          <p>Volver</p>
        </div>
        <h4 className="text-white mt-20 md:mt-0 text-[40px] mb-4  font-bold">
          {project?.name}
        </h4>
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {project?.details.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(index)}
                className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
                }
              `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1 * 0.1,
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="bg-gradient-to-br p-5 w-[90vw] md:w-[80vw] relative h-[100vh] md:h-[80vh] from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95  border border-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Card className="w-full h-full">
            <section className="flex flex-col pb-10 gap-[5%] px-[2vw] w-full h-full items-center justify-between">
              <div className="w-[100%] md:max-w-[50vw] flex h-[40vh] pt-5 overflow-y-auto flex-col justify-center">
                <p className="text-white">
                  {project?.details[activeTab].description}
                </p>
              </div>
              <div className="flex flex-col w-[100%] h-[50%] md:h-full items-center">
                <ImageCarousel images={project?.details[activeTab].images!} />
                <div className="mt-10 flex flex-wrap gap-5 items-center">
                  <p className="text-white">Tecnologías:</p>
                  {project?.details[activeTab].icons.map((icon, index) => (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      key={index}
                      className="flex flex-col group cursor-pointer items-center  justify-center text-center gap-1"
                    >
                      <span className={`text-[50px] ${icon.icon}`}></span>
                      <p className=" text-[10px] font-medium group-hover:drop-shadow-lg shadow-white group-hover:text-white text-gray-300">
                        {icon.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 hover:text- z-[99] group text-white md:absolute bottom-8 left-3"
              href={project?.details[activeTab].link}
            >
              <Tooltip
                classNames={{
                  content: "bg-slate-500/30 px-3",
                  base: "z-[100] rounded-[1px]",
                }}
                className="select-none shadow-lg text-white"
                content={`Echa un vistazo directo en este link`}
              >
                <span className="icon-[hugeicons--link-square-01] group-hover:text-lime-400  text-3xl"></span>
              </Tooltip>
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
