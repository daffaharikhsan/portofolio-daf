// src/components/Footer.tsx
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import AnimatedLetters from "./AnimatedLetters";
import Image from "next/image"; // <-- Jangan lupa import Image

const Footer = () => {
  return (
    // 1. Jadikan footer sebagai patokan posisi (relative) dan sembunyikan overflow
    <footer className="w-full bg-white text-black py-16 px-4 relative overflow-hidden">
      {/* 2. Tambahkan gambar SVG di lapisan belakang (z-0) */}
      <Image
        src="/assets/corner-left.svg"
        alt="Dekorasi sudut kiri"
        width={300}
        height={300}
        className="absolute bottom-0 left-0 z-0 w-24 h-24 md:w-36 md:h-36 lg:w-72 lg:h-72"
      />
      <Image
        src="/assets/corner-right.svg"
        alt="Dekorasi sudut kanan"
        width={300}
        height={300}
        className="absolute bottom-0 right-0 z-0 w-24 h-24 md:w-36 md:h-36 lg:w-72 lg:h-72"
      />

      {/* 3. Bungkus semua konten dan letakkan di lapisan depan (z-10) */}
      <div className="relative z-10 mx-auto text-center flex flex-col items-center max-w-3xl px-4">
        <AnimatedLetters
          text="Lets Work Together!"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6"
          as="h2"
        />

        <div className="w-20 md:w-32 h-1 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-8"></div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5">
          Contact Info
        </h3>

        <a
          href="mailto:dharikhsan22@gmail.com"
          className="flex items-center gap-2.5 text-base sm:text-lg md:text-xl text-gray-700 hover:text-[#0554F2] transition-colors duration-300 mb-6"
        >
          <FiMail className="w-5 h-5 md:w-6 md:h-6" />
          <span>dharikhsan22@gmail.com</span>
        </a>

        <div className="flex justify-center space-x-5 md:space-x-6">
          <a
            href="https://instagram.com/daffaharikhsan_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0554F2] transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://linkedin.com/in/daffa-harikhsan-26sep04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0554F2] transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://github.com/daffaharikhsan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0554F2] transition-transform duration-300 hover:scale-110"
          >
            <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        <div className="mt-10 md:mt-12 w-full pt-6 border-t border-gray-200/70">
          <p className="text-sm sm:text-base text-gray-500">
            Copyright 2025 ©{" "}
            <a
              href="https://instagram.com/daffaharikhsan_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline hover:text-[#0554F2] transition-colors"
            >
              Daffa Harikhsan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
