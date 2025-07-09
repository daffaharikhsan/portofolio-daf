// src/app/page.tsx

import Navbar from "app/components/Navbar";
import Footer from "app/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Ganti ukuran font di sini sesuai desain Anda */}
          <h1 className="text-black text-[48px] lg:text-[100px] font-bold mb-8">
            HEY, I’M DAFFA HARIKHSAN
          </h1>

          {/* Ganti ukuran font di sini sesuai desain Anda */}
          <p className="text-gray-600 text-[18px] lg:text-[25px] max-w-[1242px] mx-auto">
            A Designer and Developer passionate about turning ideas into digital
            experiences. I craft intuitive interfaces and build functional
            websites and mobile applications.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
