import { Project as Projecttype } from "@/types/proyects";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Project = ({
  project,
  index,
}: {
  project: Projecttype;
  index: number;
}) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.push(`/projectDetail/${index}`)}
      className="bg-gradient-to-br cursor-pointer from-slate-800/70 to-slate-900/90 backdrop-blur-[0.2px] border-gray-700/95  border border-black rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={project.details[0].images[0]}
        alt={`${project.name} Image`}
        width={400}
        height={200}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl text-white font-semibold mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-white mb-4">{project.description}.</p>

        <div className="absolute p-2 flex gap-1 right-0 top-0">
          {project.tags.includes("FrontEnd") ? (
            <Chip className="text-white bg-indigo-900">FrontEnd</Chip>
          ) : (
            <></>
          )}
          {project.tags.includes("BackEnd") ? (
            <Chip className="text-white bg-gray-500">Backend</Chip>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
