// src/components/Navbar.tsx
"use client"; // <-- 1. Tambahkan ini untuk menjadikan komponen sebagai Client Component

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <-- 2. Impor hook usePathname

const Navbar = () => {
  const pathname = usePathname(); // <-- 3. Dapatkan path URL saat ini

  return (
    <nav className="w-full bg-white text-black py-4 px-8 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo atau Nama */}
        <Link href="/" className="flex items-center gap-[50px]">
          <Image
            src="/assets/Logo.svg"
            alt="Logo"
            width={70}
            height={70}
            className="transition-transform duration-300 hover:scale-125"
          />
          <div className="text-[40px] text-black">
            <span className="font-bold">Daffa </span>
            <span className="font-light">Harikhsan</span>
          </div>
        </Link>

        {/* Menu Navigasi dengan Gaya Aktif */}
        <div className="hidden md:flex items-center space-x-24 text-[35px]">
          <Link
            href="/"
            // 4. Terapkan gaya kondisional: jika path adalah '/', buat font tebal
            className={`transition-colors ${
              pathname === "/" ? "font-bold" : "font-normal hover:font-semibold"
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`transition-colors ${
              pathname === "/projects"
                ? "font-bold"
                : "font-normal hover:font-semibold"
            }`}
          >
            Project
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === "/about"
                ? "font-bold"
                : "font-normal hover:font-semibold"
            }`}
          >
            About
          </Link>
          <Link
            href="/resume"
            className={`transition-colors ${
              pathname === "/resume"
                ? "font-bold"
                : "font-normal hover:font-semibold"
            }`}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            // Untuk tombol, kita bisa ubah warna border atau background saat aktif
            className={`border-[0.5px] px-5 py-1 transition-colors ${
              pathname === "/contact"
                ? "bg-black text-white font-semibold"
                : "border-black font-normal hover:bg-gray-100"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Tombol menu untuk mobile (opsional) */}
        <div className="md:hidden">
          <button>{/* ... ikon hamburger ... */}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
