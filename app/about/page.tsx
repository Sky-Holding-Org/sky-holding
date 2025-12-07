"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full pt-16 sm:pt-20 lg:pt-20"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section - THE GROUP */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]">
        <Image
          src="/about/about-hero-sec.webp"
          alt="About Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <div className="h-1 w-12 bg-[#000C41] mb-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#000C41] uppercase mb-6 md:mb-8">
              The Group
            </h1>
            <p className="text-[#000C41] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              SKY is a group of companies with more than 600 talented people to
              serve our stakeholders with passion. SKY Holding is divided into 8
              business lines: Sky Finance, Sky Lease, Sky Insurance, Sky
              Business Services, Jupiter, German Auto Service (GAS Mercedes),
              B-AUTO, B-Rental.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section - Mobile with Background Image */}
      <section className="lg:hidden relative w-full min-h-[60vh] pt-24">
        <Image
          src="/about/vision-sec.webp"
          alt="Vision 2030"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 w-full max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000C41] uppercase mb-6">
              Vision 2030
            </h2>
            <p className="text-sm sm:text-base text-[#000C41] mb-6">
              To Be Full-Fledged Financial & Non-Financial Investment Group
            </p>
            <div className="text-sm sm:text-base text-[#000C41]">
              <p className="font-semibold">Group CEO & Board Member</p>
              <p className="text-[#000C41]">Mohamed Belal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Desktop with Image */}
      <section className="hidden lg:block relative bg-gradient-to-b from-gray-50 to-white w-full pt-16 pb-12">
        <div className="container mx-auto px-4 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left Column - Vision Text */}
            <div className="text-[#000C41]">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
                Vision 2030
              </h2>
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                To Be Full-Fledged Financial & Non-Financial Investment Group
              </p>
              <div className="text-base md:text-lg">
                <p className="font-semibold">Group CEO & Board Member</p>
                <p className="text-[#000C41]">Mohamed Belal</p>
              </div>
            </div>

            {/* Right Column - Vision Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-[4/3] shadow-xl">
                <Image
                  src="/about/vision-sec.webp"
                  alt="Vision 2031"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values Section - Desktop */}
      <section className="hidden lg:block bg-white w-full py-16">
        <div className="container mx-auto px-4 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left Column - Mission Text */}
            <div className="text-[#000C41]">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
                Mission
              </h2>
              <h3 className="text-lg md:text-xl font-semibold mb-6">
                To Build The Stakeholders Future Via:
              </h3>
              <ul className="space-y-4 text-base md:text-lg">
                <li>Employees development (Unleash People Potential)</li>
                <li>Partners relationship (Enabling Business Expansion)</li>
                <li>
                  Organzation Capability (Elevate Technological Capability)
                </li>
              </ul>
            </div>

            {/* Right Column - Core Values Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-square">
                <Image
                  src="/about/values.webp"
                  alt="Our Core Values"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section - Mobile Only */}
      <section className="lg:hidden bg-white w-full pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/about/values.webp"
                alt="Our Core Values"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
