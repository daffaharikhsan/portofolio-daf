"use client";

import React, { useState } from "react";
import "./globals.css";
import "./fonts.css";
import { AnimatePresence, motion } from "framer-motion";

// import Preloader from "./components/Preloader"; // <-- 1. [COMMENTED] Matikan import
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

// 2. Tambahan Senior: Deklarasi Interface eksplisit untuk Props RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.JSX.Element {
  // 3. BYPASS: Ubah default state langsung menjadi 'false'
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <CustomCursor />

          {/* 4. [COMMENTED] Matikan eksekusi komponen Preloader di level Root */}
          {/* <AnimatePresence mode="wait">
            {isLoading && (
              <Preloader onAnimationComplete={() => setIsLoading(false)} />
            )}
          </AnimatePresence> */}

          {/* Konten utama langsung terbuka bebas */}
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col min-h-screen"
            >
              <Navbar />
              {children}
              <Footer />
            </motion.div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}