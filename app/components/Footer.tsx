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
        width={525}
        height={525}
        className="absolute bottom-0 left-0 z-0 w-32 h-32 md:w-48 md:h-48 lg:w-[525px] lg:h-[525px]"
      />
      <Image
        src="/assets/corner-right.svg"
        alt="Dekorasi sudut kanan"
        width={525}
        height={525}
        className="absolute bottom-0 right-0 z-0 w-32 h-32 md:w-48 md:h-48 lg:w-[525px] lg:h-[525px]"
      />

      {/* 3. Bungkus semua konten dan letakkan di lapisan depan (z-10) */}
      <div className="relative z-10 mx-auto text-center flex flex-col items-center">
        <AnimatedLetters
          text="Lets Work Together!"
          className="text-4xl md:text-7xl lg:text-8xl font-bold mb-10"
          as="h2"
        />

        <div className="w-32 h-2 md:w-[160px] md:h-[7px] bg-[#5086F2] rounded-full mx-auto mb-12"></div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          Contact Info
        </h3>

        <a
          href="mailto:dharikhsan22@gmail.com"
          className="flex items-center gap-4 text-xl md:text-2xl lg:text-3xl text-gray-700 hover:text-[#0554F2] transition-colors duration-300 mb-8"
        >
          <FiMail className="w-8 h-8 md:w-9 md:h-9" />
          <span>dharikhsan22@gmail.com</span>
        </a>

        <div className="flex justify-center space-x-8 md:space-x-10">
          <a
            href="https://instagram.com/daffaharikhsan_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0554F2] transition-transform duration-300 hover:scale-125"
          >
            <FaInstagram className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a
            href="https://linkedin.com/in/daffa-harikhsan-26sep04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0554F2] transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a
            href="https://github.com/daffaharikhsan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0554F2] transition-transform duration-300 hover:scale-125"
          >
            <FaGithub className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>

        <div className="mt-16 w-full pt-8">
          <p className="text-base md:text-lg text-gray-500">
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
