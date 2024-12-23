import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import CraftingSolution from "../(sections)/CraftingSolution";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";
import BannerBottom from "../(sections)/BannerBottom";
import Features from "./(sections)/Features";
import { technologies } from "@/data/services/data";
import TechWeUse from "../(sections)/TechWeUse";
import FAQs from "../software-development/(sections)/Faq";
import { blockchainFaqs } from "@/data/blockchain/data";

export const metadata: Metadata = {
  title:
    "Blockchain Services by Metalogic: Transforming Businesses with Decentralized Innovation",
  description:
    "Explore the future of technology with Metalogic's Blockchain Services. Our expert team harnesses the power of decentralized solutions, providing secure and transparent blockchain development to revolutionize your business processes and drive innovation.",
  keywords:
    "blockchain services, decentralized solutions, blockchain development, secure transactions, transparent ledger, smart contracts, blockchain technology, business innovation",
  creator: "Metalogic - Leading the Blockchain Revolution",
  category: "Blockchain Services",
  alternates: {
    canonical: "https://metalogic.com.np/services",
  },
};

const page = () => {
  return (
    <div className="container">
      <div className="grid items-center py-16 md:min-h-screen md:grid-cols-2 md:py-0">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-bold uppercase text-reddish-1">
              Blockchain Development
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Secure Blockchain Solutions
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Embark on a journey of innovation and heightened security with our
              Secure Blockchain Solutions. Our team specializes in developing
              robust blockchain solutions, ensuring that your digital assets and
              transactions remain safeguarded.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[80%] items-center justify-center md:flex">
          <Image
            src="/services/blockchain/hero.svg"
            alt="Mobile"
            width={900}
            height={500}
          />
        </FadeIn>
      </div>
      <Features />

      <TechWeUse
        technologies={technologies}
        title="Technology we behold"
        subTitle="Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs."
      />
      <ReliabilityInPartnership />
      <CraftingSolution />
      <BannerBottom />
      <FAQs faqs={blockchainFaqs} />
    </div>
  );
};

export default page;
