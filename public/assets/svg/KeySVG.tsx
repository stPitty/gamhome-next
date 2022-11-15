import { memo } from "react";

type Props = {
  className?: string;
};

const KeySVG: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.09 0H17.5C18.0523 0 18.5 0.447715 18.5 1V3.5C18.5 3.77614 18.2761 4 18 4H16.13C15.9864 4.01056 15.8548 4.08369 15.77 4.2H15.72C15.5793 4.34052 15.5002 4.53115 15.5 4.73V6.49C15.5 6.76614 15.2761 6.99 15 6.99H13.22C13.0212 6.99017 12.8305 7.06931 12.69 7.21L12.43 7.47C12.2893 7.61052 12.2102 7.80115 12.21 8V8.72C12.2089 8.98234 12.1047 9.23374 11.92 9.42L11.04 10.3C11.3418 10.9943 11.4983 11.743 11.5 12.5C11.5 15.5376 9.03757 18 6 18C2.96243 18 0.5 15.5376 0.5 12.5C0.5 9.46243 2.96243 7 6 7C6.76157 6.99907 7.51472 7.15925 8.21 7.47L15.39 0.29C15.5763 0.105256 15.8277 0.00110462 16.09 0ZM2.94 13.56C2.94 14.6646 3.83543 15.56 4.94 15.56C5.47043 15.56 5.97914 15.3493 6.35421 14.9742C6.72929 14.5991 6.94 14.0904 6.94 13.56C6.94 12.4554 6.04457 11.56 4.94 11.56C3.83543 11.56 2.94 12.4554 2.94 13.56Z"
        fill="white"
      />
    </svg>
  );
};

export default memo(KeySVG);