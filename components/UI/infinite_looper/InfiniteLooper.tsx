import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  speed: number;
  direction: "right" | "left";
  children: ReactNode;
};

const InfiniteLooper: FC<Props> = ({ speed, direction, children }) => {
  const [looperInstances, setLooperInstances] = useState(2);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const resetAnimation = () => {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  };

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;
    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 2
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <Looper ref={outerRef}>
      <LooperInnerList ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <LooperListInstance
            key={ind}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </LooperListInstance>
        ))}
      </LooperInnerList>
    </Looper>
  );
};

const slideAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Looper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LooperInnerList = styled.div`
  display: flex;
  width: max-content;
  justify-content: flex-start;
  &[data-animate="true"] {
    animation: ${slideAnimation} linear infinite;
  }
`;

const LooperListInstance = styled.div`
  display: flex;
  width: fit-content;
  animation: ${slideAnimation} linear infinite;
`;

export default InfiniteLooper;
