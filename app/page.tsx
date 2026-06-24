"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import TypingAnimation from "./components/TypingAnimation";
import InteractiveImage from "./components/InteractiveImage"; // Ganti dengan komponen gambar baru

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
    <main className="flex-grow bg-white dark:bg-black">
      <div ref={scrollRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">
          <motion.div style={{ opacity: heroOpacity }}>
            <div className="pb-60">
              <TypingAnimation />
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
                A multidisciplinary creative with a passion for design, photography, software development, and finance.
                I combine creativity, technology, and analytical thinking to build impactful digital experiences and meaningful solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 bg-white dark:bg-black px-4 sm:px-6 lg:px-8 -mt-[100vh]">
        <motion.div style={{ opacity: contentOpacity, y: contentY }}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="my-12 md:my-20 pt-20 md:pt-32 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-black dark:text-white">
                About Me
              </h2>
              <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>
              <p className="text-black dark:text-gray-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Combining creativity, technology, and analytical thinking to transform ideas into impactful digital solutions.
              </p>
            </div>

            <div className="my-12 md:my-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 lg:gap-24">
              <div className="w-full md:w-1/2 aspect-[1566/2606]">
                {/* --- PERUBAHAN DI SINI --- */}
                <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                  {/* CAHAYA AMBIENT: Melembutkan bayangan secara keseluruhan */}
                  <ambientLight intensity={1.5} />

                  {/* CAHAYA UTAMA: Dari arah kanan atas */}
                  <directionalLight position={[10, 10, 10]} intensity={1} />

                  {/* CAHAYA PENGISI: Dari arah kiri bawah untuk menghilangkan bayangan gelap */}
                  <directionalLight position={[-10, -10, -5]} intensity={0.6} />

                  <Suspense fallback={null}>
                    <InteractiveImage
                      imageUrl="/assets/akhir.png"
                      size={[8, 13.31]} // Rasio aspek yang sudah disesuaikan
                    />
                  </Suspense>
                </Canvas>
                {/* --- AKHIR PERUBAHAN --- */}
              </div>

              <div className="w-full md:w-1/2 text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-black dark:text-white">
                  Get to Know Me!
                </h2>
                <div className="space-y-5 md:space-y-6 text-base sm:text-lg font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Hello!{" "}
                    <span className="font-bold">I'm Daffa Harikhsan</span>,
                    a Computer Science student, designer, developer, photographer, and finance enthusiast.{" "}
                    
                  </p>
                  <p>
                    I enjoy bringing ideas to life through a combination of {" "}
                    <span className="font-bold">creativity and technology</span>. 
                    My experience in {" "}
                    <span className="font-bold">design, photography, and software development</span> 
                    {" "}allows me to approach problems from different perspectives and create solutions that are both {" "}
                    <span className="font-bold">functional </span> 
                    and {" "}
                    <span className="font-bold">visually engaging</span>.{" "}
                  </p>
                  <p>
                    Beyond technology, I am also interested in {" "}
                    <span className="font-bold">finance and business</span>
                    , which help me understand how innovation can {" "}
                    <span className="font-bold">create real-world value</span>
                    . I believe that {" "}
                    <span className="font-bold">continuous learning, curiosity, and creativity</span> {" "}
                    are the foundation of meaningful work.
                  </p>
                  <p>Whether I'm designing an interface, building an application, capturing a story through a camera lens, 
                    or exploring new opportunities, I'm always excited to learn, create, and make an impact.
                  </p>
                </div>
                <div className="mt-12 md:mt-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-black dark:text-white">
                    My Skills
                  </h2>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {skills.map((skill) => (
                      <div
                        key={skill}
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
