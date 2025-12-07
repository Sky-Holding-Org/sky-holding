"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      type: "profile",
      image: "/team/ belal-khalil.webp",
      name: "Belal Khalil",
      title: "The Chairman",
      roles: [
        "CEO of German Auto Service [GAS Mercedes]",
        "Chairman of SKY Group",
        "Chairman of  B-AUTO",
        "Board Member of Jupiter",
        "Board Member of SKY Finance & Lease",
        "Board Member of B-RENTAL",
        "Board Member of SKY Business Services",
        "Board Member of SKY Insurance",
      ],
    },
    {
      type: "bio",
      text: "Entrepreneur and commercial pioneer Belal KHALIL was born on 1st of December 1950, in Cairo, the largest city in Egypt and he studied Mathematics in Faculty of Science, Assiut University, Egypt. He had an early passion about the national and international trade as well as he obtained & received postgraduate studies and several well accredited international certifications. He founded his own business, in 1982 and became the youngest business leader in real-estate, construction sector and then in the automotive & after-sales services and previously, he spent more than 10 years taught Mathematics in Faculty of Science as an Assistant Professor. More than 15 years later, he established an Egyptian Shareholding company, under the Egyptian law as one of the biggest success stories its B-Auto. As a SKY Group Chairman, Dr. Belal KHALIL is responsible for leading SKY board of directors to develop consistent growth and profitable business and lead development of strategic plans using understanding of complex strategic issues in order to achieve business vision, strategies and shareholders 'objectives.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    // Restart auto-slide
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const boardMembersNoImage = [
    {
      name: "Tamer Abdelshafie",
      role: "Board Member",
      subtitle: "Independent Director",
    },
    {
      name: "Hesham Hamdy",
      role: "Board Member",
      subtitle: "Independent Director",
    },
    {
      name: "Ibrahim Hussain",
      role: "Board Member",
      subtitle: "Independent Director",
    },
    {
      name: "Adel Talaat",
      role: "Board Member",
      subtitle: "Non-Executive Director",
    },
    {
      name: "Nehal Belal",
      role: "Board Member",
      subtitle: "Non-Executive Director",
    },
    {
      name: "Mohab Belal",
      role: "Board Member",
      subtitle: "Non-Executive Director",
    },
  ];

  const boardMembersWithImage = [
    {
      name: "Mohamed Belal",
      role: "Group CEO",
      image: "/team/ mohamed-belal.webp",
      featured: true,
    },
    {
      name: "Sharif Eissa",
      role: "Group CMO",
      subtitle: "& Jupiter MD",
      image: "/team/ sharif-eissa.webp",
    },
    {
      name: "Said Elnady",
      role: "SKY Lease",
      subtitle: "Managing Director",
      image: "/team/ said-elnady.webp",
    },
    {
      name: "Ahmed Ali",
      role: "B Rental",
      subtitle: "Managing Director",
      image: "/team/ahmed-ali.webp",
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-12 lg:pt-14">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-8 md:py-16 px-4 md:px-6 mb-6 md:mb-0"
      >
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Team.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-sm md:text-base"
          >
            Meet our exceptional team driving innovation and excellence.
          </motion.p>
        </div>
      </motion.div>

      {/* Hero Carousel */}
      <section className="bg-gray-100 md:bg-transparent overflow-hidden">
        <div
          className="relative h-[600px] md:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url(/team/bg.webp)" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70 md:block hidden"></div>
          <div className="relative h-full flex items-center justify-center px-2 md:px-6">
            {/* Desktop arrows only */}
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1
                )
              }
              className="absolute left-8 text-white text-4xl z-10 hidden md:block"
            >
              ←
            </button>

            <div className="max-w-4xl w-full mx-2 md:mx-0">
              {slides[currentSlide].type === "profile" ? (
                <div className="bg-white p-3 md:p-12">
                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    <div className="text-center mb-4">
                      <div className="relative w-32 h-40 mx-auto mb-4">
                        <Image
                          src={slides[currentSlide].image || ""}
                          alt={slides[currentSlide].name || ""}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {slides[currentSlide].name}
                      </h2>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">
                        {slides[currentSlide].title}
                      </h3>
                      <div className="space-y-2 text-xs text-gray-600 max-h-48 overflow-y-auto">
                        {slides[currentSlide].roles?.map((role, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {role}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center gap-8">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {slides[currentSlide].name}
                      </h2>
                      <h3 className="text-xl font-semibold text-gray-700 mb-6">
                        {slides[currentSlide].title}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        {slides[currentSlide].roles?.map((role, idx) => (
                          <p key={idx}>{role}</p>
                        ))}
                      </div>
                    </div>
                    <div className="relative w-64 h-80">
                      <Image
                        src={slides[currentSlide].image || ""}
                        alt={slides[currentSlide].name || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-3 md:p-12">
                  {/* Mobile Layout for bio */}
                  <div className="block md:hidden">
                    <div className="max-h-96 overflow-y-auto">
                      <p className="text-gray-700 leading-relaxed text-justify text-sm px-1">
                        {slides[currentSlide].text}
                      </p>
                    </div>
                  </div>
                  {/* Desktop Layout for bio */}
                  <div className="hidden md:block">
                    <p className="text-gray-700 leading-relaxed text-justify text-base">
                      {slides[currentSlide].text}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop arrows only */}
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-8 text-white text-4xl z-10 hidden md:block"
            >
              →
            </button>

            {/* Pagination dots - Desktop only */}
            <div className="absolute bottom-8 hidden md:flex gap-2 left-1/2 transform -translate-x-1/2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setCurrentSlide((prev) =>
                        prev === slides.length - 1 ? 0 : prev + 1
                      );
                    }, 5000);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentSlide ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <div className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative h-64 md:h-96">
            <Image
              src="/team/ceo-message.webp"
              alt="CEO Message"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-6 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Group CEO&apos;s Message
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify text-sm md:text-base">
              We strive to contribute to stakeholder prosperity through our
              automotive, non-financial, and services businesses. Using our
              expertise and technology, we deliver tailored solutions that meet
              individual customer needs across Egypt.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
              Our mission: ensuring customer objectives are achieved with the
              highest capability and assurance. We deliver on time, on schedule,
              with the expertise to elevate service delivery.
              <br />
              <strong>
                We Are One Group, One Team &amp; One Objective Toward Success!
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Board Members */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-10 md:py-20 px-4 md:px-6 bg-cover bg-center"
        style={{ backgroundImage: "url(/team/bg.webp)" }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* Members without images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {boardMembersNoImage.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 text-center shadow-lg"
              >
                <h3 className="font-bold text-gray-900 text-sm md:text-base">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {member.role}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {member.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured CEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center m-8 md:m-12"
          >
            <div className="bg-white text-center w-64 md:w-80 shadow-xl">
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src={boardMembersWithImage[0].image}
                  alt={boardMembersWithImage[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                  {boardMembersWithImage[0].name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-semibold">
                  {boardMembersWithImage[0].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Members with images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 m-8 md:m-20 lg:m-24"
          >
            {boardMembersWithImage.slice(1).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-center shadow-lg"
              >
                <div className="relative h-52 md:h-96 lg:h-96 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    {member.role}
                  </p>
                  {member.subtitle && (
                    <p className="text-xs md:text-sm text-gray-600">
                      {member.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
