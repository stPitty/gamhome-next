export type Props = {
  className?: string;
};

const HamburgerSVG: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 2H0.5C0.223858 2 0 1.77614 0 1.5V0.5C0 0.223858 0.223858 0 0.5 0H17.5C17.7761 0 18 0.223858 18 0.5V1.5C18 1.77614 17.7761 2 17.5 2ZM18 7.5V6.5C18 6.22386 17.7761 6 17.5 6H0.5C0.223858 6 0 6.22386 0 6.5V7.5C0 7.77614 0.223858 8 0.5 8H17.5C17.7761 8 18 7.77614 18 7.5ZM18 12.5V13.5C18 13.7761 17.7761 14 17.5 14H0.5C0.223858 14 0 13.7761 0 13.5V12.5C0 12.2239 0.223858 12 0.5 12H17.5C17.7761 12 18 12.2239 18 12.5Z"
        fill="#526EFF"
      />
    </svg>
  );
};

export default HamburgerSVG;
