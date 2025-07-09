// src/components/TypingAnimation.tsx
"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      // Urutan animasi: [teks1, jeda, teks2, jeda, dst...]
      sequence={[
        "Hey, I’m a Designer",
        2500, // Jeda 1.5 detik
        "Hey, I’m a Developer",
        2500,
        "Hey, I’m Daffa Harikhsan👋",
        5000,
      ]}
      wrapper="h1" // Elemen pembungkusnya adalah <h1>
      speed={10} // Kecepatan mengetik
      className="text-black text-[48px] lg:text-[100px] font-bold mb-8" // Gaya dari h1 Anda sebelumnya
    />
  );
};

export default TypingAnimation;
