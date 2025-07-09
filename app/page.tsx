// src/app/page.tsx
import TypingAnimation from "./components/TypingAnimation";

export default function HomePage() {
  return (
    // 'main' adalah konten utama halaman ini
    <main className="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
      {/* Kontainer untuk membatasi lebar konten */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Panggil komponennya seperti ini, tanpa children atau props lain */}
        <TypingAnimation />

        <p className="text-gray-600 text-[18px] lg:text-[25px] max-w-[1242px] mx-auto">
          A Designer and Developer passionate about turning ideas into digital
          experiences. I craft intuitive interfaces and build functional
          websites and mobile applications.
        </p>
      </div>
    </main>
  );
}
