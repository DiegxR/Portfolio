"use client"
import ShinyButton from "@/components/magicui/shiny-button";
import { useViewContext } from "@/lib/context/ViewContext";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const Header = () => {
  const { toggleView, transition } = useViewContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="w-full fixed z-[99] h-[80px] bg-black/80 py-1 md:px-16 px-8 flex items-center justify-between">
      <span
        onClick={() => (transition ? "" : toggleView())}
        className="icon-[system-uicons--home] text-white text-2xl cursor-pointer hover:"
      ></span>
      <div className="md:flex hidden items-center gap-5">
        <a href="#inicio">
          <Button className="px-2 py-1 bg-gradient-to-br from-gray-900/80 to-gray-900/90 hover:bg-slate-600 text-white font-normal w-[100px] rounded-[15px] h-[38px]">
            Inicio
          </Button>
        </a>
        <a href="#proyectos">
          <ShinyButton
            className="bg-white rounded-[15px]"
            text="Mis Proyectos"
          />
        </a>
        <a href="#habilidades">
          <Button className="px-2 py-1 bg-gradient-to-br from-gray-900/80 to-gray-900/90 hover:bg-slate-600 text-white font-normal w-[100px] rounded-[15px] h-[38px]">
            Tecnologías
          </Button>
        </a>
      </div>
     
    </header>
  );
};

export default Header;
