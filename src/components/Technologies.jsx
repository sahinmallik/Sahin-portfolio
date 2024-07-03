import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiBlockchaindotcom } from "react-icons/si";
import { animate, motion, transform } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <AiOutlineHtml5 className="text-orange-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <TbBrandCss3 className="text-blue-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <AiOutlineJavaScript className="text-yellow-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaNode className="text-green-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMongodb className="text-green-600 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiBlockchaindotcom className="text-blue-600 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
