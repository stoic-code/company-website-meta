"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./DotDashed.css";

const DotDashed = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    const path = document.getElementById("dots");
    if (inView) {
      path?.classList.add("dashed_path");
    }
  });
  return (
    <svg
      ref={ref}
      width="65"
      height="384"
      viewBox="0 0 65 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="dots"
        d="M30 32L30 383"
        stroke="#999999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="7 7"
      />
      <rect
        x="29"
        y="23"
        width="2"
        height="70"
        rx="1"
        fill="url(#paint0_linear_1_10894)"
      />
      <g filter="url(#filter0_di_1_10894)">
        <circle
          cx="30.5"
          cy="29.5"
          r="18.5"
          fill="url(#paint1_linear_1_10894)"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_1_10894"
          x="0"
          y="0"
          width="65"
          height="65"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="3" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0856471 0 0 0 0 0.0784314 0 0 0 0 0.439216 0 0 0 0.49 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_10894"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_10894"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.334833 0 0 0 0 0.425998 0 0 0 0 0.98 0 0 0 1 0"
          />
          <feBlend
            mode="lighten"
            in2="shape"
            result="effect2_innerShadow_1_10894"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_10894"
          x1="30"
          y1="23"
          x2="30"
          y2="93"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E70C0C" />
          <stop offset="1" stopColor="#EB6BF7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_10894"
          x1="30.5"
          y1="11"
          x2="30.5"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D64949" />
          <stop offset="1" stopColor="#F62525" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DotDashed;
