import React from "react";
// import Image from "next/image";
import Link from "next/link";
// import Logo from "@/assets/logo.png";
import {
  MapPin,
  Phone,
  Mail,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Exo } from "next/font/google";
const exo = Exo({ subsets: ["latin"] });

import { services } from "@/data/footer/services";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="z-50 w-full bg-herobg px-4 pb-8 pt-24 text-white md:px-16">
      <div className="flex flex-col justify-between gap-y-8 xl:flex-row">
        <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-2">
          <div className="mt-8 flex items-start justify-start gap-2 md:mt-0">
            <img src="/metalogo.png" alt="logo" className="w-[50px]" />
            <h1 className="mb-4 flex flex-col text-2xl font-bold md:hidden">
              <span className={`${exo.className} tracking-widest`}>
                MetaLogic
              </span>
              <span className="text-xs font-normal">
                Software Private Limited
              </span>
            </h1>
          </div>
          <div className="flex w-full flex-col justify-between md:flex-row xl:flex-col">
            <h1 className="mb-4 hidden md:block ">
              <span
                className={`${exo.className} text-3xl font-semibold tracking-widest`}
              >
                MetaLogic
              </span>
              <br />
              <span className="text-sm ">Software Private Limited</span>
            </h1>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} />
                Saptakhel, Lalitpur (Head office)
              </li>

              <li className="flex gap-2">
                <Phone size={16} />+ 977 9851353599
              </li>

              <li className="flex gap-2">
                <Mail size={16} />
                info@metalogic.com.np
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 md:mx-auto md:flex-row md:gap-8 lg:gap-16 xl:mx-0">
          <div>
            <h3 className="mb-2 font-semibold">Company</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link href="/contact">Feedback</Link>
              </li>
              <li>
                <Link href="/contact/partner">Partnership</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Services</h3>
            <ul className="flex flex-col gap-2 text-xs">
              {/* <li>
                <Link href="/contact">Web Development</Link>
              </li>
              <li>
                <Link href="#">Custom Software Development</Link>
              </li>
              <li>
                <Link href="#">Feedback</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li> */}
              {services.map((s) => (
                <li>
                  <Link href={s.link}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Join</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link href="/careers">Careers at MetaLogic</Link>
              </li>
              <li>
                <Link href="/career">Internships</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Join us on Social Medias</h3>
            <ul className="flex gap-4 text-sm">
              <li className="rounded-full border-2 p-2">
                <Link
                  aria-label="whatsapp messaging direct link"
                  href="https://wa.me/9851353599"
                  target="_blank"
                >
                  <FaWhatsapp size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2">
                <Link
                  aria-label="our facebook page link"
                  href="https://www.facebook.com/metalogicsoftware"
                  target="blank"
                >
                  <FacebookIcon size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2">
                <Link
                  aria-label="our instagram facebook page link"
                  href="https://www.instagram.com/metalogicsoftware?igsh=bDE5dG1pdGFoMGg3"
                  target="_blank"
                >
                  <InstagramIcon size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2">
                <Link
                  aria-label="our linkedin page link"
                  href="https://www.linkedin.com/company/metalogic-software-pvt-ltd/"
                  target="_blank"
                >
                  <LinkedinIcon size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-2 text-sm md:flex-row">
        <span>&copy; Copyright {year} MetaLogic. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
