import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import TechWeUse from "../(sections)/TechWeUse";
import BannerBottom from "../(sections)/BannerBottom";
import FAQs from "../software-development/(sections)/Faq";
import {
  uiUxBrandingFaqs,
  designExperience,
  technologies,
  UIUX,
  agile,
} from "@/data/services/ui-ux/data";

export const metadata: Metadata = {
  title:
    "UI/UX Design Services by Metalogic: Elevate User Experiences with Innovative Design",
  description:
    "Metalogic specializes in UI/UX Design Services, creating visually stunning and intuitive interfaces that captivate users. Our expert design team focuses on blending creativity with functionality to deliver seamless and engaging user experiences for your digital products.",
  keywords:
    "UI/UX design services, user interface design, user experience design, innovative design solutions, visual design, intuitive interfaces, user-centric design, digital product experiences",
  creator: "Metalogic - Shaping Digital Experiences Through Design Innovation",
  category: "UI/UX Design Services",
  alternates: {
    canonical: "https://metalogic.com.np/services",
  },
};

const page = () => {
  return (
    <div className="px-2 2xl:container">
      <div className="grid items-center py-16 md:min-h-screen md:grid-cols-2 md:py-0">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <FadeIn className="text-md font-semibold uppercase text-reddish-1">
              UI/UX Design
            </FadeIn>

            <FadeIn className="text-4xl font-semibold text-blue-950  md:text-6xl">
              Brand Identity through Design
            </FadeIn>

            <FadeIn className="text-md ">
              Engage users with lightning-fast and reliable Progressive Web
              Apps. We harness the power of modern web technologies to deliver
              app-like experiences directly through browsers.
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <Image
            src="/services/ui-ux/hero.svg"
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

      <div className="bg-yellow-50 lg:pl-16">
        <div className="py-10 lg:w-[60%]">
          <h2 className="text-4xl font-semibold text-blue-950  md:text-6xl">
            Authentic, Aesthetic & Affirmative design experiences
          </h2>
          <p className="py-9 text-ui-600">
            Positioned as an enthusiast leading the way in the industry, our
            team at the forefront champions the "design-first" approach. Our
            skilled UX/UI designers are proven experts dedicated to promoting a
            context-driven design philosophy that spans across the entire
            spectrum of services within this field.
          </p>
        </div>
        <div className="grid gap-y-10 px-10 py-10 md:w-[90%] md:gap-x-16 lg:grid-cols-2">
          {designExperience.map((d, idx) => (
            <div
              key={idx}
              className="shadow-even flex flex-col gap-10 rounded-[3rem] bg-neutral-50 px-8 py-8 sm:flex-row md:flex-col xl:flex-row"
            >
              <Image src={d.image} alt="image" width={200} height={200} />
              <div>
                <h5 className="text-lg font-semibold">{d.title}</h5>
                <p className="text-ui-500">{d.desc}</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {d.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-200 px-4 py-2 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 lg:pl-16">
        <div className="py-4 lg:w-[60%]">
          <h2 className="text-4xl font-semibold text-blue-950  md:text-6xl">
            Our UI/UX & Branding Offering
          </h2>
          <p className="py-9 text-ui-600">
            Offering aficionado solutions for all sizes of design and branding
            problems
          </p>
        </div>
        <div className="grid gap-x-16 gap-y-10 px-10 py-10 lg:grid-cols-2">
          <div>
            <div className="shadow-even rounded-2xl bg-neutral-100 p-8">
              <h5 className="py-8 text-3xl font-semibold text-primary">
                {UIUX[0].title}
              </h5>
              <ul className="flex list-disc flex-col gap-6 pl-8">
                {UIUX[0].list.map((item, idx) => (
                  <li className="text-primary" key={idx}>
                    <span className="text-ui-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shadow-even my-16 rounded-2xl bg-neutral-100 p-8">
              <h5 className="py-8 text-3xl font-semibold text-primary">
                {UIUX[2].title}
              </h5>
              <ul className="flex list-disc flex-col gap-6 pl-8">
                {UIUX[2].list.map((item, idx) => (
                  <li className="text-primary" key={idx}>
                    <span className="text-ui-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="shadow-even rounded-2xl bg-neutral-100 p-8">
              <h5 className="py-8 text-3xl font-semibold text-primary">
                {UIUX[1].title}
              </h5>
              <ul className="flex list-disc flex-col gap-6 pl-8">
                {UIUX[1].list.map((item, idx) => (
                  <li className="text-primary" key={idx}>
                    <span className="text-ui-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-even my-12 rounded-2xl bg-neutral-100 p-8">
              <h5 className="py-8 text-3xl font-semibold text-primary">
                {UIUX[3].title}
              </h5>
              <ul className="flex list-disc flex-col gap-6 pl-8">
                {UIUX[3].list.map((item, idx) => (
                  <li className="text-primary" key={idx}>
                    <span className="text-ui-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-cover bg-center py-20">
        <div className="mx-auto w-[90%] self-start py-4 text-center">
          <h2 className="text-4xl font-semibold text-blue-950  md:text-6xl">
            Structured Processes Blueprint for Success
          </h2>
          <p className="pt-4 text-ui-600">
            We make technology, tools and IT expertise come together to
            orchestrate the perfect integration – adding value to your data
            assets
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {agile.map((a, idx) => (
            <div
              key={idx}
              className="shadow-even flex h-[200px] w-[200px] flex-col items-center justify-center gap-4 rounded-2xl bg-primary"
            >
              <Image
                alt={a.title}
                src={a.icon}
                width={100}
                height={100}
                className="h-20 w-20"
              />
              <p className="font-bold text-white">{a.title}</p>
            </div>
          ))}
        </div>
      </div>
      <TechWeUse
        technologies={technologies}
        title="Tecnnology We Behold"
        subTitle=""
      />

      <FAQs faqs={uiUxBrandingFaqs} />
      <BannerBottom />
    </div>
  );
};

export default page;
