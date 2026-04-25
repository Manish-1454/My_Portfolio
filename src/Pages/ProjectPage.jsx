import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project_items = [
  {
    img: "https://res.cloudinary.com/dnzejcpkp/image/upload/q_auto/f_auto/v1776613904/ph7prsbyyjiknhmisrql.png",
    name: "Attendance APP".split(""),
    text:
      "Attendance Application Using React Native\nUser Authentication And Generate Token\nSeparate User Login System",
    skills: {
      frontend: "React Native",
      backend: "Node + Express.js",
      database: "MongoDB",
    },
  },
  {
    img: "https://res.cloudinary.com/dnzejcpkp/image/upload/q_auto/f_auto/v1776615270/g62qaauhzhhkze5sjhuh.png",
    name: "Canteen Food".split(""),
    text:
      "Canteen Website Using MERN Stack\nUser Authentication And Separate Login\nFood Ordering Flow",
    skills: {
      frontend: "React.js",
      backend: "Node + Express.js",
      database: "MongoDB",
    },
  },
];

function ProjectPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Project_items.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full  overflow-hidden">



     
      <div className="relative h-screen flex justify-center items-center">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            className="relative w-full h-full flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >

        

         
            <h2 className="absolute top-12 z-2 text-green-500 font-bold text-3xl md:text-4xl flex gap-[2px]">
              {Project_items[index].name.map((letter, i) => (
                <motion.span
                  key={`${index}-${i}`}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.06,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h2>

            <motion.img
              src={Project_items[index].img}
              className="absolute z-10 w-[90%] max-w-[700px] object-contain blur-[2px] md:top-80 lg:right-140 xl:right-220 xl:top-90 "
              initial={{
                y: -900,
                rotate: -25,
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                y: -200,
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -300,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            />

     
            <motion.p
              className="absolute  z-90 text-white/80 text-center max-w-xl px-6 text-xl top-110 md:top-90 md:text-xl font-bold text-base whitespace-pre-line leading-relaxed lg:text-2xl lg:right-0 lg:top-75 xl:right-30"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
            >
              {Project_items[index].text}
            </motion.p>

            <motion.div
              className="absolute bottom-60  flex gap-4 flex-wrap justify-center z-20 px-4 md:bottom-70 lg:bottom-50"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {Object.entries(Project_items[index].skills).map(
                ([key, value], i) => (
                  <motion.button
                    key={i}
                    variants={item}
                    className="bg-gradient-to-r from-[#F97316] to-[#E34F26] px-4 py-2 rounded-xl text-white font-semibold min-w-[160px] shadow-lg"
                  >
                    {value}
                  </motion.button>
                )
              )}
            </motion.div>

            <motion.div
              className="absolute bottom-30 h-[3px] bg-green-500 rounded-full z-20  md:bottom-50 lg:bottom-40"
              initial={{ width: "0px" }}
              animate={{ width: "240px" }}
              transition={{
                duration: 9,
                ease: "linear",
              }}
            />

          </motion.div>

        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectPage;