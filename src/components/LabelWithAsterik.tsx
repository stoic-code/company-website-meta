import React from "react";
import { Label } from "./ui/label";
import { LabelProps } from "@radix-ui/react-label";

const LabelWithAsterik: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Label {...props}>
      {children}
      <span className="text-red-600">*</span>{" "}
    </Label>
  );
};

export default LabelWithAsterik;
