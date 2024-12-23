import SubscribeContainer from "@/components/SubscribeContainer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <SubscribeContainer />
    </div>
  );
};

export default layout;
