"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, MenuIcon } from "lucide-react";
import { MobileMenu } from "./MobileNavigation";
import { menus } from "./MobileNavigation";

import { Exo } from "next/font/google";
import ServicesCard from "./ServicesCard";
import { cn } from "@/lib/utils";
const exo = Exo({ subsets: ["latin"] });

const Navbar = () => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const [servicePresent, setServicePresent] = useState(false);
  const [scrollAble, setScrollAble] = useState(true);
  const [navPresent, setNavPresent] = useState(true);
  const [previousScrollY, setPreviousScrollY] = useState(0);

  // const regex = /\/careers\/([a-zA-Z0-9]+)/;

  useEffect(() => {
    const body = document.body;
    if (scrollAble) {
      body.classList.remove("no-scroll");
    } else {
      body.classList.add("no-scroll");
    }
    // Cleanup function
    return () => {
      body.classList.remove("no-scroll");
    };
  }, [scrollAble]);

  useEffect(() => {
    const body = document.body;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!scrollAble) return;

      // Determine scrolling direction based on the change in scroll position
      if (currentScrollY > previousScrollY) {
        setNavPresent(false);
      } else {
        setNavPresent(true);
      }

      // Update the previous scroll position for the next scroll event
      setPreviousScrollY(currentScrollY);
    };

    body.addEventListener("wheel", handleScroll);

    // Cleanup function
    return () => {
      // Remove the scroll event listener when the component is unmounted
      window.removeEventListener("wheel", handleScroll);
    };
  }, [previousScrollY]);

  const navbarVariants = {
    hidden: {
      y: -80,
      opacity: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      y: -80,
      opacity: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleServiceClick = () => {
    setServicePresent((state) => !state);
    setScrollAble((state) => !state);
  };

  return (
    <>
      <MobileMenu state={mobileNav} setState={setMobileNav} />
      <div className="absolute z-[100] flex w-full items-center justify-between p-4 lg:hidden">
        <Link href="/" className=" flex w-fit items-center gap-4">
          <img src="/metalogo.png" alt="MetaLogic" className="h-12 w-12" />
          <div className="flex flex-col">
            <h1
              className={`${
                exo.className
              } flex text-3xl font-bold tracking-widest ${
                pathname === "/careers" ||
                pathname.startsWith("/blogs") ||
                pathname.startsWith("/services") ||
                pathname.startsWith("/banshwali") ||
                pathname.startsWith("/digitalkhata") ||
                pathname.startsWith("/contact")
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <span className="">Meta</span>
              <span className="">Logic</span>
            </h1>
            {/*<span className={`text-sm `}>Software Private Limited</span> */}
          </div>
        </Link>

        <button
          aria-label="hamburger menu"
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
          className="absolute right-3 top-4 text-secondary-400"
        >
          <MenuIcon size={32} />
        </button>
      </div>
      <AnimatePresence>
        {navPresent && (
          <motion.nav
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 z-[1000] hidden w-full items-center justify-between ${
              pathname === "/careers" ||
              pathname.startsWith("/blogs") ||
              pathname.startsWith("/services")
                ? "bg-transparent text-black backdrop-blur-xl"
                : "bg-primary text-white"
            } border-b border-translucent-light-100 px-8 py-3 lg:flex`}
          >
            <ServicesCard
              handleServiceClick={handleServiceClick}
              servicePresent={servicePresent}
            />
            <Link href="/" className="flex items-center gap-4">
              <img
                src="/metalogo.png"
                alt="metalogic comany logo"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <h1
                  className={`${
                    exo.className
                  } flex text-3xl font-semibold tracking-widest ${
                    pathname === "/careers" ||
                    pathname.startsWith("/blogs") ||
                    pathname.startsWith("/services")
                      ? "text-primary"
                      : ""
                  }`}
                >
                  <span className="">Meta</span>
                  <span className="">Logic</span>
                </h1>
                {/*<span className={`text-sm `}>Software Private Limited</span> */}
              </div>
            </Link>

            <ul className="flex gap-8 font-semibold">
              {menus.map((m, idx) =>
                m.to !== "/services" ? (
                  <li key={idx}>
                    <Link
                      href={m.to}
                      onClick={() => {
                        setServicePresent(false);
                        setScrollAble(true);
                      }}
                      className={`${styles.link} ${
                        pathname === m.to ? styles.active : null
                      } relative pb-1`}
                    >
                      {m.title}
                    </Link>
                  </li>
                ) : (
                  <li key={5000}>
                    <button
                      onClick={handleServiceClick}
                      className={`flex items-center gap-1  ${
                        pathname.startsWith(m.to) ? styles.active : null
                      } outline:none relative pb-1`}
                    >
                      {m.title}{" "}
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-all duration-500",
                          servicePresent && "rotate-180",
                        )}
                      />
                    </button>
                  </li>
                ),
              )}
            </ul>

            <div>
              <Button
                asChild
                variant="ghost"
                className="bg-secondary-400 text-white hover:border-secondary-400"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
