// src/components/ClientWrapper.tsx
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CustomCursor from "./CustomCursor";
// 1. [COMMENTED] Matikan import untuk menghindari error 'Unused Import' saat proses Build (npm run build)
// import Preloader from "./Preloader";

// Tambahan Senior: Selalu deklarasikan interface untuk Props
interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps): React.JSX.Element {
  console.log("1. ClientWrapper dirender, state isLoading dibypass menjadi false.");
  
  // 2. BYPASS LOGIC: Ubah nilai awal langsung ke 'false'
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 3. [COMMENTED] Matikan useEffect pengecek sessionStorage
  /*
  useEffect(() => {
    console.log("2. useEffect berjalan (hanya di client, sekali).");
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    console.log("   -> Isi sessionStorage 'hasLoadedBefore':", hasLoaded);

    if (hasLoaded) {
      console.log(
        "   -> 'hasLoadedBefore' ditemukan, mengatur isLoading menjadi false."
      );
      setIsLoading(false);
    } else {
      console.log(
        "   -> 'hasLoadedBefore' TIDAK ditemukan. Preloader akan berjalan."
      );
    }
  }, []);
  */

  console.log("3. Sebelum return, nilai isLoading saat ini:", isLoading);

  return (
    <>
      <CustomCursor />

      {/* 4. [COMMENTED] Matikan eksekusi render JSX Preloader */}
      {/* <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            onAnimationComplete={() => {
              console.log(
                "4. Preloader SELESAI, memanggil onAnimationComplete."
              );
              setIsLoading(false);
              sessionStorage.setItem("hasLoadedBefore", "true");
              console.log(
                "   -> isLoading diatur jadi false, sessionStorage diatur."
              );
            }}
          />
        )}
      </AnimatePresence>
      */}

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}