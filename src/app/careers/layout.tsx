import React from "react";
import SubscribeContainer from "@/components/SubscribeContainer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <SubscribeContainer />
    </main>
  );
};

export default layout;
