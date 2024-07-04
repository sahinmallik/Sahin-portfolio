import React from "react";
import { HERO_CONTENT } from "../constant/index";
import logo from "../assets/SahinMallikLogo.jpeg";
import { motion } from "framer-motion";
const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  });

  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sahin Mallik
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              type="button"
              class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
              href="https://drive.google.com/file/d/1jRXUhIyMxVF7Mac2biUWIG5U_nbEbjlI/view?usp=share_link"
            >
              Get My Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              src={logo}
              alt="Profile Picture"
              className="w-3/4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
