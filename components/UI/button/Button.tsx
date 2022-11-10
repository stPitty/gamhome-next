import styled, { css, keyframes } from "styled-components";
import React, { memo, ReactNode } from "react";
import { ButtonSize, ButtonType } from "./enums";
import { Color } from "../../../common/types";
import { BrandColor, WhiteColor } from "../../../common/enums";
import SpinnerSVG from "../../../public/assets/svg/SpinnerSVG";

type Props = {
  children: ReactNode;
  className?: string;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  backGroundColor?: Color;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  children,
  className,
  buttonType = ButtonType.PRIMARY,
  buttonSize = ButtonSize.SMALL,
  backGroundColor = "none",
  disabled = false,
  loading = false,
  onClick,
}) => {
  const handleClick = (func: (() => void) | undefined) => () => {
    if (func && !loading && !disabled) {
      func();
    }
  };

  return (
    <StyledButton
      buttonSize={buttonSize}
      buttonType={buttonType}
      className={className}
      backGroundColor={backGroundColor}
      disabled={disabled}
      loading={loading}
      onClick={handleClick(onClick)}
    >
      {!loading ? children : <StyledSpinner />}
    </StyledButton>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(SpinnerSVG)`
  animation: ${rotate} 0.5s linear infinite;
`;

const StyledButton = styled.button<{
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  backGroundColor: Color;
  disabled: boolean;
  loading: boolean;
}>`
  display: flex;
  cursor: ${({ disabled, loading }) => !disabled && !loading && "pointer"};
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  ${({ buttonType, disabled, loading }) => {
    switch (buttonType) {
      case ButtonType.OUTLINE:
        return css`
          border: 2px solid
            ${disabled ? BrandColor.BRAND_DISABLED : BrandColor.BRAND};
          background: none;
          & > * {
            color: ${disabled ? BrandColor.BRAND_DISABLED : BrandColor.BRAND};
          }
          &:hover {
            background: ${!disabled && !loading && BrandColor.BRAND_12};
          }
          &:active {
            background: ${!disabled && !loading && BrandColor.BRAND_16};
          }
        `;
      case ButtonType.PRIMARY:
        return css`
          border: none;
          background: ${!disabled
            ? BrandColor.BRAND
            : BrandColor.BRAND_DISABLED};
          & > * {
            color: ${WhiteColor.WHITE};
          }
          & > svg path {
            fill: white;
          }
          &:hover {
            background: ${!disabled && !loading && BrandColor.BRAND_HOVER};
          }
          &:active {
            background: ${!disabled && !loading && BrandColor.BRAND_ACTIVE};
          }
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case ButtonSize.MEDIUM:
        return css``;
      case ButtonSize.LARGE:
        return css`
          width: 100%;
        `;
      default:
        return css`
          padding: 7px 10px 9px;
        `;
    }
  }}
`;

export default memo(Button);
