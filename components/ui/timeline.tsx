"use client";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  logo: string;
  content: string;
  link: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full bg-white font-sans">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-10 py-8 md:py-12 border-b border-neutral-200 last:border-b-0"
          >
            {/* Mobile: Logo and Name side by side */}
            <div className="flex md:hidden items-center gap-4 w-full">
              <div className="flex-shrink-0 w-20 h-20 relative">
                <Image
                  src={item.logo}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#001f54] underline hover:text-blue-600 transition-colors"
              >
                {item.title}
              </a>
            </div>

            {/* Desktop: Logo */}
            <div className="hidden md:block flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 relative">
              <Image
                src={item.logo}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full">
              {/* Desktop: Name */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-2xl lg:text-3xl font-bold text-[#001f54] underline hover:text-blue-600 transition-colors mb-4"
              >
                {item.title}
              </a>
              
              {/* Description */}
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed text-justify">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
