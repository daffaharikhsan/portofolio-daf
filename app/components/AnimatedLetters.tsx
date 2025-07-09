// src/components/AnimatedLetters.tsx
"use client";

import React, { useState, useEffect } from "react";

type AnimatedLettersProps = {
  text: string;
  // Gunakan tipe React.ElementType agar lebih fleksibel (bisa h1, h2, p, div, dll)
  as?: React.ElementType;
  className?: string;
};

const AnimatedLetters = ({
  text,
  as: Tag = "h2",
  className,
}: AnimatedLettersProps) => {
  const [isMotionOK, setIsMotionOK] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );
    setIsMotionOK(mediaQuery.matches);
  }, []);

  // Jika animasi tidak diizinkan, render tag dinamis tanpa animasi
  if (!isMotionOK) {
    return <Tag className={className}>{text}</Tag>;
  }

  // Jika animasi diizinkan, render dengan atribut dan span
  return (
    <Tag className={className} letter-animation="hover">
      {text.split("").map((letter, index) => (
        <span key={`${letter}-${index}`}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedLetters;
