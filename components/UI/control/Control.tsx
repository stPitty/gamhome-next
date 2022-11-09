import React, { Dispatch, memo, ReactNode, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { BrandColor, LightBlueColor } from "../../../common/enums";

type Props = {
  orientation: "right" | "left";
  children: ReactNode;
  setPosition: Dispatch<SetStateAction<number>>;
  length: number;
  className?: string;
};

const Control: React.FC<Props> = ({
  orientation,
  children,
  className,
  setPosition,
  length,
}) => {
  const handleSwapClick = () => {
    switch (orientation) {
      case "left":
        setPosition((prevState) =>
          prevState === 0 ? prevState : prevState - 1
        );
        break;
      case "right":
        setPosition((prevState) =>
          prevState === length - 1 ? prevState : prevState + 1
        );
        break;
    }
  };

  return (
    <Body
      onClick={handleSwapClick}
      orientation={orientation}
      className={className}
    >
      {children}
    </Body>
  );
};

const Body = styled.div<{ orientation: "right" | "left" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 10px;
  min-width: 56px;
  height: 56px;
  background: ${LightBlueColor.LB_300};
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  ${({ orientation }) => {
    switch (orientation) {
      case "right":
        return css`
          right: 32px;
        `;
      case "left":
        return css`
          left: 32px;
        `;
    }
  }};
  & > * {
    transform: ${({ orientation }) =>
      orientation === "right" && "rotate(180deg)"};
  }
  &:active {
    background: ${LightBlueColor.LB_200};
  }
`;

export default memo(Control);
