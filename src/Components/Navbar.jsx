import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const title="Portfolio".split("");
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-around items-center p-4 text-white border-b text-base"
    >
      <h1 className="text-lg text-green-500 font-bold md:text-4xl">
         {
              title.map((value,i)=>(
                <motion.span
                key={i}
                initial={{opacity:0.3,filter:"blur(8px)"}}
                animate={{opacity:1,filter:"blur(0px)"}}
                transition={{duration:0.4,delay:i*0.08,repeat:20,repeatDelay:2.3}}
                >
                      {value}
                </motion.span>
              ))
            }
      </h1>

      <div className="flex gap-8">

        {/* Home */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-bold md:text-xl"
                : "hover:text-gray-300 font-bold md:text-xl "
            }
          >
            Home
          </NavLink>
        </motion.div>



        {/* Project */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-bold md:text-xl"
                : "hover:text-gray-300 font-bold md:text-xl"
            }
          >
            Project
          </NavLink>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-bold md:text-xl"
                : "hover:text-gray-300 font-bold md:text-xl"
            }
          >
            About
          </NavLink>
        </motion.div>

      </div>
    </motion.nav>
  );
};

export default Navbar;