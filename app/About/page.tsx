import React from "react";
import "./About.css"; // Pastikan file CSS ini terhubung
import Image from "next/image";
import Link from "next/link";

const Aboutpage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <main>
        <div className="my-12 md:my-20 pt-20 md:pt-32 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-black dark:text-white">
            About Me
          </h2>
          <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>
          <p className="text-black dark:text-gray-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Here's a look into my professional philosophy, my creative process,
            and the skills I use to bring ideas to life.
          </p>
        </div>
        ;
      </main>
    </div>
  );
};

export default Aboutpage;
