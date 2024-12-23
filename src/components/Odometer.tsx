"use client";
import { useEffect, useState } from "react";
import React from "react";
import "odometer/themes/odometer-theme-default.css";
// import Odometer from "react-odometerjs";
import { cn } from "@/lib/utils";

import dynamic from "next/dynamic";
const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
});

const OdometerCounter = ({
  num,
  className,
}: {
  num: number;
  className?: string;
}) => {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(num);
    }, 500);
  }, []);

  return (
    <Odometer
      className={cn(className)}
      format="(ddd).dd"
      duration={1000}
      value={odometerValue}
    />
  );
};

export default OdometerCounter;
