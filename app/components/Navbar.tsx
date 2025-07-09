// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-black py-4 px-8 md:px-16 lg:px-24">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo atau Nama */}
        <Link href="/" className="flex items-center gap-[30px]">
          <Image src="/assets/Logo.svg" alt="Logo" width={40} height={40} />
          <div className="text-[30px]">
            <span className="font-bold">Daffa </span>
            <span className="font-light">Harikhsan</span>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:font-bold text-black text-[27px]">
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:font-bold text-black text-[27px]"
          >
            Project
          </Link>
          <Link
            href="/about"
            className="hover:font-bold text-black text-[27px]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-semibold border-[0.5px] text-[27px] border-black px-5 py-1"
          >
            Contact
          </Link>
        </div>

        {/* Tombol menu untuk mobile (opsional) */}
        <div className="md:hidden">
          <button>
            {/* Anda bisa menambahkan ikon hamburger di sini */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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
