import { Timeline } from "./ui/milestone";

const Milestone = () => {
  const data = [
    {
      title: "1996",
      logo: "/logo/logo-9.svg",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            German Auto Service (GAS) is an Authorized Dealer for Mercedes-Benz
            Passenger Cars and Vans. &quot;Our partnership with Mercedes-Benz
            started in 1986 with the establishment of one of the largest
            after-sales service centers for Mercedes-Benz cars in Egypt. That is
            to say in the beginning, we had a clear vision and objective, which
            revolved around providing products and services for Mercedes-Benz
            cars in a market that relentlessly goes through rapid developments.
            Thus, our determination, to adhere to this target, contributed to
            acquiring the trust of all customers in Egypt, which gave us an
            impetus to provide sales and after-sales services.&quot;. German
            Auto Service (GAS) has the first Mercedes-Benz MAR2020 city
            showroom. &quot;GAS has always been a very strong and important
            authorized service partner with Mercedes-Benz.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2008",
      logo: "/logo/logo-5.svg",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            B-Auto is a major automotive sales and service company in Egypt that
            was established in March 2008. It is the official dealer for BMW,
            MINI, and BMW Motorrad in Egypt. B-Auto operates under the umbrella
            of SKY Holding Company, which is one of the leading conglomerates in
            Egypt. B-Auto has built a strong reputation for providing
            exceptional customer service and high-quality vehicles to its
            customers. The company has a team of highly trained professionals
            who are dedicated to ensuring that every customer has a positive
            experience when purchasing or servicing their BMW, MINI, or BMW
            Motorrad vehicles. B-Auto has showrooms and service centers in
            several locations across Egypt.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2016",
      logo: "/logo/logo-4.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            Sky Insurance Brokerage is a trusted insurance broking company
            wholly committed to preserving the prosperity of each of its
            clients. We offer our customers a service they can value with the
            peace of mind they are looking for. As our client, you are assured
            of our undivided attention and our ability to handle all your
            insurance needs in an ever-changing market. Sky Insurance Brokerage
            is a subsidiary of SKY Holding Company, one of the leading business
            conglomerates in Egypt. SKY Holding Company has a diverse portfolio
            of companies operating in various sectors, including automotive,
            finance, real estate, and insurance.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2018",
      logo: "/logo/logo-1.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            Sky Finance is a leading financial services company in Egypt that
            was established in 2018. The company is a subsidiary of SKY Holding
            Company, which is one of the largest business conglomerates in
            Egypt. Sky Finance offers a wide range of financial products and
            services to individuals and businesses, including personal loans,
            car loans, home loans, and business financing solutions. The company
            has a team of experienced professionals who are dedicated to
            providing exceptional customer service and tailored financial
            solutions to meet the unique needs of each client. Sky Finance has
            quickly established itself as a trusted and reliable financial
            partner in Egypt, with a strong focus on innovation, transparency,
            and customer satisfaction.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2020",
      logo: "/logo/logo-2.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            Sky leasing & Factoring is a prominent financial services company in
            Egypt, established in 2020 as a subsidiary of SKY Holding Company.
            The company specializes in providing leasing and factoring solutions
            to businesses across various industries. Sky Leasing & Factoring
            offers a range of services, including asset leasing, equipment
            financing, and accounts receivable factoring, designed to help
            businesses optimize their cash flow and manage their financial needs
            effectively. With a team of experienced professionals and a
            customer-centric approach, Sky Leasing & Factoring has quickly
            gained a reputation for delivering innovative financial solutions
            that support the growth and success of its clients in the Egyptian
            market.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2020",
      logo: "/logo/logo-6.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            Brental is a leading car rental company in Egypt that was
            established in 2020. The company is a subsidiary of SKY Holding
            Company, one of the largest business conglomerates in Egypt. Brental
            offers a wide range of car rental services to both individuals and
            businesses, including short-term and long-term rentals, as well as
            chauffeur services. The company has a fleet of well-maintained
            vehicles, ranging from economy cars to luxury vehicles, to cater to
            the diverse needs of its customers. With a focus on customer
            satisfaction and competitive pricing, Brental has quickly
            established itself as a trusted and reliable car rental provider in
            Egypt.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2021",
      logo: "/logo/logo-3.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            SKY Group philosophy is to differentiate ourselves from the
            competition by providing distinguished features within all of our
            services/products that are provided to our customers. We are using a
            growth diversified strategy to take advantage of economies of scale
            by leveraging on our companies to provide fit to purpose solutions
            to our customers/consumers. This has been achieved by building a
            strong base of talented employees that are committed to the success
            of SKY Group as a whole and each company individually.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2022",
      logo: "/logo/logo-7.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            Jupiter is a leading business services company in Egypt that was
            established in 2022. The company is a subsidiary of SKY Holding
            Company, one of the largest business conglomerates in Egypt. Jupiter
            offers a wide range of business services to help companies optimize
            their operations and improve their efficiency. Their services
            include business process outsourcing, IT solutions, digital
            marketing, and customer relationship management. With a team of
            experienced professionals and a customer-centric approach, Jupiter
            has quickly established itself as a trusted partner for businesses
            in Egypt looking to enhance their operations and achieve their
            goals.
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2024",
      logo: "/logo/logo-8.svg",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-justify">
            Strada Properties is a real estate development company in Egypt that
            was established in 2024. The company is a subsidiary of SKY Holding
            Company, one of the largest business conglomerates in Egypt. Strada
            Properties focuses on developing high-quality residential and
            commercial properties that meet the needs of modern living and work
            environments. With a team of experienced professionals and a
            commitment to excellence, Strada Properties aims to create
            innovative and sustainable real estate solutions that enhance the
            communities they serve.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-background section-padding-y" id="milestones">
      <Timeline data={data} />
    </div>
  );
};

export default Milestone;
