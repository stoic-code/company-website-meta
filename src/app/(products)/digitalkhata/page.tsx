import Image from "next/image";
import React from "react";
import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

const page = () => {
  return (
    <div className="">
      <div className="bg-products-bg bg-left-bottom bg-no-repeat py-10">
        <section className="container grid min-h-screen items-center md:grid-cols-2">
          <div>
            <div className="flex flex-col gap-9 lg:pl-16">
              <FadeIn className="font-bold text-reddish-1 md:text-3xl">
                <span className="text-green-800">Digital</span>
                <span className="text-green-500">Khata</span>
              </FadeIn>

              <FadeIn className="text-4xl font-bold capitalize  text-blue-950 md:text-6xl">
                Where Finance unify for personal business and{" "}
                <span className="text-green-600">success</span>.
              </FadeIn>
            </div>
          </div>

          <FadeIn className="mx-auto flex h-full items-center justify-center">
            <Image
              src="/product/digitalkhata/dashboard.svg"
              alt="Mobile"
              width={350}
              height={350}
            />
          </FadeIn>
        </section>
      </div>

      <section className="relative py-10">
        <div className="absolute left-0 w-24 rounded-r-full bg-gray-200 px-8 lg:w-32">
          <Image
            src="/product/digitalkhata/logo.svg"
            alt="Mobile"
            width={50}
            height={50}
          />
        </div>
        <div className="container">
          <FadeIn className="pb-20 pt-10 text-center text-3xl font-bold text-reddish-1 sm:pb-32 lg:pb-40">
            <h1>
              <span className="text-green-800">Digital</span>
              <span className="text-green-500">Khata</span>
            </h1>
          </FadeIn>
        </div>

        <FadeIn
          className="relative h-56"
          style={{ backgroundImage: "url(/product/digitalkhata/banner.svg)" }}
        >
          <Image
            className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
            src="/product/digitalkhata/three_screen.svg"
            alt="Mobile"
            width={500}
            height={500}
          />
        </FadeIn>

        <div className="mx-auto flex flex-col items-center justify-center gap-8 px-3 py-20 md:w-[90%] md:flex-row md:px-0 lg:w-[60%]">
          <div className="flex h-full flex-col gap-8">
            <h4 className="pb-2 text-3xl font-bold">
              Get a Digital Khata App for any Device
            </h4>
            <div className="flex flex-col items-center gap-8 md:flex-row lg:items-start ">
              <Image
                alt="playstore"
                src="/product/digitalkhata/playstore.svg"
                width={200}
                height={200}
              />
              <Image
                alt="appstore"
                src="/product/digitalkhata/appstore.svg"
                width={200}
                height={200}
              />
            </div>
            <div className="flex gap-3">
              <Star fill="yellow" stroke="yellow" />
              <p>
                <span className="font-bold">4.5</span> Ratings on Playstore
              </p>
            </div>
          </div>

          <Image
            alt="qr"
            src="/product/digitalkhata/qr.svg"
            width={200}
            height={200}
          />
        </div>
      </section>
    </div>
  );
};

export default page;
