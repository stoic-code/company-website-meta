import React from "react";
import FadingDiv from "@/components/FadingDiv";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["devanagari"] });

const Features = () => {
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

  const { ref: section5, inView: section5Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section6, inView: section6Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section7, inView: section7Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section8, inView: section8Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section9, inView: section9Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section10, inView: section10Visible } = useInView({
    threshold: 0.1,
  });

  const { ref: section11, inView: section11Visible } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="relative">
      <div className="sticky top-0 h-screen">
        {section1Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2">
              <FadingDiv>
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/familytree.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col items-center justify-center gap-9">
                  <div className="md:text-5l text-2xl font-bold text-blue-950 md:text-3xl  lg:text-6xl">
                    Digital Tree Creation
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Effortlessly create and customize your family tree in a
                      </li>
                      <li>
                        digital format. Intuitive design for easy navigation and
                        user-friendly experience.
                      </li>
                    </ul>
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
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/pdf.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="md:text-5l text-2xl font-bold text-blue-950 md:text-3xl  lg:text-6xl">
                    PDF Export for Print
                  </div>

                  <div className="text-justify md:text-xl ">
                    Export your digital family tree in PDF format, ready for
                    printing for various purposes, such as books or family
                    gatherings.
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
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/donation.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="md:text-5l text-2xl font-bold text-blue-950 md:text-3xl lg:text-6xl">
                    Donation Management
                  </div>

                  <div className="text-justify md:text-xl ">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Efficiently manage donations within the platform. Track
                        and
                      </li>
                      <li>
                        record contributions with transparency and
                        accountability.
                      </li>
                    </ul>
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
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/security.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl lg:text-6xl">
                    Best Data Security
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Robust data security measures to protect sensitive
                        family information.
                      </li>
                      <li>
                        Encryption protocols and privacy controls ensure the
                        utmost confidentiality.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section5Visible && !section4Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/multiple.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl lg:text-6xl">
                    Multiple Payment Gateway Integration
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Integration with multiple payment gateways for
                        convenient and secure transactions.
                      </li>
                      <li>
                        Encryption protocols and privacy controls ensure the
                        utmost confidentiality.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section6Visible && !section5Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/documentation.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl lg:text-6xl">
                    Organization Document Management
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Centralized document management for the organization.
                      </li>
                      <li>
                        Upload and organize documents securely within the
                        platform.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section7Visible && !section6Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/notice.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl lg:text-6xl">
                    Notice Panel
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Integrated notice panel for announcements, updates, and
                        important information
                      </li>
                      <li>
                        Ensure that users stay informed about the latest news
                        and events.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section8Visible && !section7Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/manuscript.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl lg:text-6xl">
                    Article Upload
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Upload and store article or important family documents.
                      </li>
                      <li>
                        Create a digital repository for significant historical
                        and cultural materials.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section9Visible && !section8Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/backup.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl  lg:text-6xl">
                    Automated Backup System
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Automatic backup of family tree data at regular
                        intervals.
                      </li>
                      <li>
                        Ensures data integrity and provides peace of mind for
                        users.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section10Visible && !section9Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/cloud.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl  lg:text-6xl">
                    Cloud Platform Integration (AWS)
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Integration with cloud platforms, specifically AWS
                        (Amazon Web Services).
                      </li>
                      <li>
                        Data stored securely in the cloud for accessibility and
                        reliability.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section10Visible && !section9Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 md:grid-cols-2 ">
              <FadingDiv className="flex items-center justify-center">
                <Image
                  className="mx-auto w-40 md:w-[50%]"
                  src="/product/banshwali/features/customize.svg"
                  alt="ajile"
                  width={300}
                  height={200}
                />
              </FadingDiv>
              <FadingDiv>
                <div className="order-2 flex flex-col justify-center gap-9">
                  <div className="text-2xl font-bold text-blue-950 md:text-3xl  lg:text-6xl">
                    Customizable Font, Theme, and Format
                  </div>

                  <div className="text-justify md:text-xl">
                    <ul className="flex list-disc flex-col gap-4 pl-8">
                      <li>
                        Personalize your family tree with customizable fonts for
                        a unique visual appeal.
                      </li>
                      <li>
                        Choose from a variety of themes to suit your family's
                        style and preferences.
                      </li>
                      <li>
                        Customize the format of your family tree layout for a
                        personalized touch.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadingDiv>
            </div>
          </FadingDiv>
        )}

        {section11Visible && !section10Visible && (
          <FadingDiv className="flex h-full items-center justify-center ">
            <div className="grid items-center gap-4 px-4 text-center text-xl font-bold text-[#331a00] md:text-3xl">
              <FadingDiv
                className={`${kalam.className} mx-auto w-[60%] leading-relaxed`}
              >
                हाम्रो डिजिटल बंशावलीमा हामीसँग जोडिनुहोस, जहाँ प्रत्येक बंशको
                परिवारको गाथा जोडिएको छ । हाम्रो पूर्खाको बिरासत आउँदो
                पुस्तासम्म पुर्‍याउने सुनिश्चित गर्दै हामी सङै मिलेर डिजिटल
                समृद्धि सृजना गरौं । पारिवारिक भावना जोडिएको हाम्रो डिजिटल
                यात्रामा यहाँलाई हृदयदेखिनै स्वागत छ ।
              </FadingDiv>
            </div>
          </FadingDiv>
        )}
      </div>
      <div ref={section1} className="h-screen"></div>
      <div ref={section2} className="h-screen"></div>
      <div ref={section3} className="h-screen"></div>
      <div ref={section4} className="h-screen"></div>
      <div ref={section5} className="h-screen"></div>
      <div ref={section6} className="h-screen"></div>
      <div ref={section7} className="h-screen"></div>
      <div ref={section8} className="h-screen"></div>
      <div ref={section9} className="h-screen"></div>
      <div ref={section10} className="h-screen"></div>
      <div ref={section11} className="min-h-screen"></div>
    </div>
  );
};

export default Features;
