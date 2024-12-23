import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "DigitalKhata: Unifying Finances for Personal, Business, and Success",
  description:
    "Streamline your financial management with DigitalKhata. Whether for personal use or business success, our platform simplifies and unifies your financial journey, empowering you with control and insights.",
  keywords:
    "DigitalKhata, finance management, personal finance, business finance, financial success, expense tracking, income management, financial empowerment",
  creator: "Metalogic - Empowering Your Financial Journey",
  category: "Finance Management Platform",
  openGraph: {
    title:
      "DigitalKhata: Unifying Finances for Personal, Business, and Success",
    images: "https://metalogic.com.np/metalogo.png",
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
