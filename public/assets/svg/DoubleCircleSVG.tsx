import React, { memo } from "react";

type Props = {
  className?: string;
};

const DoubleCircleSVG: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="1" width="8" height="8" rx="4" fill="#99DC65" />
      <rect x="0.5" y="0.5" width="9" height="9" rx="4.5" fill="#F9C992" />
      <rect x="0.5" y="0.5" width="9" height="9" rx="4.5" stroke="white" />
    </svg>
  );
};

export default memo(DoubleCircleSVG);
