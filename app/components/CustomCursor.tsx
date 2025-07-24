// src/components/CustomCursor.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Cek apakah perangkat mendukung touch event
    const checkForTouchDevice = () => {
      // Cek sederhana bisa dengan 'ontouchstart' in window
      // atau media query yang lebih modern
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(hasTouch);
    };

    checkForTouchDevice();
    // Tambahkan listener jika orientasi atau ukuran layar berubah
    window.addEventListener("resize", checkForTouchDevice);

    return () => {
      window.removeEventListener("resize", checkForTouchDevice);
    };
  }, []);

  useEffect(() => {
    // Jika ini adalah perangkat sentuh, jangan jalankan sisa logikanya
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Fungsi untuk menangani hover
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Tambahkan event listener untuk gerakan mouse
    window.addEventListener("mousemove", handleMouseMove);

    // Cari semua elemen interaktif dan tambahkan event listener
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .interactive'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isTouchDevice]); // Tambahkan isTouchDevice sebagai dependensi

  // Jika ini adalah perangkat sentuh, jangan render kursor sama sekali
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`custom-cursor hidden md:block ${isHovering ? "grow" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        // Offset agar kursor berada di tengah pointer mouse
        transform: `translate(-50%, -50%) ${
          isHovering ? "scale(2.5)" : "scale(1)"
        }`,
      }}
    >
      {/* Ganti dengan komponen SVG Anda */}
      {/* Contoh jika menggunakan file SVG */}
      <Image
        src="/assets/cursor.svg" // Ganti dengan path SVG cursor Anda
        alt="Custom Cursor"
        width={40} // Sesuaikan ukuran default
        height={40}
      />
    </div>
  );
};

export default CustomCursor;
