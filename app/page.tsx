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
              <p className="text-gray-600 text-[25px] lg:text-[45px] max-w-[2000px] mx-auto px-4">
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
          <div className="w-full max-w-[1920px] mx-auto">
            <div className="my-20 pt-40 text-center">
              <h2 className="text-[130px] font-bold mb-2">About Me</h2>
              <div className="w-[160px] h-[7px] bg-[#5086F2] rounded-full mx-auto mb-12"></div>
              <p className="text-black font-light text-[40px] leading-[1.3] max-w-auto mx-auto">
                Here's a look into my professional philosophy, my creative
                process, and the skills I use to bring ideas to life.
              </p>
            </div>

            <div className="my-20 flex flex-col md:flex-row items-start gap-40">
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/poto.svg"
                  alt="Daffa Harikhsan"
                  width={1920}
                  height={1920}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>

              {/* === PERUBAHAN FOKUS DI SINI === */}
              <div className="w-full md:w-1/2 text-left">
                {/* DIUBAH: Ukuran font diperbesar */}
                <h2 className="text-8xl font-bold mb-10">Get to Know Me!</h2>

                {/* DIUBAH: Ukuran font paragraf diperbesar */}
                <div className="space-y-10 text-4xl font-light text-gray-700">
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

                <div className="mt-24">
                  {/* DIUBAH: Ukuran font diperbesar & margin bottom ditambah */}
                  <h2 className="text-8xl font-bold mb-10">My Skills</h2>
                  <div className="flex flex-wrap gap-5">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        // DIUBAH: Ukuran font skill tag diperbesar
                        className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-2xl"
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
