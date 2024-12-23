"use client";
import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import ImageLeft from "../(sections)/ImageLeft";
import ImageRight from "../(sections)/ImageRight";
import FeatureImageRight from "../(sections)/FeatureImageRight";
import FeatureImageLeft from "../(sections)/FeatureImageLeft";

import { Kalam } from "next/font/google";
import BannerBottom from "@/app/services/(single_service)/(sections)/BannerBottom";
import BanshwaliBannerBottom from "../(sections)/BanshwaliButtom";
const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["devanagari"] });

// import { TypeAnimation } from "react-type-animation";
// import Welcome from "./Welcome";
// import Features from "./Features";

const page = () => {
  return (
    <div>
      <div>
        <section
          style={{
            backgroundImage: "url(/product/banshwali/hero-bg.svg)",
            backgroundPosition: "110% 100%",
          }}
          className="container grid h-screen items-center gap-y-4 bg-contain bg-no-repeat px-4 md:grid-cols-2"
        >
          <div className="flex flex-col gap-9 md:min-h-[500px] lg:pl-16 lg:pt-16">
            <FadeIn className="font-bold text-reddish-1 md:text-3xl">
              <span className="text-orange-500">Digital</span>{" "}
              <span className="text-blue-900">Banshwali</span>
            </FadeIn>

            <FadeIn className="text-4xl font-bold capitalize  text-blue-950 md:text-6xl">
              Discover Your Roots through simple{" "}
              <span className="text-orange-600">Exploration</span>.
            </FadeIn>
          </div>

          <FadeIn className="mx-auto flex h-full items-end">
            <img
              className="w-[700px]"
              src="/product/banshwali/hero-2.png"
              alt="Mobile"
            />
          </FadeIn>
        </section>
      </div>
      {/* <Welcome />*/}
      {/* <div className="">
        <div className="bg-herobg bg-cover py-12 text-white">
          <h2 className="container mx-auto text-center text-2xl font-bold md:text-4xl">
            Key Features of our Banshwali App
          </h2>
        </div>

        <div className="container mx-auto">
          <Features />
        </div>
      </div> */}

      <FadeIn className="text-center font-bold uppercase text-reddish-1">
        Welcome
      </FadeIn>
      <div className="">
        <div className="container">
          <ImageLeft
            image="/product/banshwali/namaste.svg"
            heading="Namaste & Welcome To Digital Bansawali"
            para="where the stories of our roots meet the promise of the future. In the past, our elders dedicated their time to create Bansawali, but the stories remained incomplete. Now, in our digital age, we're bringing the Bansawali tradition to your fingertips, making it simple, accessible, and promising for you and the generations to come."
          />
          <ImageRight
            image="/product/banshwali/promise.svg"
            heading="A Promise Fulfilled"
            para="Imagine a place where the tales of our ancestors live on, a digital space where our shared history comes alive. Digital Bansawali isn't just a record; it's a heartfelt promise to carry forward the stories that make us who we are."
          />

          <ImageLeft
            image="/product/banshwali/journey.svg"
            heading="Simple Journey"
            para="No need for old scrolls or complex searches. With just a click, you can create your family tree, adding photos, and sharing the essence of your family in Digital Bansawali. It's a simple journey to discover, connect, and preserve your family's unique legacy."
          />
          <ImageRight
            image="/product/banshwali/ancestor.svg"
            heading="Our Ancestry, Our Future"
            para="In Digital Bansawali, the unfinished stories of the past find a new chapter. As we document our present, we pave the way for the future. It's not just about where we come from; it's about where we're going together."
          />
        </div>

        <div>
          <div className="">
            <div className="bg-herobg bg-cover py-8 text-white">
              <FadeIn className="pb-4 text-center font-bold uppercase text-secondary-300">
                Features
              </FadeIn>
              <h2 className="container mx-auto  pb-4 text-center text-2xl font-bold md:text-4xl">
                Key Features of our Digital Banshwali
              </h2>
            </div>
          </div>

          <div className="container">
            <FeatureImageLeft
              image="/product/banshwali/features/familytree.svg"
              heading="Digital Tree Creation"
            >
              <li>
                Effortlessly create and customize your family tree in a digital
                format.
              </li>
              <li>
                Intuitive design for easy navigation and user-friendly
                experience.
              </li>
            </FeatureImageLeft>

            <FeatureImageRight
              image="/product/banshwali/features/pdf.svg"
              heading="PDF Export for Print"
            >
              <li>
                Export your digital family tree in PDF format, ready for
                printing for various purposes, such as books or family
                gatherings.
              </li>
            </FeatureImageRight>

            <FeatureImageLeft
              image="/product/banshwali/features/donation.svg"
              heading="Donation Management"
            >
              <li>Efficiently manage donations within the platform.</li>
              <li>
                Track and Record contributions with transparency and
                accountability.
              </li>
            </FeatureImageLeft>

            <FeatureImageRight
              image="/product/banshwali/features/security.svg"
              heading="Best Data Security"
            >
              <li>
                Robust data security measures to protect sensitive family
                information.
              </li>
              <li>
                Encryption protocols and privacy controls ensure the utmost
                confidentiality.
              </li>
            </FeatureImageRight>

            <FeatureImageLeft
              heading="Multiple Payment Gateway"
              image="/product/banshwali/features/multiple.svg"
            >
              <li>
                Integration with multiple payment gateways for convenient and
                secure transactions.
              </li>
              <li>
                Encryption protocols and privacy controls ensure the utmost
                confidentiality.
              </li>
            </FeatureImageLeft>

            <FeatureImageRight
              image="/product/banshwali/features/documentation.svg"
              heading="Organization Document Magement"
            >
              <li>Centralized document management for the organization.</li>
              <li>
                Upload and organize documents securely within the platform.
              </li>
            </FeatureImageRight>

            <FeatureImageLeft
              image="/product/banshwali/features/notice.svg"
              heading="Notice Panel"
            >
              <li>
                Integrated notice panel for announcements, updates, and
                important information
              </li>
              <li>
                Ensure that users stay informed about the latest news and
                events.
              </li>
            </FeatureImageLeft>

            <FeatureImageRight
              image="/product/banshwali/features/article-upload.svg"
              heading="Article Upload"
            >
              <li>Upload and store article or important family documents.</li>
              <li>
                Create a digital repository for significant historical and
                cultural materials.
              </li>
            </FeatureImageRight>

            <FeatureImageLeft
              image="services/cloud/hero.svg"
              heading="Cloud Platform Integration"
            >
              <li>
                Integration with cloud platforms, specifically AWS (Amazon Web
                Services).
              </li>
              <li>
                Data stored securely in the cloud for accessibility and
                reliability.
              </li>
            </FeatureImageLeft>

            <FadeIn className="flex h-full items-center justify-center py-20">
              <div className="grid items-center gap-4 px-4 text-center text-xl font-bold text-[#331a00] md:text-3xl">
                <FadeIn
                  className={`${kalam.className} mx-auto px-2 leading-relaxed md:w-[60%]`}
                >
                  हाम्रो डिजिटल बंशावलीमा हामीसँग जोडिनुहोस, जहाँ प्रत्येक बंशको
                  परिवारको गाथा जोडिएको छ । हाम्रो पूर्खाको बिरासत आउँदो
                  पुस्तासम्म पुर्‍याउने सुनिश्चित गर्दै हामी सङै मिलेर डिजिटल
                  समृद्धि सृजना गरौं । पारिवारिक भावना जोडिएको हाम्रो डिजिटल
                  यात्रामा यहाँलाई हृदयदेखिनै स्वागत छ ।
                  <br />
                  धन्यवाद
                </FadeIn>
              </div>
            </FadeIn>
            <BanshwaliBannerBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
