// src/components/ClientWrapper.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("1. ClientWrapper dirender, state isLoading dibuat.");
  const [isLoading, setIsLoading] = useState(true);

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

  console.log("3. Sebelum return, nilai isLoading saat ini:", isLoading);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
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
