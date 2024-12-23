import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Digital Banshwali: Connect Generations, Preserve Legacies",
  description:
    "Discover your roots and build meaningful connections with Digital Banshwali created by Metalogic Software Pvt Ltd. Capture and preserve your family's unique story in a digital journey that transcends generations.",
  keywords:
    "Digital Banshwali, family tree,Banshawali, Banshawali in nepal, genealogy, heritage, legacy preservation, family history, connect generations",
  creator: "Metalogic Software Private Ltd",
  category: "Family and Heritage App",

  openGraph: {
    title: "Digital Banshwali: Connect Generations, Preserve Legacies",
    description:
      "Discover your roots and build meaningful connections with Digital Banshwali.",
    images: "/product/banshwali/features/familytree.svg",
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
