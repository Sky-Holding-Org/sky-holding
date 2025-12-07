"use client";

import Milestone from "@/components/Milestone";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* hero section */}
      <section className="w-screen h-1/2 md:h-screen lg:h-screen xl:h-screen bg-[url(/hero.webp)] bg-local bg-cover bg-center py-36 sm:py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 pb-40 ">
          <p className="font-medium uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-[10px] xs:text-xs sm:text-sm md:text-base text-center">
            ambition is the first step towards
          </p>
          <span className="font-[1000] text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-[#000C41] text-center leading-tight">
            sucess
          </span>
        </div>
      </section>
      {/* About Us Section - image background with text overlay */}
      <section className="w-screen h-screen relative">
        <Image
          src="/about-sec.webp"
          alt="About us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-[98%] sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl 2xl:max-w-5xl">
            <div className="h-1 w-12 sm:w-12 md:w-14 bg-[#000C41] mb-5 sm:mb-4 md:mb-5" />
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000C41] uppercase mb-6 sm:mb-6 md:mb-8 lg:mb-12">
              About Us
            </h2>
            <p className="text-[#000C41] mb-8 sm:mb-8 md:mb-10 lg:mb-12 tracking-wide font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-7 sm:leading-7 md:leading-8 lg:leading-9 text-justify">
              SKY Group philosophy is to differentiate ourselves from the
              competition by providing distinguished features within all of our
              services/products that are provided to our customers. We are using
              a growth diversified strategy to take advantage of economies of
              scale by leveraging on our companies to provide fit to purpose
              solutions to our customers/consumers.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 sm:px-5 md:px-6 py-3 sm:py-2.5 md:py-3 bg-[#0b5ed7] text-white font-medium text-base sm:text-base hover:bg-white hover:text-[#000C41] transition border-2 border-transparent hover:border-[#0b5ed7]"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      {/* success partners */}
      <div className="w-full py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 px-4">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize text-[#000C41] text-center">
          success partners
        </h4>
        <LogoCarousel columns={3} />
      </div>
      {/* milestone section - responsive heights */}
      <section className="w-auto h-auto relative border-t-2 border-b-black ">
        <Milestone />
      </section>
    </motion.section>
  );
}
