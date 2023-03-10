import React, { memo } from "react";

type Props = {
  className?: string;
};

const CircleSVG: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height="8" rx="4" fill="#89458C" />
    </svg>
  );
};

export default memo(CircleSVG);
