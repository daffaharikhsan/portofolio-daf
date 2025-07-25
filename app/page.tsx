"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypingAnimation from "./components/TypingAnimation";
import Image from "next/image";

export default function HomePage() {
  const skills = [
    "UI/UX",
    "Design",
    "Prototyping",
    "Figma",
    "Graphic Designer",
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "REST API",
    "Flutter",
    "Videography",
    "Photography",
    "Premiere Pro",
    "Lightroom",
    "Git",
    "Github",
    "Responsive Design",
    "Problem Solving",
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], ["30px", "0px"]);

  return (
    <main className="flex-grow bg-white dark:bg-gray-900">
      {/* Bagian Hero (tidak diubah) */}
      <div ref={scrollRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">
          <motion.div style={{ opacity: heroOpacity }}>
            <div className="pb-60">
              <TypingAnimation />
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
                A Designer and Developer passionate about turning ideas into
                digital experiences. I craft intuitive interfaces and build
                functional websites and mobile applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bagian Konten Utama */}
      <div className="relative z-10 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 -mt-[100vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="my-12 md:my-20 pt-20 md:pt-32 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-black dark:text-white">
                About Me
              </h2>
              <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>
              <p className="text-black dark:text-gray-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Here's a look into my professional philosophy, my creative
                process, and the skills I use to bring ideas to life.
              </p>
            </div>

            <div className="my-12 md:my-20 flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-24">
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/poto.svg"
                  alt="Daffa Harikhsan"
                  width={800}
                  height={800}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>

              {/* === PERUBAHAN FOKUS DI SINI === */}
              <div className="w-full md:w-1/2 text-left">
                {/* DIUBAH: Ukuran font diperbesar */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-black dark:text-white">
                  Get to Know Me!
                </h2>

                {/* DIUBAH: Ukuran font paragraf diperbesar */}
                <div className="space-y-5 md:space-y-6 text-base sm:text-lg font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    To me, true innovation doesn't come from{" "}
                    <span className="font-bold">having the right answers</span>,
                    but from the boldness to ask better questions: "What if this
                    could be simpler? More intuitive? More human?" This is where
                    my{" "}
                    <span className="font-bold">
                      creative process always begins
                    </span>
                    .
                  </p>
                  <p>
                    I channel that curiosity into{" "}
                    <span className="font-bold">
                      designing digital experiences{" "}
                    </span>
                    that challenge convention. My goal{" "}
                    <span className="font-bold">
                      {" "}
                      isn't just to build features,{" "}
                    </span>
                    but to{" "}
                    <span className="font-bold">
                      craft intuitive flows
                    </span>{" "}
                    that open up new perspectives for the user. I treat every
                    project as an <span className="font-bold">exploration</span>{" "}
                    to find the most{" "}
                    <span className="font-bold">elegantsolution.</span>
                  </p>
                  <p>
                    I believe the best products emerge from a collaboration that
                    isn't afraid to explore. If you're looking for a partner to
                    question boundaries and build something truly different,{" "}
                    <span className="font-bold">
                      let's start that conversation!
                    </span>
                  </p>
                </div>

                <div className="mt-12 md:mt-16">
                  {/* DIUBAH: Ukuran font diperbesar & margin bottom ditambah */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-black dark:text-white">
                    My Skills
                  </h2>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        // DIUBAH: Ukuran font skill tag diperbesar
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base transition-transform duration-300 hover:scale-110"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
