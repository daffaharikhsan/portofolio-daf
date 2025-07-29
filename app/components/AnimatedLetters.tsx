// src/components/AnimatedLetters.tsx
"use client";

import React, { useState, useEffect } from "react";

type AnimatedLettersProps = {
  text: string;
  className?: string;
};

const AnimatedLetters = ({ text, className }: AnimatedLettersProps) => {
  const [isMotionOK, setIsMotionOK] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );
    setIsMotionOK(mediaQuery.matches);
  }, []);

  if (!isMotionOK) {
    return <h2 className={className}>{text}</h2>;
  }

  return (
    <h2 className={className} data-letter-animation="hover">
      {text.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          style={{ transitionDelay: `${index * 30}ms` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedLetters;
