import styled, { css } from "styled-components";
import React, { ReactNode } from "react";
import { ButtonSize, ButtonType } from "./enums";
import { Color } from "../../../common/enums";

type Props = {
  children: ReactNode;
  className?: string;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  backGroundColor?: Color;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  className,
  buttonType = ButtonType.DEFAULT,
  buttonSize = ButtonSize.SMALL,
  backGroundColor = Color.NONE,
  disabled = false,
}) => {
  return (
    <StyledButton
      buttonSize={buttonSize}
      buttonType={buttonType}
      className={className}
      backGroundColor={backGroundColor}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  backGroundColor: Color;
  disabled: boolean;
}>`
  display: flex;
  //justify-content: center;
  //align-items: center;
  cursor: ${({ disabled }) => !disabled && "pointer"};
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
          padding: 7px 12px 9px;
        `;
    }
  }}
  border: ${(props) =>
    props.buttonType === ButtonType.OUTLINED &&
    `2px solid ${props.theme.color.bluePrimary}`};
  border-radius: ${({ buttonType }) =>
    buttonType !== ButtonType.TEXT && "12px"};
  background: ${({ backGroundColor }) => backGroundColor};
  &:hover {
    border-color: ${(props) =>
      props.buttonType === ButtonType.OUTLINED &&
      props.theme.color.blueSecondary};
    & > * {
      color: ${(props) => props.theme.color.blueSecondary};
    }
  }
`;

export default Button;
