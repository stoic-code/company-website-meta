import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import { technologies } from "@/data/services/mobile/data";
import FAQs from "../software-development/(sections)/Faq";
import BannerBottom from "../(sections)/BannerBottom";
import Methodology from "../(sections)/Methodology";
import CraftingSolution from "../(sections)/CraftingSolution";
import ReliabilityInPartnership from "../(sections)/ReliabilityInPartnership";
import AllPlatform from "./(section)/AllPlatform";
import MobileFeatures from "./(section)/MobileFeatures";

export const metadata: Metadata = {
  title:
    "Mobile App Development Services by Metalogic: Transforming Ideas into User-Centric Apps",
  description:
    "Metalogic excels in Mobile App Development, creating intuitive and feature-rich applications. From concept to deployment, our expert team ensures your app stands out, offering seamless functionality and a captivating user experience.",
  keywords:
    "mobile app development, iOS app development, Android app development, cross-platform app development, user-friendly mobile apps, app design, mobile application developers, app deployment",
  creator: "Metalogic - Pioneering Mobile Experiences",
  category: "Mobile App Development Services",
  alternates: {
    canonical: "https://metalogic.com.np/services",
  },
};

const mobileAppFaqs = [
  {
    id: "item1",
    title:
      "What is mobile app development, and why is it important for businesses?",
    content:
      "Mobile app development involves creating software applications specifically designed for mobile devices. It is important for businesses as it provides a direct and interactive way to engage with users, enhance customer experience, and extend services to mobile platforms.",
  },
  {
    id: "item2",
    title:
      "Which mobile platforms do you specialize in (iOS, Android, or both)?",
    content:
      "We specialize in both iOS and Android app development. Our team is proficient in using Swift and Objective-C for iOS and Kotlin and Java for Android, ensuring a comprehensive approach to mobile app development.",
  },
  {
    id: "item3",
    title:
      "Can you help with cross-platform development to create apps that work on both iOS and Android?",
    content:
      "Yes, we offer cross-platform development using frameworks like React Native or Flutter. This allows us to build a single codebase that can be deployed on both iOS and Android platforms, reducing development time and costs.",
  },
  {
    id: "item4",
    title: "What is the typical mobile app development process with your team?",
    content:
      "Our mobile app development process involves initial consultations, wireframing, design, development, testing, deployment, and ongoing support. We keep you involved at every stage to ensure the final app aligns with your vision and goals.",
  },
  {
    id: "item5",
    title: "How do you ensure the security of mobile applications?",
    content:
      "Security is a top priority. We follow best practices for mobile app security, including secure coding techniques, data encryption, and implementing measures to protect against common vulnerabilities.",
  },
  {
    id: "item6",
    title:
      "Can you integrate mobile apps with existing systems or third-party APIs?",
    content:
      "Yes, we specialize in seamless integration with existing systems and third-party APIs, ensuring that your mobile app can work cohesively with other tools and platforms used in your organization.",
  },
  {
    id: "item7",
    title:
      "Do you provide ongoing support and updates for mobile applications after launch?",
    content:
      "Yes, we offer ongoing support and maintenance services to address any issues, implement updates, and ensure the continued performance and security of your mobile app.",
  },
  {
    id: "item8",
    title:
      "How do you optimize mobile apps for performance and user experience?",
    content:
      "We follow best practices for mobile app performance optimization, including efficient coding, image and data compression, and responsive design principles. User experience is a key focus, and we conduct usability testing to ensure the app is intuitive and user-friendly.",
  },
  {
    id: "item9",
    title:
      "Can you assist with app store submissions and approvals (e.g., Apple App Store, Google Play Store)?",
    content:
      "Absolutely. We guide you through the app store submission process, ensuring that your app meets all requirements and complies with guidelines. We assist with necessary documentation and handle the submission and approval process.",
  },
  {
    id: "item10",
    title:
      "What factors influence the cost of mobile app development with your team?",
    content:
      "The cost is influenced by factors such as app complexity, features, platforms, and ongoing support. We provide a detailed breakdown of costs after assessing your specific project requirements.",
  },
];

const page = () => {
  return (
    <div className="container">
      <div className="grid items-center py-12 md:min-h-screen md:grid-cols-2 md:py-0">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-bold uppercase text-reddish-1">
              Mobile App Development
            </FadeIn>

            <FadeIn className="text-4xl font-bold text-blue-950  md:text-6xl">
              Seamless iOS and Android Development
            </FadeIn>

            <FadeIn className="text-md text-ui-600">
              Stay ahead in the digital landscape with our innovative mobile app
              solutions. Our team combines creativity and technical expertise to
              develop custom applications tailored to your business needs.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image
            src="/services/mobile/hero.svg"
            alt="Mobile"
            width={500}
            height={500}
          />
        </FadeIn>
      </div>

      <TechWeUse
        technologies={technologies}
        title="Technology we behold"
        subTitle="Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs."
      />

      <AllPlatform />
      <MobileFeatures />

      <Methodology />
      <CraftingSolution />
      <ReliabilityInPartnership />

      <FAQs faqs={mobileAppFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
