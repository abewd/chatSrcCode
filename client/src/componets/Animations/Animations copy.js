import React from "react";
import { motion } from "framer-motion";
import typinggif from "../../assests/typing.gif";
const Animations = () => {
  return (
    <motion.div>
      <motion.button
        animate={{
          // rotate: [5, 5, 5, -5, -5],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={typinggif}
          alt="image"
          className="cursor-pointer rounded-md"
        />
        <audio autoPlay loop></audio>
      </motion.button>
    </motion.div>
  );
};

export default Animations;
