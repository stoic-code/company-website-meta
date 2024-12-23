import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Metalogic: Elevating Your Online Presence with Expert Website Solutions",
  description:
    "Discover digital excellence with Metalogic, a globally recognized website agency. We redefine online experiences through creativity and advanced technology. Partner with us to enhance your digital presence effortlessly.",
  keywords:
    "website design, web development, online presence, digital craftsmanship, innovative website solutions, cutting-edge technology, elevate online experience",
  creator: "Metalogic - Your Partner for Outstanding Websites",
  category: "Software Solution Agency",
};

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
