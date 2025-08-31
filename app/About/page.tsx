import React from "react";
import "./About.css"; // Pastikan file CSS ini terhubung
import Image from "next/image";

const Aboutpage = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-12 md:my-20 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3">
            About Me
          </h2>
          <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>
          <p className="font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-800 dark:text-gray-300">
            Here's a look into my professional philosophy, my creative process,
            and the skills I use to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 my-16 md:my-20">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500"></div>
            <div className="absolute inset-2 bg-gray-200 dark:bg-gray-800 rounded-full p-1">
              <Image
                src="/assets/Foto Daffa.svg"
                alt="Daffa Harikhsan"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Get to Know Me!
            </h3>
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
              To me, true innovation doesn’t come from having the right answers,
              but from the boldness to ask better questions: "What if this could
              be simpler? More intuitive? More human?" This is where my creative
              process always begins.
            </p>
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
              I channel that curiosity into designing digital experiences that
              challenge convention. My goal isn’t just to build features, but to
              craft intuitive flows that open up new perspectives for the user.
              I treat every project as an exploration to find the most elegant
              solution.
            </p>
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
              I believe the best products emerge from a collaboration that isn’t
              afraid to explore. If you’re looking for a partner to question
              boundaries and build something truly different, let’s start that
              conversation!
            </p>
          </div>
        </div>

        <div className="my-16 md:my-20 py-16 md:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            Experience
          </h2>
          <div className="relative experience-timeline max-w-3xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="experience-item">
              <div className="experience-dot-container">
                <div className="experience-dot"></div>
              </div>
              <div className="experience-content">
                <span className="present-tag">Present</span>
                <h4 className="text-xl font-bold mt-2">Frontend Developer</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Lecturer's Project
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  As a seasoned Frontend Developer, I played a pivotal role in
                  leading the management, migration, and version upgrade of a
                  Learning Management System (LMS) for a prominent Indonesian
                  official institution. Leveraging my expertise in Laravel,
                  Bootstrap, and MySQL, I navigated the technical complexities
                  of the project within the Agile Software Development Life
                  Cycle (SDLC). My commitment to delivering high-quality
                  solutions was evident in the seamless integration of
                  innovative features, optimizing user experience. I excel under
                  tight deadlines, ensuring project timelines are met through
                  effective communication and collaboration in both online and
                  offline meetings. My skill set combines technical proficiency
                  with project management and communication capabilities, making
                  me a valuable asset for any team aiming for excellence in
                  frontend development projects.
                </p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="experience-item">
              <div className="experience-dot-container">
                <div className="experience-dot"></div>
              </div>
              <div className="experience-content">
                <span className="present-tag">Present</span>
                <h4 className="text-xl font-bold mt-2">
                  Freelance Software Developer
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Self Employed
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  As a dedicated Web Developer, I specialize in delivering
                  top-notch web development solutions encompassing both backend
                  and frontend aspects. I am driven by a commitment to
                  excellence, offering affordable web development services
                  without compromising on quality. My goal is to provide
                  cost-effective solutions tailored to meet the specific needs
                  of each project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutpage;
