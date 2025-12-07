import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function BusinessLines() {
  const data = [
    {
      title: "GAS",
      logo: "/business-lines-logo/logo-9.svg",
      content:
        "German Auto Service (GAS) is an Authorized Dealer for Mercedes-Benz Passenger Cars and Vans. Our partnership with Mercedes-Benz started in 1986 with the establishment of one of the largest after-sales service centers for Mercedes-Benz cars in Egypt.",
      link: "https://www.gas.mercedes-benz.com.eg",
    },
    {
      title: "SKY Finance",
      logo: "/business-lines-logo/logo-1.webp",
      content:
        "With more than a 100 dealerships and distributors in Greater Cairo and Alexandria, Sky Finance is one of the leading vehicle financing firms in Egypt serving a wide segment of the automotive market.",
      link: "https://sf.sky.eg",
    },
    {
      title: "SKY Leasing & Factoring",
      logo: "/business-lines-logo/logo-2.webp",
      content:
        "Sky Lease, a member of Sky Holding, is a leading company offering competitive financing solutions to help our clients fuel growth, increase investment and resolve liquidity and cash flow issues.",
      link: "https://lease.sky.eg",
    },
    {
      title: "SKY Business Services",
      logo: "/business-lines-logo/logo-3.webp",
      content:
        "SKY Business Service is to the greatest extent possible, independent organizational entity which deliver cross-departmental services for several internal/external customers; that provides one or more types of shared services to different operational units/models in a more economical and more effective way.",
      link: "#",
    },
    {
      title: "SKY Insurance Brokerage",
      logo: "/business-lines-logo/logo-4.webp",
      content:
        "The SKY IB Business Insurance Division provides sound advice and service that ensures your business is equipped with the right coverage to handle any situation that may arise. Protecting your assets and providing risk-management solutions is at the core of what we do. As an insurance brokerage, we are your reliable providers with insurance implementation, claims, and renewal.",
      link: "https://ib.sky.eg",
    },
    {
      title: "B Auto",
      logo: "/business-lines-logo/logo-5.webp",
      content:
        "At B Auto we don't just sell cars, we give you an experience like no other! Visit our branches around Egypt",
      link: "http://b.bauto.com",
    },
    {
      title: "B Rental",
      logo: "/business-lines-logo/logo-6.webp",
      content:
        "B-Rental is a mobility solution provider in Egypt that offers a tailor-made and flexible lease terms, and comfort payment options to fit all your corporate needs wherever you are located.",
      link: "http://brental.sky.eg",
    },
    {
      title: "Jupiter",
      logo: "/business-lines-logo/logo-7.webp",
      content:
        "A tech-oriented marketing and communications agency with a passion for storytelling. Covering the full spectrum of marketing and communications, Jupiter assesses all requirements and caters to the brand objective, ensuring maximum efficiency, effectiveness, and differentiation.",
      link: "https://www.thejupiter.agency",
    },
    {
      title: "Strada Properties",
      logo: "/business-lines-logo/logo-8.webp",
      content:
        "Strada redefines the real estate journey for our clients, whilst Strada is not just real estate; but a community builder committed to exceptional quality and strategic locations. As a consultancy and brokerage firm under Sky Holding Group, we focus on the Egyptian luxury real estate market.",
      link: "https://www.strada-properties.com",
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <div className="relative h-[300px] md:h-[450px] w-full">
        <Image
          src="/business-lines-logo/hero-sec.webp"
          alt="Business Lines Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute z-10 inset-0 flex items-end justify-center px-4">
          <div className="bg-white backdrop-blur-sm p-8 md:p-12 lg:p-10 text-center w-[95%] md:w-[80%] lg:w-[70%]">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#001f54] tracking-wide">
              SKY HOLDING
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#001f54]">
              Business Lines
            </p>
          </div>
        </div>
      </div>
      <Timeline data={data} />
    </div>
  );
}
