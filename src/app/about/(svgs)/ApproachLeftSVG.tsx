import React from "react";

const ApproachLeftSVG = () => {
  return (
    <svg
      width="282"
      height="283"
      viewBox="0 0 282 283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="141"
        cy="141"
        r="140"
        fill="white"
        fillOpacity="0.2"
        stroke="url(#paint0_linear_84_6482)"
        strokeWidth="2"
      />
      <circle
        cx="141"
        cy="168"
        r="114"
        fill="white"
        fillOpacity="0.2"
        stroke="url(#paint1_linear_84_6482)"
        strokeWidth="2"
      />
      <g filter="url(#filter0_ii_84_6482)">
        <circle
          cx="140.5"
          cy="193.5"
          r="88.5"
          transform="rotate(90 140.5 193.5)"
          fill="url(#paint2_linear_84_6482)"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_84_6482"
          x="52"
          y="105"
          width="177"
          height="188"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="21"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_84_6482"
          />
          <feOffset dy="13" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_84_6482"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="18"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_innerShadow_84_6482"
          />
          <feOffset dy="-12" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.140467 0 0 0 0 0 0 0 0 0 0.143333 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_84_6482"
            result="effect2_innerShadow_84_6482"
          />
        </filter>
        <linearGradient
          id="paint0_linear_84_6482"
          x1="141"
          y1="0"
          x2="141"
          y2="282"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EEFD" />
          <stop offset="1" stopColor="#FFF2F2" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_84_6482"
          x1="141"
          y1="53"
          x2="141"
          y2="283"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EEFD" />
          <stop offset="1" stopColor="#FFF2F2" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_84_6482"
          x1="52"
          y1="193.5"
          x2="229"
          y2="193.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7EAFA" stopOpacity="0.15" />
          <stop offset="1" stopColor="#D89CFC" stopOpacity="0.69" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ApproachLeftSVG;
