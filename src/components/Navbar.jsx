import React from "react";
import logo from "../assets/SahinMallikLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center flex-shrink-0"
      >
        <img src={logo} alt="logo" className="mx-2 w-52" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 m-8 text-2xl"
      >
        <a href="https://www.linkedin.com/in/sahin-mallik-822a97202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/sahinmallik">
          {" "}
          <FaGithub />
        </a>
        <a href="https://x.com/SahinMallik95?t=YKOQB6d4VygxAVHK1hT2iw&s=08">
          {" "}
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/latedeveloper_?igsh=MWExY21xZnd2cm5rNg==">
          {" "}
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
