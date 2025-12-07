"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

const TABS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Business Lines", href: "/business-lines" },
  { name: "Contact", href: "/#footer" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
          <Link href="/" aria-label="Go to homepage" className="inline-block">
            <Image
              src="/logo.svg"
              alt="Sky Holding Logo"
              width={120}
              height={90}
              className="md:w-[90px] md:h-[70px] w-[95px] h-[75px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {TABS.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                onClick={(e) => handleNavClick(e, tab.href)}
                className={cn(
                  "text-[#000C41] transition-colors duration-300 hover:text-sky-700",
                  pathname === tab.href && "font-semibold text-sky-600"
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger Icon (animated) */}
          <motion.button
            className="md:hidden text-gray-700 z-50 rounded-full p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            initial={{ scale: 1 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </header>

      {/* Mobile Sidebar (animated with framer-motion) */}
      {isMobileMenuOpen && (
        <>
          {/* fade overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* full-screen sliding panel */}
          <motion.aside
            className="fixed inset-0 z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45 }}
          >
            <div className="w-full h-full bg-white overflow-hidden">
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-gray-800 rounded-full p-1 focus:outline-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.06, rotate: 10 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <X size={34} />
                </motion.button>
              </div>

              <nav className="flex flex-col items-center justify-center h-[calc(100%-72px)]">
                {TABS.map((tab, idx) => (
                  <div key={tab.name} className="w-full max-w-md">
                    <a
                      href={tab.href}
                      onClick={(e) => handleNavClick(e, tab.href)}
                      className={cn(
                        "block w-full text-center py-6 text-2xl sm:text-3xl text-[#000C41]",
                        pathname === tab.href && "font-semibold"
                      )}
                    >
                      {tab.name}
                    </a>
                    {/* divider */}
                    {idx < TABS.length - 1 && (
                      <div className="mx-8 border-b border-gray-200" />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </>
  );
}
