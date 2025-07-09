// src/components/CustomCursor.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CustomCursor = () => {
  // State untuk menyimpan posisi mouse
  const [position, setPosition] = useState({ x: -100, y: -100 });
  // State untuk melacak apakah mouse sedang di atas elemen interaktif
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Fungsi untuk memperbarui posisi
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

    // Fungsi cleanup untuk menghapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Array dependensi kosong, jadi ini hanya berjalan sekali

  return (
    <div
      className={`custom-cursor ${isHovering ? "grow" : ""}`}
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
