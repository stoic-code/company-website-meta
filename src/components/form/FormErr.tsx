import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type FormErrProps = { children?: ReactNode; className?: string };

const FormErr: React.FC<FormErrProps> = ({ children, className }) => {
  return <p className={cn("text-xs text-red-500", className)}>{children}</p>;
};

export default FormErr;
