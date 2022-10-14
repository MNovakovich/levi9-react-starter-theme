import React from "react";

type IconTypes = "cart" | "heart";

interface IProps {
  type: IconTypes;
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon = ({
  type,
  className = "",
  width = 30,
  height = 30,
  color,
}: IProps) => {
    
  let icon = <path />;
  switch (type) {
    case "cart":
      icon = (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      );
      break;
    case "heart":
      icon = (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      );
      break;
    default: {
      icon = <path />;
    }
  }

  return (
    <svg
      className={className}
      height={height}
      width={width}
      style={{ color, height, width }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  );
};

export default SvgIcon;