"use client";
import React, { useEffect, useRef, useState } from "react";
import { useViewContext } from "@/lib/context/ViewContext";
import { Button } from "@nextui-org/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { projectsArray } from "@/lib/projects";
import Meteors from "../../magicui/meteors";
import Project from "./Projects/Project";
import Header from "./Header";
import { Tooltip } from "@nextui-org/react";
const Landing = () => {
  const { viewState, transition, setStationRef } = useViewContext();
  const [seeMore, setSeeMore] = useState(false);
  const ref = useRef<any>();
  setStationRef(ref);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (container) {
        container.scrollTop += e.deltaY; // Controla el desplazamiento vertical
        e.preventDefault(); // Evita el comportamiento predeterminado
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ opacity: transition ? 1 : 0 }} // Cambia la opacidad según el estado
        transition={{ duration: 3, ease: "easeOut" }} // Duración y tipo de transición
        className="absolute opacity-0 bg-black w-full h-full top-0 left-0 z-[50]"
      ></motion.div>
      <motion.div
        animate={{ opacity: viewState ? 1 : 0 }} // Cambia la opacidad según el estado
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-[230px] left-0 z-[50] -translate-x-[500px] w-[100%] lg:block"
      >
        <Meteors number={15} />
      </motion.div>
      <div
        ref={containerRef}
        className="flex overflow-y-scroll h-screen flex-col md:flex-row absolute w-full z-[98]"
      >
        <div ref={ref} className="w-full">
          <Header />
          <main className="container mx-auto overflow-x-hidden w-full relative px-4 py-16">
            <section id="inicio" className="mb-32 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-5xl mt-14 py-2 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Diego Rojas
                </h3>
                <Image
                  src="/logoland.png"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-full mx-auto my-8"
                />
                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Desarrollador full stack
                </h1>
                <p className="text-xl text-white mb-8 max-w-[80%] mx-auto">
                  ¿Necesitas desarrollos especializados para tu producto o
                  empresa? Me destaco por construir soluciones innovadoras,
                  ordenadas y escalables que se adapten a las necesidades de tus
                  ideas.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#proyectos">
                    <Button className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-[15px] transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Ver Proyectos
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/+573112425911?text=a"
                    className="bg-transparent hover:bg-white/10 text-white font-bold py-2 px-4 rounded-[15px] border border-white transition-colors duration-300"
                  >
                    Contactar
                  </a>
                </div>
              </motion.div>
            </section>
            <section id="proyectos" className="mb-32">
              <h2 className="text-3xl text-white font-bold mb-12 text-center">
                Proyectos Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsArray.map((project, index) => {
                  if (index <= 2) {
                    return (
                      <Project key={index} project={project} index={index} />
                    );
                  } else if (seeMore) {
                    return (
                      <AnimatePresence key={index}>
                        {seeMore && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            <Project project={project} index={index} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  }
                })}
              </div>
              <div className="flex w-full justify-center">
                <motion.div
                  onClick={() => setSeeMore(!seeMore)}
                  className="bg-slate-500/40 rounded-full mt-8 flex justify-center items-center p-2 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(100, 116, 139, 0.5)", // Un poco más claro en hover
                  }}
                  animate={{
                    rotate: seeMore ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <Tooltip
                    classNames={{
                      content: "bg-slate-500/30 px-3",
                      base: "z-[100] rounded-[1px]",
                    }}
                    className="select-none shadow-lg translate-y-[85px]  text-white"
                    content={
                      seeMore ? "Ver menos proyectos" : `Ver más proyectos`
                    }
                  >
                    <i
                      className="icon-[iconamoon--arrow-down-2] text-white font-bold text-3xl"
                      role="img"
                      aria-hidden="true"
                    />
                  </Tooltip>
                </motion.div>
              </div>
            </section>

            <section id="habilidades" className="mb-32">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Habilidades Técnicas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  "JavaScript",
                  "Typescript",
                  "Node.js",
                  "Java",
                  "Next js",
                  "Nest js",
                  "Spring Boot",
                  ". Net",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className=" bg-gradient-to-br from-slate-800/70 to-slate-900/90 hover:to-slate-500 select-none backdrop-blur-[0.2px] border-gray-700/95 text-white border border-black rounded-[15px] p-4"
                  >
                    <p className="text-center font-semibold">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>

          <footer className="mt-32 py-8 text-center bg-black/70 backdrop-blur-sm text-white">
            <p>
              &copy; 2025 Juan Diego Rojas Desarrollador Full Stack. Todos los
              derechos reservados.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Landing;
