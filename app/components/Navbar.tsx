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
        <Link href="/" className="flex items-center gap-4 md:gap-8">
          <Image
            src="/assets/Logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 hover:scale-110"
          />
          <div className="text-2xl md:text-3xl lg:text-4xl text-black">
            <span className="font-bold">Daffa </span>
            <span className="font-light">Harikhsan</span>
          </div>
        </Link>

        {/* Menu Navigasi dengan Gaya Aktif */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-xl lg:text-2xl">
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

        {/* Tombol menu untuk mobile */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
