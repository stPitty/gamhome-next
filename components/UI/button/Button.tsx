import styled, { css, keyframes } from "styled-components";
import React, { memo, ReactNode } from "react";
import { ButtonSize, ButtonType } from "./enums";
import { Color } from "../../../common/types";
import {
  BlackColor,
  BrandColor,
  Font,
  PurpleColor,
  PWBtnColor,
  WhiteColor,
} from "../../../common/enums";
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
  width?: number;
  type?: "button" | "submit" | "reset";
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
  width,
  type = "button",
}) => {
  const handleClick = (func: (() => void) | undefined) => () => {
    if (func && !loading && !disabled) {
      func();
    }
  };

  return (
    <StyledButton
      type={type}
      buttonSize={buttonSize}
      buttonType={buttonType}
      className={className}
      backGroundColor={backGroundColor}
      disabled={disabled}
      loading={loading}
      onClick={handleClick(onClick)}
      width={width}
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
  width?: number;
}>`
  display: flex;
  cursor: ${({ disabled, loading }) => !disabled && !loading && "pointer"};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  transition: 0.1s all linear;
  font-family: ${Font.ROBOTO};
  font-weight: 500;

  ${({ buttonType, disabled, loading }) => {
    switch (buttonType) {
      case ButtonType.OUTLINE:
        return css`
          border: 2px solid
            ${disabled ? BrandColor.BRAND_DISABLED : BrandColor.BRAND};
          background: none;
          color: ${disabled ? BrandColor.BRAND_DISABLED : BrandColor.BRAND};
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
          color: ${WhiteColor.WHITE};
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
      case ButtonType.PRIMARY_PURPLE:
        return css`
          border: none;
          background: ${!disabled
            ? PurpleColor.PURPLE
            : PurpleColor.PURPLE_DISABLED};
          color: ${WhiteColor.WHITE};
          & > svg path {
            fill: white;
          }
          &:hover {
            background: ${!disabled && !loading && PurpleColor.PURPLE_HOVER};
          }
          &:active {
            background: ${!disabled && !loading && PurpleColor.PURPLE_ACTIVE};
          }
        `;
      case ButtonType.PRIMARY_WB:
        return css`
          border: none;
          background: ${!disabled ? WhiteColor.WHITE : PWBtnColor.P_W_DISABLED};
          color: ${!disabled
            ? BlackColor.BLACK_SECONDARY
            : BlackColor.BLACK_16};
          & > svg path {
            fill: black;
          }
          &:hover {
            background: ${!disabled && !loading && PWBtnColor.P_W_HOVER};
          }
          &:active {
            background: ${!disabled && !loading && PWBtnColor.P_W_ACTIVE};
          }
        `;
      case ButtonType.PRIMARY_WHITE:
        return css`
          border: none;
          background: ${!disabled ? WhiteColor.WHITE : PWBtnColor.P_W_DISABLED};
          color: ${!disabled ? BrandColor.BRAND : BrandColor.BRAND_DISABLED};
          & > svg path {
            fill: ${BrandColor.BRAND};
          }
          &:hover {
            background: ${!disabled && !loading && PWBtnColor.P_W_HOVER};
          }
          &:active {
            background: ${!disabled && !loading && PWBtnColor.P_W_ACTIVE};
          }
        `;
      case ButtonType.FLAT:
        return css`
          border: none;
          background: none;
          color: ${!disabled ? BrandColor.BRAND : BrandColor.BRAND_DISABLED};
          & > svg path {
            fill: ${BrandColor.BRAND};
          }
          &:hover {
            background: ${!disabled && !loading && BrandColor.BRAND_12};
          }
          &:active {
            background: ${!disabled && !loading && BrandColor.BRAND_16};
          }
        `;
      case ButtonType.FLAT_WHITE:
        return css`
          border: none;
          background: none;
          color: ${!disabled ? WhiteColor.WHITE : WhiteColor.WHITE_16};
          & > svg path {
            fill: ${WhiteColor.WHITE};
          }
          &:hover {
            background: ${!disabled && !loading && BrandColor.BRAND_12};
          }
          &:active {
            background: ${!disabled && !loading && BrandColor.BRAND_16};
          }
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case ButtonSize.MEDIUM:
        return css`
          padding: 9px 18px 11px;
          font-size: 16px;
          line-height: 24px;
        `;
      case ButtonSize.LARGE:
        return css`
          height: 56px;
          padding: 15px 32px;
          font-size: 16px;
          line-height: 24px;
        `;
      default:
        return css`
          padding: 6px 10px 9px;
          font-size: 13px;
        `;
    }
  }}
`;

export default memo(Button);
