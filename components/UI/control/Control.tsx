import React, { memo, ReactNode } from "react";
import styled, { css } from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { handleSwapImageClick } from "../../../common/helpers";

type Props = {
  orientation: "right" | "left";
  children: ReactNode;
  length: number | undefined;
  className?: string;
};

const Control: React.FC<Props> = ({
  orientation,
  children,
  className,
  length,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Body
      onClick={handleSwapImageClick(orientation, dispatch, length)}
      orientation={orientation}
      className={className}
    >
      {children}
    </Body>
  );
};

const Body = styled.div<{ orientation: "right" | "left" }>`
  transition: 0.1s all linear;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    min-width: 48px;
    height: 48px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default memo(Control);
