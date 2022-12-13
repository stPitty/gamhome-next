import React, { ReactNode, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BrandColor, Font } from "../../../common/enums";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";

type Props = {
  children: ReactNode;
  minHeight: number;
  className?: string;
  preventDefault?: boolean;
};

const DeployableWrapper: React.FC<Props> = ({
  children,
  className,
  minHeight,
  preventDefault = false,
}) => {
  const [prevHeight, setPrevHeight] = useState<number | null>(null);
  const [isDeployed, setIsDeployed] = useState<boolean>(false);

  const wrapperRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const handleDeployClick = () => {
    if (wrapperRef.current) {
      setPrevHeight(wrapperRef.current.offsetHeight);
    }
    setIsDeployed((prev) => !prev);
  };

  return (
    <Wrapper isDeployed={isDeployed} className={className}>
      <ChildrenContainer
        minHeight={minHeight}
        height={prevHeight}
        isDeployed={isDeployed}
      >
        <ChildrenWrapper ref={wrapperRef}>{children}</ChildrenWrapper>
      </ChildrenContainer>
      <DeployBtnContainer prevent={preventDefault} onClick={handleDeployClick}>
        <BtnText>{isDeployed ? "Свернуть" : "Показать все"}</BtnText>
        <ChevronIconContainer>
          <ChevronIcon isDeployed={isDeployed} />
        </ChevronIconContainer>
      </DeployBtnContainer>
    </Wrapper>
  );
};

const ChildrenWrapper = styled.div`
  display: flex;
  height: fit-content;
`;

const ChildrenContainer = styled.div<{
  isDeployed: boolean;
  height: number | null;
  minHeight: number;
}>`
  @media screen and (max-width: 767px) and (min-width: 375px) {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    transition: 0.2s linear;
    height: ${({ isDeployed, height, minHeight }) =>
      !isDeployed ? `${minHeight}px` : height ? `${height}px` : "auto"};
  }
`;

const ChevronIcon = styled(ChevronSVG)<{ isDeployed: boolean }>`
  transform: rotate(${({ isDeployed }) => (isDeployed ? "90deg" : "-90deg")});
  transition: 0.2s linear;
  width: 7px;
  height: 12px;
  & path {
    fill: ${BrandColor.BRAND};
    transition: 0.1s linear;
  }
`;

const ChevronIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const BtnText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BrandColor.BRAND};
  margin: 0;
  transition: 0.1s linear;
`;

const DeployBtnContainer = styled.div<{ prevent: boolean }>`
  display: none;
  cursor: pointer;
  width: fit-content;
  position: relative;
  &:hover {
    & svg path {
      fill: ${BrandColor.BRAND_HOVER};
    }
    & p {
      color: ${BrandColor.BRAND_HOVER};
    }
  }
  &:active {
    & svg path {
      fill: ${BrandColor.BRAND_ACTIVE};
    }
    & p {
      color: ${BrandColor.BRAND_ACTIVE};
    }
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    display: ${({ prevent }) => !prevent && "flex"};
  }
`;

const Wrapper = styled.div<{ isDeployed: boolean }>`
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    flex-wrap: nowrap;
    width: 349px;
    row-gap: 16px;
  }
`;

export default DeployableWrapper;
