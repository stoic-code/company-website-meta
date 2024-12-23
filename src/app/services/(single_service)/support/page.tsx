import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import CraftingSolution from "../(sections)/CraftingSolution";
// import Benifits from "../software-development/(sections)/Benifits";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";
import BannerBottom from "../(sections)/BannerBottom";

export const metadata: Metadata = {
  title:
    "Reliable Maintenance and Support Services by Metalogic: Sustaining Your Digital Success",
  description:
    "Ensure the longevity of your digital investments with Metalogic's Maintenance and Support Services. Our dedicated team provides reliable and proactive support, minimizing downtime, optimizing performance, and safeguarding the continuous success of your digital assets.",
  keywords:
    "maintenance and support services, reliable support, proactive maintenance, digital asset optimization, downtime minimization, continuous success, digital investments",
  creator: "Metalogic - Your Trusted Partner for Digital Sustenance",
  category: "Maintenance and Support Services",
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
              Maintainance and Support
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              24/7 Maintainance and Support
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Gain peace of mind with our 24/7 technical support services. Our
              team is ready to assist you around the clock, ensuring quick
              resolutions to any technical issues that may arise.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image
            src="/services/support.svg"
            alt="Mobile"
            width={500}
            height={500}
          />
        </FadeIn>
      </div>
      <ReliabilityInPartnership />
      <CraftingSolution />
      <BannerBottom />
    </div>
  );
};

export default page;
