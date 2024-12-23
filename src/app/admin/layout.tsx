import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { adminAuth } from "@/actions/auth";

type LayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = async ({ children }) => {
  // const cookieStorage = cookies();
  // const token = cookieStorage.get("token");
  // if (token) {
  //   adminAuth(token.value);
  //
  //   if (!adminAuth) return redirect("/");
  //
  //   return <div className="container pt-12">{children}</div>;
  // }
  // return redirect("/");

  return <div className="container pt-12">{children}</div>;
};

export default layout;
