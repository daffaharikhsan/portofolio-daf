// src/components/Preloader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type PreloaderProps = {
  onAnimationComplete: () => void;
};

const Preloader = ({ onAnimationComplete }: PreloaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 99) {
          clearInterval(interval);
          setTimeout(onAnimationComplete, 1000);
          return 99;
        }
        return prevCount + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-white z-[9999]"
      exit={{ backgroundColor: "#000000", transition: { duration: 0.5 } }}
    >
      <motion.p
        className="text-black text-[15vw] md:text-[20vw] font-bold"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        key={count}
      >
        {count}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
