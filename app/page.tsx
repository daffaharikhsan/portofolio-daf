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
    <main className="flex-grow bg-white">
      {/* Bagian Hero (tidak diubah) */}
      <div ref={scrollRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">
          <motion.div style={{ opacity: heroOpacity }}>
            <div className="pb-60">
              <TypingAnimation />
              <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto px-4">
                A Designer and Developer passionate about turning ideas into
                digital experiences. I craft intuitive interfaces and build
                functional websites and mobile applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bagian Konten Utama */}
      <div className="relative z-10 bg-white px-4 sm:px-6 lg:px-8 -mt-[100vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="my-16 md:my-24 pt-24 md:pt-40 text-center">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                About Me
              </h2>
              <div className="w-28 md:w-48 h-2.5 bg-[#5086F2] rounded-full mx-auto mb-8 md:mb-14"></div>
              <p className="text-black font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-5xl mx-auto">
                Here's a look into my professional philosophy, my creative
                process, and the skills I use to bring ideas to life.
              </p>
            </div>

            <div className="my-16 md:my-24 flex flex-col md:flex-row items-start gap-12 md:gap-24 lg:gap-40">
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/poto.svg"
                  alt="Daffa Harikhsan"
                  width={1000}
                  height={1000}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>

              {/* === PERUBAHAN FOKUS DI SINI === */}
              <div className="w-full md:w-1/2 text-left">
                {/* DIUBAH: Ukuran font diperbesar */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 md:mb-12">
                  Get to Know Me!
                </h2>

                {/* DIUBAH: Ukuran font paragraf diperbesar */}
                <div className="space-y-8 md:space-y-10 text-lg sm:text-xl md:text-2xl font-light text-gray-700">
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

                <div className="mt-16 md:mt-28">
                  {/* DIUBAH: Ukuran font diperbesar & margin bottom ditambah */}
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 md:mb-12">
                    My Skills
                  </h2>
                  <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        // DIUBAH: Ukuran font skill tag diperbesar
                        className="bg-gray-200 text-gray-800 px-5 py-3 sm:px-6 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl transition-transform duration-300 hover:scale-110"
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
