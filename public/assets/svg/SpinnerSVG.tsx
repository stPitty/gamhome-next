import { memo } from "react";

type Props = {
  className?: string;
};

const SpinnerSVG: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_1051_5945" fill="white">
        <path d="M19.15 10C19.6194 10 20.0038 9.61873 19.9639 9.15099C19.8091 7.33408 19.1597 5.58813 18.0786 4.1063C16.8301 2.39485 15.0702 1.12414 13.0529 0.477391C11.0355 -0.169354 8.86487 -0.158715 6.85395 0.507774C4.84303 1.17426 3.09572 2.46216 1.86398 4.18577C0.632245 5.90938 -0.0202861 7.97963 0.000480458 10.098C0.021247 12.2164 0.714238 14.2735 1.97953 15.9726C3.24482 17.6717 5.01704 18.9251 7.04064 19.5521C8.79274 20.0949 10.6549 20.1438 12.424 19.7018C12.8795 19.588 13.1157 19.1009 12.9636 18.6568C12.8116 18.2126 12.3288 17.9804 11.8714 18.0863C10.4452 18.4164 8.95167 18.3644 7.54373 17.9282C5.86414 17.4079 4.3932 16.3675 3.34301 14.9573C2.29282 13.547 1.71763 11.8396 1.7004 10.0814C1.68316 8.3231 2.22476 6.60479 3.24711 5.17419C4.26945 3.7436 5.71971 2.67464 7.38878 2.12145C9.05784 1.56827 10.8595 1.55944 12.5339 2.09623C14.2083 2.63303 15.6689 3.68772 16.7053 5.10823C17.574 6.29899 18.1069 7.69523 18.2565 9.15146C18.3045 9.61844 18.6806 10 19.15 10Z" />
      </mask>
      <path
        d="M7.04064 19.5521L6.44876 21.4625L7.04064 19.5521ZM16.7053 5.10823L15.0895 6.28697L16.7053 5.10823ZM11.8714 18.0863L12.3224 20.0348L11.8714 18.0863ZM19.9639 9.15099L17.9711 9.32077L19.9639 9.15099ZM21.9567 8.9812C21.7709 6.8009 20.9916 4.70577 19.6944 2.92756L16.4629 5.28504C17.3277 6.47049 17.8473 7.86725 17.9711 9.32077L21.9567 8.9812ZM19.6944 2.92756C18.1961 0.873815 16.0843 -0.651037 13.6634 -1.42713L12.4423 2.38191C14.0562 2.89931 15.464 3.91588 16.4629 5.28504L19.6944 2.92756ZM13.6634 -1.42713C11.2426 -2.20322 8.63784 -2.19046 6.22474 -1.39067L7.48316 2.40622C9.09189 1.87303 10.8284 1.86452 12.4423 2.38191L13.6634 -1.42713ZM6.22474 -1.39067C3.81163 -0.590884 1.71487 0.954596 0.236781 3.02293L3.49119 5.34862C4.47658 3.96973 5.87442 2.93941 7.48316 2.40622L6.22474 -1.39067ZM0.236781 3.02293C-1.24131 5.09126 -2.02434 7.57556 -1.99942 10.1176L2.00038 10.0784C1.98377 8.38371 2.5058 6.7275 3.49119 5.34862L0.236781 3.02293ZM-1.99942 10.1176C-1.9745 12.6597 -1.14291 15.1282 0.375436 17.1671L3.58362 14.7781C2.57139 13.4188 2.017 11.7731 2.00038 10.0784L-1.99942 10.1176ZM0.375436 17.1671C1.89379 19.2061 4.02044 20.7102 6.44876 21.4625L7.63251 17.6417C6.01363 17.1401 4.59586 16.1374 3.58362 14.7781L0.375436 17.1671ZM6.44876 21.4625C8.5513 22.1139 10.7859 22.1726 12.9088 21.6421L11.9392 17.7614C10.5239 18.115 9.03417 18.0759 7.63251 17.6417L6.44876 21.4625ZM11.4205 16.1378C10.3379 16.3883 9.20426 16.3489 8.1356 16.0178L6.95186 19.8386C8.69908 20.38 10.5525 20.4444 12.3224 20.0348L11.4205 16.1378ZM8.1356 16.0178C6.86073 15.6228 5.74424 14.8332 4.9471 13.7627L1.73892 16.1518C3.04217 17.9019 4.86755 19.1929 6.95186 19.8386L8.1356 16.0178ZM4.9471 13.7627C4.14997 12.6923 3.71339 11.3963 3.7003 10.0618L-0.299505 10.101C-0.278116 12.2829 0.435665 14.4017 1.73892 16.1518L4.9471 13.7627ZM3.7003 10.0618C3.68722 8.72717 4.09831 7.42291 4.87431 6.33704L1.6199 4.01134C0.351212 5.78666 -0.320895 7.91902 -0.299505 10.101L3.7003 10.0618ZM4.87431 6.33704C5.65031 5.25116 6.75111 4.43979 8.01799 4.0199L6.75956 0.223008C4.68832 0.909491 2.8886 2.23603 1.6199 4.01134L4.87431 6.33704ZM8.01799 4.0199C9.28487 3.60001 10.6524 3.59331 11.9233 4.00076L13.1444 0.191713C11.0666 -0.474434 8.83081 -0.463476 6.75956 0.223008L8.01799 4.0199ZM11.9233 4.00076C13.1942 4.40821 14.3029 5.20875 15.0895 6.28697L18.321 3.92949C17.035 2.16669 15.2223 0.85786 13.1444 0.191713L11.9233 4.00076ZM15.0895 6.28697C15.7489 7.19078 16.1534 8.25058 16.267 9.35591L20.246 8.947C20.0603 7.13987 19.399 5.4072 18.321 3.92949L15.0895 6.28697ZM16.267 9.35591C16.4065 10.7139 17.5304 12 19.15 12V8C19.8307 8 20.2025 8.52301 20.246 8.947L16.267 9.35591ZM14.8558 18.009C14.3312 16.4767 12.7504 15.83 11.4205 16.1378L12.3224 20.0348C11.9072 20.1309 11.2919 19.9486 11.0715 19.3045L14.8558 18.009ZM12.9088 21.6421C14.6114 21.2167 15.3494 19.4508 14.8558 18.009L11.0715 19.3045C10.8819 18.751 11.1475 17.9592 11.9392 17.7614L12.9088 21.6421ZM17.9711 9.32077C17.9018 8.50769 18.5649 8 19.15 8V12C20.674 12 22.1057 10.7298 21.9567 8.9812L17.9711 9.32077Z"
        fill="#526EFF"
        mask="url(#path-1-inside-1_1051_5945)"
      />
    </svg>
  );
};

export default memo(SpinnerSVG);