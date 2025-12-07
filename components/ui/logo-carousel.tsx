"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import type { SVGProps } from "react";
import Image from "next/image";

interface Logo {
  id: number;
  name: string;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

// Main component
export function LogoCarousel({ columns = 2 }: { columns?: number }) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  const CYCLE_DURATION = 2000; // 2 seconds per logo

  // Define logos using public SVGs
  const logos = useMemo<Logo[]>(
    () => [
      { id: 1, name: "logo-1", src: "/logo/logo-1.webp" },
      { id: 2, name: "logo-2", src: "/logo/logo-2.webp" },
      { id: 3, name: "logo-3", src: "/logo/logo-3.webp" },
      { id: 4, name: "logo-4", src: "/logo/logo-4.webp" },
      { id: 5, name: "logo-5", src: "/logo/logo-5.webp" },
      { id: 6, name: "logo-6", src: "/logo/logo-6.webp" },
      { id: 7, name: "logo-7", src: "/logo/logo-7.webp" },
      { id: 8, name: "logo-8", src: "/logo/logo-8.webp" },
      { id: 9, name: "logo-9", src: "/logo/logo-9.webp" },
      { id: 10, name: "logo-10", src: "/logo/logo-10.webp" },
      { id: 11, name: "logo-11", src: "/logo/logo-11.webp" },
      { id: 12, name: "logo-12", src: "/logo/logo-12.webp" },
      { id: 13, name: "logo-13", src: "/logo/logo-13.webp" },
      { id: 14, name: "logo-14", src: "/logo/logo-14.webp" },
      { id: 15, name: "logo-15", src: "/logo/logo-15.webp" },
    ],
    []
  );

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      // Ensure equal length columns
      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [columns]
  );

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 py-8">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}

// Column component
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-14 w-32 overflow-hidden md:h-40 md:w-56"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={currentLogo.src}
            alt={currentLogo.name}
            width={150}
            height={40}
            className="h-auto w-auto max-h-[90%] max-w-[85%] object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
