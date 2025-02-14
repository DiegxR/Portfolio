"use client";
import React from "react";
import MotionText from "../../../MotionText";
import Image from "next/image";
import { motion } from "framer-motion";
import { useViewContext } from "@/lib/context/ViewContext";
import AmbientSound from "@/components/Sounds/AmbientSound";

const Title = () => {
  const { viewState, transition } = useViewContext();
  return (
    <motion.div
      animate={transition ? { translateX: 850, opacity: "0" } : {}}
      transition={transition ? { duration: 1.3, ease: "easeInOut" } : {}}
      className="md:w-[50%] animate-out w-[100%] font-bold text-[40px] text-white flex-col h-screen flex justify-center relative gap-1 items-center"
    >
      <motion.div
        animate={transition ? { paddingTop: 850, opacity: "0" } : {}}
        transition={transition ? { duration: 1.3, ease: "easeInOut" } : {}}
        className="absolute w-[90%] md:min-w-[600px]  bg-gradient-to-br from-gray-900/20 to-gray-900/90 backdrop-blur-[0.2px] border-gray-700/95 border-[0.1px] z-[-99]  md:w-[30vw] rounded-[40px] h-[64vh]"
      ></motion.div>
      <AmbientSound />
      <div className="group flex border-black hover:border-white border-2 items-center justify-center bg-white hover:bg-black rounded-full overflow-hidden w-[280px] h-[280px]  ">
        <Image
          loading="lazy"
          className="bg-white m-auto mt-5 group-hover:hidden"
          width={200}
          height={200}
          alt=""
          src="/profile.jpg"
        />
        <Image
          loading="lazy"
          className="bg-white m-auto mt-5  hidden group-hover:block"
          width={200}
          height={200}
          alt=""
          src="/profileBlack.jpg"
        />
      </div>
      <div className="flex group flex-col items-center">
        <h1
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          className="justify-center px-5 mt-8"
        >
          <MotionText
            className="arrayFont text-[35px]"
            text="Desarrollador FullStack"
          />
        </h1>
        <p
          className="text-[20px] hidden md:block px-4 mt-2 w-[550px]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <MotionText text="Transformando ideas en código y experiencias innovadoras." />
        </p>

        
      </div>
    </motion.div>
  );
};

export default Title;
