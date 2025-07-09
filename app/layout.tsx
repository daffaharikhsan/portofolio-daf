// src/app/layout.tsx
"use client";

import { useState } from "react";
import "./globals.css";
import "./fonts.css";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Karena ini Client Component, kita tidak bisa ekspor metadata di sini.
// Anda bisa menaruh metadata langsung di tag <head> jika perlu.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">
        <CustomCursor />

        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader onAnimationComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Konten utama hanya akan muncul setelah loading selesai */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen" // <-- Layout flexbox utama
          >
            <Navbar />

            {/* children adalah konten dari page.tsx */}
            {children}

            <Footer />
          </motion.div>
        )}
      </body>
    </html>
  );
}
