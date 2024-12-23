import React from "react";
import FadingDiv from "@/components/FadingDiv";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
  const { ref: section1, inView: section1Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section2, inView: section2Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section3, inView: section3Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section4, inView: section4Visible } = useInView({
    threshold: 0.1,
  });
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen bg-yellow-50">
        {section1Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2">
              <FadingDiv>
                <Image
                  className="mx-auto w-32 md:w-[50%]"
                  src="/product/banshwali/namaste.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col items-center justify-center gap-9">
                  <div className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
                    Namaste & Welcome To Digital Bansawali
                  </div>

                  <div className="text-justify md:text-xl ">
                    where the stories of our roots meet the promise of the
                    future. In the past, our elders dedicated their time to
                    create Bansawali, but the stories remained incomplete. Now,
                    in our digital age, we're bringing the Bansawali tradition
                    to your fingertips, making it simple, accessible, and
                    promising for you and the generations to come.
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section2Visible && !section1Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4  md:grid-cols-2">
              <FadingDiv>
                <Image
                  className="mx-auto w-32 md:w-[50%]"
                  src="/product/banshwali/promise.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
                    A Promise Fulfilled.
                  </div>

                  <div className="text-justify md:text-xl ">
                    Imagine a place where the tales of our ancestors live on, a
                    digital space where our shared history comes alive. Digital
                    Bansawali isn't just a record; it's a heartfelt promise to
                    carry forward the stories that make us who we are.
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section3Visible && !section2Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv>
                <Image
                  className="mx-auto w-32 md:w-[50%]"
                  src="/product/banshwali/journey.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="md:text-5l text-4xl font-bold text-blue-950  lg:text-6xl">
                    Simple Journey
                  </div>

                  <div className="text-justify md:text-xl ">
                    No need for old scrolls or complex searches. With just a
                    click, you can create your family tree, adding photos, and
                    sharing the essence of your family in Digital Bansawali.
                    It's a simple journey to discover, connect, and preserve
                    your family's unique legacy.
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section4Visible && !section3Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-32 md:w-[50%]"
                  src="/product/banshwali/ancestor.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-4xl font-bold text-blue-950 md:text-5xl lg:text-6xl">
                    Our Ancestry, Our Future
                  </div>

                  <div className="text-justify md:text-xl">
                    In Digital Bansawali, the unfinished stories of the past
                    find a new chapter. As we document our present, we pave the
                    way for the future. It's not just about where we come from;
                    it's about where we're going together.
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}
      </div>
      <div ref={section1} className="h-screen"></div>
      <div ref={section2} className="h-screen"></div>
      <div ref={section3} className="h-screen"></div>
      <div ref={section4} className="h-screen"></div>
    </div>
  );
};

export default Welcome;
