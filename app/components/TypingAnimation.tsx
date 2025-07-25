// src/components/TypingAnimation.tsx
"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      // Urutan animasi: [teks1, jeda, teks2, jeda, dst...]
      sequence={[
        "Hey, I’m a Designer",
        2500, // Jeda 2.5 detik
        "Hey, I’m a Developer",
        2500,
        "Hey, I’m Daffa Harikhsan👋",
        5000,
      ]}
      wrapper="h1" // Elemen pembungkusnya adalah <h1>
      speed={10} // Kecepatan mengetik
      className="text-black dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8" // Gaya dari h1 Anda sebelumnya
    />
  );
};

export default TypingAnimation;
