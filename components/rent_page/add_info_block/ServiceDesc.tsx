import styled from "styled-components";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import { BlackColor, Font } from "../../../common/enums";
import React, { memo } from "react";
import { Concierge, Owner, SafetyDeal } from "./enums";
import { Hook, Route } from "../../../common/routes";
import Link from "next/link";
import { useAppSelector } from "../../../redux/hooks";
import { TPathName, TWindowSize } from "../../../redux/slicers/types";
import { WindowSize } from "../../../redux/slicers/enums";

type Props = {
  headerText: Concierge | Owner | SafetyDeal;
  desc: Concierge | Owner | SafetyDeal;
  image: Concierge | Owner | SafetyDeal;
  cardType: "concierge" | "owner" | "safetyDeal";
  btnLink: Hook;
  onBtnClickHandler?: (windowSize: WindowSize | null) => () => void;
};

const ServiceDesc: React.FC<Props> = ({
  headerText,
  desc,
  image,
  cardType,
  btnLink,
  onBtnClickHandler = (windowSize: WindowSize | null) => () => {},
}) => {
  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  return (
    <Container
      cardType={cardType}
      image={image}
      isRent={pathName === Route.RENT}
    >
      <InfoWrapper isRent={pathName === Route.RENT} cardType={cardType}>
        <TextWrapper>
          <HeaderText>{headerText}</HeaderText>
          <DescText isRent={pathName === Route.RENT} cardType={cardType}>
            {desc}
          </DescText>
        </TextWrapper>
        {!onBtnClickHandler ||
        windowSize === WindowSize.XL ||
        windowSize === WindowSize.LG ? (
          <Link href={"#" + btnLink} scroll={false}>
            <StyledButton buttonSize={ButtonSize.MEDIUM}>
              Подробнее
            </StyledButton>
          </Link>
        ) : (
          <StyledButton
            onClick={onBtnClickHandler(windowSize)}
            buttonSize={ButtonSize.MEDIUM}
          >
            Подробнее
          </StyledButton>
        )}
      </InfoWrapper>
    </Container>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const StyledButton = styled(Button)`
  width: 123px;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const DescText = styled.p<{
  cardType: "concierge" | "owner" | "safetyDeal";
  isRent: boolean;
}>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  width: ${({ cardType, isRent }) =>
    !isRent && cardType === "concierge" ? "430px" : "448px"};
  margin: 0;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    width: ${({ cardType, isRent }) => {
      if (cardType === "concierge") {
        if (!isRent) return "350px";
        return "330px";
      }
      return "370px";
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: ${({ cardType, isRent }) => {
      if (cardType === "concierge") {
        if (!isRent) return "349px";
        return "330px";
      }
      return "349px";
    }};
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
  white-space: pre-wrap;
  @media screen and (max-width: 767px) {
    white-space: unset;
  }
`;

const InfoWrapper = styled.div<{
  cardType: "concierge" | "owner" | "safetyDeal";
  isRent: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 448px;
  row-gap: 24px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 376px;
  }
  @media screen and (max-width: 767px) {
    height: 100%;
    row-gap: ${({ cardType, isRent }) => {
      if (cardType === "concierge") {
        if (!isRent) return "210px";
        return "156px";
      }
      if (!isRent) return "215px";
      return "178px";
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: ${({ cardType }) => (cardType === "safetyDeal" ? "260px" : "288px")};
  }
`;

const Container = styled.div<{
  image: Concierge | Owner | SafetyDeal;
  cardType: "concierge" | "owner" | "safetyDeal";
  isRent: boolean;
}>`
  display: flex;
  width: 864px;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
  background: url(${({ image }) => image}) right no-repeat;
  background-size: 336px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    column-gap: 32px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
    background-size: ${({ cardType }) =>
      cardType === "concierge" ? "250px" : "220px"};
    background-position: right 50px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    background-size: ${({ cardType }) =>
      cardType === "concierge" ? "296px" : "264px"};
  }
  @media screen and (max-width: 767px) {
    background: url(${({ image, cardType, isRent }) => {
      if (!isRent) {
        if (cardType === "concierge") return "/images/man-sits.webp";
        return "/images/man-stands.webp";
      }
      return image;
    }})
      right no-repeat;

    background-size: ${({ cardType, isRent }) => {
      if (!isRent) return "349px";
      if (cardType === "concierge") return "242px";
      return "202px";
    }};

    height: ${({ cardType, isRent }) => {
      if (cardType === "concierge") {
        if (!isRent) return "370px";
        return "316px";
      }
      if (!isRent) return "407px";
      return "370px";
    }};
    background-position: ${({ cardType, isRent }) => {
      if (cardType === "concierge") {
        if (!isRent) return "center 128px";
        return "-20px 135px";
      }
      if (!isRent) return "center 160px";
      return "left 180px";
    }}};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    height: ${({ cardType, isRent }) => {
      if (!isRent) {
        if (cardType === "concierge") return "394px";
        if (cardType === "safetyDeal") return "463px";
      }
    }};
    background-size: ${({ cardType, isRent }) => !isRent && "330px"};
    background-position: ${({ cardType, isRent }) => {
      if (!isRent) {
        if (cardType === "concierge") return "center 152px";
        if (cardType === "safetyDeal") return "center 219px";
      }
      if (cardType === "owner") return "0 210px";
    }};
  }
`;

export default memo(ServiceDesc);
