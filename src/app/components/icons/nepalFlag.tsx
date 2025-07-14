import React from "react";

const WavingNepalFlag = () => {
  return (
    <svg
      className="w-[600px] h-auto"
      viewBox="0 0 1500 1000"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "url(#wavy)",
        animation: "wave 5s infinite linear",
        transformOrigin: "left center",
      }}
    >
      <defs>
        <filter id="wavy" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01 0.02"
            numOctaves="3"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <style>
          {`
            @keyframes wave {
              0% {
                filter: url(#wavy);
              }
              100% {
                filter: url(#wavy);
              }
            }

            .cls-1{fill:#003893;}
            .cls-2{fill:#dc143c;}
            .cls-3{fill:#fff;}
            .cls-4{fill:url(#linear-gradient);}
          `}
        </style>

        <linearGradient
          id="linear-gradient"
          y1="499.53"
          x2="755.87"
          y2="499.53"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0.1" />
          <stop offset="0.08" stopColor="#202020" stopOpacity="0.11" />
          <stop offset="0.18" stopColor="#797979" stopOpacity="0.15" />
          <stop offset="0.3" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.38" stopColor="#969696" stopOpacity="0.2" />
          <stop offset="0.47" stopColor="#424242" stopOpacity="0.2" />
          <stop offset="0.57" stopColor="#101010" stopOpacity="0.2" />
          <stop offset="0.7" stopOpacity="0.2" />
          <stop offset="0.84" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="1" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Your full SVG path data here — paste all your <path> elements below */}
      <path
        className="cls-1"
        d="M0,971V0C252,257.58,503.91,223.85,755.87,481.43c-166.4-64.13-332.8-1.2-499.2,21C417.12,644.22,577.57,748.14,738,964.62,492,882.93,246,1065.83,0,971Z"
      />
      <path
        id="_28"
        className="cls-2"
        d="M16.81,470.46c226.92,76,453.83-73.69,680.75-23.59C470.64,252.24,243.73,257.44,16.81,36.87V960.05c226.92,76,453.83-73.69,680.75-23.59C470.64,655.57,243.73,574.5,16.81,267.67Z"
      />
      <path
        id="_27"
        className="cls-3"
        d="M51.42,317.77c14.71,41.63,43.21,75.82,77.39,92.81,34.18,17.29,74,17.38,111.48-2.06,37.67-19.5,67.49-55.35,82.3-96.27,0,75.53-60.71,150.93-135.59,154.87-74.88,4.41-135.58-73.05-135.58-149.35"
      />
      {/* Continue with the rest of your <path> elements from the original SVG */}
    </svg>
  );
};

export default WavingNepalFlag;
