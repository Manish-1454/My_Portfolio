import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  const skills = [
    "React.js",
    "React Native",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
  ];

  const highlights = [
    "Built Attendance Management App",
    "Created Canteen Ordering Platform",
    "Responsive Full Stack Websites",
    "Modern UI / UX Focused Projects",
  ];

  return (
    <div className="min-h-screen w-full text-white px-6 md:px-16 py-12 overflow-hidden">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <p className="text-green-500 font-semibold tracking-widest uppercase">
          About Me
        </p>

        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mt-4">
          Building modern apps with
          <span className="text-green-500"> clean code </span>
          & real purpose.
        </h1>

        <p className="text-white/70 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
          Hi, I'm Manish — a passionate Full Stack Developer focused on creating
          responsive web apps and mobile experiences using modern technologies.
          I enjoy turning ideas into polished digital products.
        </p>
      </motion.div>

      {/* Story + Image */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-20 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My Journey
          </h2>

          <p className="text-white/70 leading-relaxed">
            My journey started with curiosity for frontend design and grew into
            full stack development. Over time, I built real-world projects like
            attendance systems, worker management apps, and canteen ordering
            platforms.
          </p>

          <p className="text-white/70 leading-relaxed">
            I care about performance, clean UI, scalable backend systems and
            smooth user experience.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
     
          <img
            src="https://res.cloudinary.com/dnzejcpkp/image/upload/v1776435752/cw9vfn2djr8sg4w9pxtj.png"
      alt="my_image"
      className="z-10 w-[240px] h-[240px]   lg:w-[300px] lg:h-[300px] 
  xl:w-[360px] xl:h-[360px] object-cover rounded-full shadow-2xl mx-[25%]"
   />
        

        
        </motion.div>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-center text-white/80"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          What I've Built
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mt-28"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s build something
          <span className="text-green-500"> impactful.</span>
        </h2>

        <p className="text-white/60 mt-5 text-lg">
          Open to freelance work, collaborations and exciting opportunities.
        </p>

        <button className="mt-8 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition-all">
          Contact Me
        </button>
      </motion.div>
    </div>
  );
}

export default AboutPage;