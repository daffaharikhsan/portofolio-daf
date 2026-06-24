// src/components/TypingAnimation.tsx
"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      // Urutan animasi: [teks1, jeda, teks2, jeda, dst...]
      sequence={[
        "Hey, I Turn Ideas Into Experiences",
        2500,
        "Hey, I Design With Purpose",
        2500,
        "Hey, I Develop Digital Products",
        2500,
        "Hey, I Capture Moments Through Photography",
        2500,
        "Hey, I Bridge Technology and Finance",
        2500,
        "Hey, I’m Daffa Harikhsan👋",
        5000,
      ]}
      wrapper="h1" // Elemen pembungkusnya adalah <h1>
      speed={15} // Kecepatan mengetik
      className="text-black dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8" // Gaya dari h1 Anda sebelumnya
    />
  );
};

export default TypingAnimation;
