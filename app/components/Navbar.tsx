// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

// 1. PENGETATAN TIPE DATA (TypeScript Interface)
interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 2. ARRAY MOBILE MENU (Comment objeknya untuk menyembunyikan dari laci Mobile)
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    // { href: "/project", label: "Project" },
    //{ href: "/certificates", label: "Certificates" },
    // { href: "/About", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full bg-white dark:bg-black text-black dark:text-white py-3 px-6 sm:px-8 md:px-12 lg:px-16 sticky top-0 z-50 border-b border-gray-200/80 dark:border-gray-700/80">
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
            <div className="text-lg sm:text-xl md:text-2xl text-black dark:text-white transition-transform duration-300 hover:scale-110">
              <span className="font-bold">Daffa </span>
              <span className="font-light">Harikhsan</span>
            </div>
          </Link>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-base lg:text-lg">
            <Link
              href="/"
              className={`transition-colors hover-underline ${
                pathname === "/"
                  ? "font-bold"
                  : "font-normal hover:font-semibold transition-transform duration-300 hover:scale-110"
              }`}
            >
              Home
            </Link>

            {/*
            
            <Link
            href="/project"
              className={`transition-colors hover-underline ${
                pathname === "/project"
                  ? "font-bold"
                  : "font-normal hover:font-semibold transition-transform duration-300 hover:scale-110"
              }`}
            >
              Project
            </Link>
            <Link
              href="/certificates"
              className={`transition-colors hover-underline ${
                pathname === "/certificates"
                  ? "font-bold"
                  : "font-normal hover:font-semibold transition-transform duration-300 hover:scale-110"
              }`}
            >
              Certificates
            </Link>
            <Link
              href="/About"
              className={`transition-colors hover-underline ${
                pathname === "/About"
                  ? "font-bold"
                  : "font-normal hover:font-semibold transition-transform duration-300 hover:scale-110"
              }`}
            >
              About
            </Link>
            */}

            <Link
              href="https://drive.google.com/drive/folders/1244VObg6Gu3XBwyXmmE2GOEF_UDYlu5c?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover-underline ${
                pathname === "/resume"
                  ? "font-bold"
                  : "font-normal hover:font-semibold transition-transform duration-300 hover:scale-110"
              }`}
            >
              Resume
            </Link>
            <a
              href="mailto:dharikhsan22@gmail.com"
              className="border-[0.5px] px-5 py-1 transition-colors border-black dark:border-white font-normal hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact
            </a>
            <ThemeSwitcher />
          </div>

          {/* Tombol menu untuk mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
            className="fixed top-0 right-0 w-full h-full bg-white dark:bg-black z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/Logo.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                  <h2 className="text-xl font-bold text-black dark:text-white">
                    Daffa Harikhsan
                  </h2>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-black focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6 text-black dark:text-white"
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
                  {/* 4. Karena navLinks di atas di-comment, map di bawah otomatis menyesuaikan */}
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      {label === "Contact" ? (
                        <a
                          href="mailto:dharikhsan22@gmail.com"
                          onClick={toggleMenu}
                          className="flex justify-between items-center text-2xl text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white font-medium py-2"
                        >
                          <span>{label}</span>
                        </a>
                      ) : (
                        <Link
                          href="https://drive.google.com/drive/folders/1244VObg6Gu3XBwyXmmE2GOEF_UDYlu5c?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
                          onClick={toggleMenu}
                          className="flex justify-between items-center text-2xl text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white font-medium py-2"
                        >
                          <span>{label}</span>
                        </Link>
                      )}
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