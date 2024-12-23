import React from "react";

const WhyLeft = () => {
  return (
    <svg
      viewBox="0 0 367 773"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[700px]"
    >
      <g filter="url(#filter0_d_1_10878)">
        <path
          d="M753 382.5C753 475.121 717.931 564.308 654.847 632.124C591.762 699.941 505.34 741.357 412.96 748.044C320.581 754.731 229.095 726.193 156.901 668.169C84.7072 610.145 37.1598 526.938 23.8207 435.282C10.4816 343.627 32.3401 250.319 85.0005 174.125C137.661 97.93 217.217 44.4995 307.671 24.5779C398.125 4.65632 492.767 19.7213 572.564 66.7432C652.362 113.765 711.397 189.256 737.797 278.036L575.668 326.248C561.452 278.441 529.662 237.791 486.693 212.47C443.723 187.149 392.76 179.037 344.052 189.765C295.344 200.492 252.504 229.264 224.147 270.293C195.791 311.323 184.02 361.567 191.203 410.922C198.386 460.278 223.989 505.083 262.865 536.328C301.74 567.573 351.003 582.94 400.748 579.339C450.493 575.739 497.03 553.437 531 516.919C564.971 480.401 583.854 432.375 583.854 382.5H753Z"
          fill="url(#paint0_linear_1_10878)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_10878"
          x="-0.0012207"
          y="-0.000976562"
          width="773.001"
          height="773.002"
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
          <feMorphology
            radius="16"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_10878"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="18" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.054902 0 0 0 0 0.729412 0 0 0 0 0.447059 0 0 0 0.29 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_10878"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_10878"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_10878"
          x1="20"
          y1="382.5"
          x2="753"
          y2="382.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB3349" />
          <stop offset="1" stopColor="#F45C43" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WhyLeft;
