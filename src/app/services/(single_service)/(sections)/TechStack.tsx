"use client";
import React from "react";

type TechStackProps = {
  name: string;
  icon: any;
  color?: string;
};

const TechStack: React.FC<TechStackProps> = ({ name, icon, color }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 text-5xl ${
        color ? color : ""
      }`}
    >
      {icon}
      <p className="text-base font-semibold text-ui-700">{name}</p>
    </div>
  );
};

export default TechStack;
