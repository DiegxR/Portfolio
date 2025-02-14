"use client";
import React from "react";
import ShimmerButton from "./magicui/shimmer-button";
import { useViewContext } from "@/lib/context/ViewContext";
import Contacts from "./Layout/HomePage/Title/Contacts";
import { motion } from "framer-motion";

const Responsive = () => {
  const { toggleView, transition } = useViewContext();
  return (
    <motion.div
      animate={{ opacity: !transition ? 1 : 0 }} // Cambia la opacidad según el estado
      transition={{ duration: 3, ease: "easeOut" }}
      className="flex h-screen w-screen gap-[5%] p-[8%] z-[99] flex-col justify-center items-center"
    >
      <div className="flex text-[30px] gap-10 text-white text-center justify-center items-center flex-col">
        <p className="font-bold">Juan Diego Rojas, Desarrollador fullStack</p>
        <Contacts />
      </div>
      <div className="flex flex-col gap-10 text-center text-white ">
        <p>Para la experiencia 3D optimizada usa dispositivos de escritorio</p>
        <div className="flex gap-10 justify-center text-5xl">
          <i
            className="icon-[material-symbols--mobile-off]"
            role="img"
            aria-hidden="true"
          />
          <i
            className="icon-[fa-solid--desktop]"
            role="img"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ShimmerButton
          className="w-[50%] mt-4 py-2 rounded-none mx-auto"
          onClick={toggleView}
        >
          <span className="font-semibold px-14">Ver proyectos</span>
        </ShimmerButton>
      </div>
    </motion.div>
  );
};

export default Responsive;
