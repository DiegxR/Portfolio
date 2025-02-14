import { motion } from 'framer-motion'
import React from 'react'

const Contacts = () => {
  return (
    <div className="flex select-none cursor-pointer mt-8 mb-2 gap-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/diego-rojas-266963255/"
          >
            <motion.span
              className="icon-[ph--linkedin-logo-bold] "
              whileHover={{
                scale: 1.2,
                rotate: 5.3,
                color: "#0A66C2",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{
                display: "inline-block",
                transition: "text-shadow 0.1s ease-in-out",
              }}
            ></motion.span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DiegxR"
          >
            <motion.span
              className="icon-[bi--github]"
              whileHover={{
                scale: 1.2,
                rotate: -5.3,
                color: "gray",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{
                display: "inline-block",
                transition: "text-shadow 0.1s ease-in-out",
              }}
            ></motion.span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+573112425911?text=a"
          >
            <motion.span
              className="icon-[mdi--whatsapp]"
              whileHover={{
                scale: 1.2,
                rotate: 5.3,
                color: "#4FCC57",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{
                display: "inline-block",
                transition: "text-shadow 0.1s ease-in-out",
              }}
            ></motion.span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:juandiegorojasarredondo@gmail.com?subject=Consulta%20sobre%20el%20proyecto&body=Hola%2C%20tengo%20algunas%20preguntas%20sobre%20el%20proyecto."
          >
            <motion.span
              className="icon-[simple-icons--gmail]"
              whileHover={{
                scale: 1.2,
                rotate: -5.3,
                color: "red",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{
                display: "inline-block",
                transition: "text-shadow 0.1s ease-in-out",
              }}
            ></motion.span>
          </a>
        </div>
  )
}

export default Contacts