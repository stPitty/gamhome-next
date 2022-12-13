import React, { memo } from "react";
import styled, { css } from "styled-components";

type Props = {
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
};

const AdaptiveTextDivider: React.FC<Props> = ({ xl, lg, md, sm, xs }) => {
  return <StyledBR xl={xl} lg={lg} md={md} sm={sm} xs={xs} />;
};

const StyledBR = styled.br<
  Record<"xl" | "lg" | "md" | "sm" | "xs", boolean | undefined>
>`
  display: none;
  ${({ xl }) =>
    xl &&
    css`
      @media screen and (min-width: 1440px) {
        display: block;
      }
    `}
  ${({ lg }) =>
    lg &&
    css`
      @media screen and (max-width: 1439px) and (min-width: 1024px) {
        display: block;
      }
    `}
  ${({ md }) =>
    md &&
    css`
      @media screen and (max-width: 1023px) and (min-width: 768px) {
        display: block;
      }
    `}
  ${({ sm }) =>
    sm &&
    css`
      @media screen and (max-width: 767px) and (min-width: 375px) {
        display: block;
      }
    `}
  ${({ xs }) =>
    xs &&
    css`
      @media screen and (max-width: 374px) {
        display: block;
      }
    `}
`;
export default memo(AdaptiveTextDivider);
