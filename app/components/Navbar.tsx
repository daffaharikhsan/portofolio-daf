// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full bg-white text-black py-3 px-6 sm:px-8 md:px-12 lg:px-16 sticky top-0 z-50 border-b border-gray-200/80">
        <div className="mx-auto flex justify-between items-center">
          {/* Logo atau Nama */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/assets/Logo.svg"
              alt="Logo"
              width={45}
              height={45}
              className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 hover:scale-110"
            />
            <div className="text-lg sm:text-xl md:text-2xl text-black">
              <span className="font-bold">Daffa </span>
              <span className="font-light">Harikhsan</span>
            </div>
          </Link>

          {/* Menu Navigasi dengan Gaya Aktif */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-base lg:text-lg">
            <Link
              href="/"
              // 4. Terapkan gaya kondisional: jika path adalah '/', buat font tebal
              className={`transition-colors ${
                pathname === "/"
                  ? "font-bold"
                  : "font-normal hover:font-semibold"
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
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Open menu"
            >
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-full bg-white z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/Logo.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                  <h2 className="text-xl font-bold">Daffa Harikhsan</h2>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Close menu"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex-grow p-6">
                <ul className="space-y-4">
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={toggleMenu}
                        className="flex justify-between items-center text-2xl text-gray-800 hover:text-black font-medium py-2"
                      >
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
