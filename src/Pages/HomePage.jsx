import React from 'react'
import { motion } from 'framer-motion'
import {FaReact,FaHtml5,FaCss3Alt,FaJs} from 'react-icons/fa'
import { SiMongodb,SiNodedotjs } from "react-icons/si";
import { useEffect,useState} from 'react';

const name= "Hi I'M Manish".split("")
const roleTitle="Full Stack Developer".split("")
const HomePage = () => {
  const[show,setshow]=useState(false);
  const[showbtn,setshowbtn]=useState(false);
  const[showtitles,setshowtitles]=useState(false)

  useEffect(()=>{
    setTimeout(() => {
  setshowtitles(true)
}, 500)
setTimeout(()=>{
  setshow(true)
},500)
setTimeout(()=>{
  setshowbtn(true)
},800)

;
  },[])

  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.3,
      
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -100,scale: 0.8  }, // start from left
  show: {
    opacity: 1,
     scale: 1,
    x: 0,
    transition: { duration: 1.0, ease: "linear" },
  },
};

  return (
    <div className=" flex flex-col "> 
    
    <div className="flex flex-col md:flex-row 
  items-center justify-center 
 w-full 
  gap-1 px-4 

 pt-4
  sm:gap-12 
  sm:pt-[10vh]
 xl:gap-[300px]" >
        
        {/* Left */}
        <div className="flex flex-col justify-center  items-center  sm:px-6 py-6  text-left  rounded w-full max-w-[420px] 
        "> 
         {showtitles && <>
          <h2 className="font-bold text-3xl capitalize tracking-wide  md:text-4xl  text-white  whitespace-nowrap lg:pb-5 ">
            {
              name.map((value,i)=>(
                <motion.span
                key={i}
                initial={{opacity:0.3,filter:"blur(8px)"}}
                animate={{opacity:1,filter:"blur(0px)"}}
                transition={{duration:0.4,delay:i*0.08,repeat:3,repeatDelay:2.3}}
                >
                      {value}
                </motion.span>
              ))
            }
          </h2>

          <h4 className="font-bold text-2xl text-green-500 capitalize whitespace-nowrap tracking-wide  md:text-4xl lg:pb-5">
            {
              roleTitle.map((value1,i)=>(
                <motion.span
                key={i}
                initial={{opacity:0.1,filter:"blur(4px)"}}
                animate={{opacity:1,filter:"blur(0px)"}}
                transition={{duration:0.5,delay:i*0.08}}
                >
                 {value1}
                </motion.span>
              ))
            }
          </h4></>
          }
    {show && <>
          <div className="flex gap-4 py-6 justify-center  md:justify-between mx-5">
          <button className="bg-blue-700 text-white px-4 py-2 rounded">Linked In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Resume</button>
          </div>  </> }
        </div>

        {/* Right */}
 {show && <>
<div className="flex flex-col justify-center items-center [perspective:1000px]  lg:w-[400px] ">
  <h2 className="text-3xl font-bold p-3 text-green-500">Profile</h2>

  <div className="relative w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] 
xl:w-[420px] xl:h-[420px]  flex justify-center items-center rounded-full border-4 border-white overflow-hidden ">

    {/* Border Image */}
    <img
      src="https://res.cloudinary.com/dnzejcpkp/image/upload/v1776499301/qxma7f2qdsje9qujgogc.png"
      alt="border"
      className="invert absolute inset-0 w-full h-full object-cover scale-125 rotate-90  pointer-events-none"
    />

    {/* Profile Image */}
    <motion.img
      src="https://res.cloudinary.com/dnzejcpkp/image/upload/v1776435752/cw9vfn2djr8sg4w9pxtj.png"
      alt="my_image"
      className="z-10 w-[220px] h-[220px]   lg:w-[300px] lg:h-[300px] 
  xl:w-[360px] xl:h-[360px] object-cover rounded-full shadow-2xl"

      animate={{ rotateY: [10, 25, 10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    />
 

  </div>
</div> </>}
      </div>   
      {showbtn && 
      <div className='mt-[90px] flex flex-col md:mt-[140px]' >
 

    <motion.h2
      className="text-3xl  text-green-500 font-bold ml-[20px] md:ml-[300px] pb-4"
      initial={{x:-1000}}
      animate={{x:1}}
      transition={{  type: "spring",
  stiffness: 100}}
    >
      Skills  
      </motion.h2>
     <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className=" flex gap-3 justify-center flex-wrap  md:justify-center md:gap-20  "
    >
     
      {/* HTML */}
      <motion.button
        variants={item}
        className="bg-gradient-to-r from-[#F97316] to-[#E34F26] px-4 py-2 rounded text-white font-bold flex items-center gap-2 w-[120px] text-center"
      >
        <FaHtml5 className="text-2xl" />
        HTML
      </motion.button>
      
      <motion.button
        variants={item}
        className="flex items-center w-[120px] gap-2 bg-[#1572B6] text-white px-4 py-2 rounded font-bold"
      >
        <FaCss3Alt />
        CSS
      </motion.button>
      <motion.button
      variants={item}
      className="flex items-center gap-1 bg-gradient-to-r from-[#F7DF1E] to-[#FACC15] text-black px-2 py-2 rounded font-bold w-[120px] ">
  <FaJs />
  JavaScript
</motion.button>

      {/* React */}
      <motion.button
        variants={item}
        className="bg-gradient-to-r from-[#61DAFB] to-[#0EA5E9] text-black px-5 py-2 rounded flex items-center w-[120px] gap-2 font-bold"
      >
        <FaReact className="text-2xl" />
        React
      </motion.button>

<motion.button
variants={item}
 className="flex items-center gap-2 bg-[#339933] text-white px-4 py-2 rounded font-bold"
>
  <SiNodedotjs className="text-xl" />
  Node.js

</motion.button>
      

      {/* Express */}
      <motion.button
        variants={item}
        className="flex items-center gap-2 w-[120px] bg-gradient-to-r from-white to-white/20 rounded font-bold px-4 py-2 text-black"
      >
       
        Express
        <span className="bg-yellow-500 text-black px-1 rounded">JS</span>
      </motion.button>

      <motion.button 
      variants={item}
      className="flex items-center gap-2 w-[120px] bg-[#47A248] text-white px-2 py-2 rounded font-bold">
  <SiMongodb className="text-xl" />
  MongoDB
</motion.button>
    </motion.div>
    </div> 
}
    </div>
  )
}

export default HomePage