import styled from "styled-components";
import Button from "../UI/button/Button";
import { ButtonSize } from "../UI/button/enums";
import { BlackColor, Font } from "../../common/enums";
import React, { memo } from "react";
import { Concierge, Owner } from "./enums";
import { Hook } from "../../common/routes";
import Link from "next/link";

type Props = {
  headerText: Concierge | Owner;
  desc: Concierge | Owner;
  image: Concierge | Owner;
  cardType: "concierge" | "owner";
  btnLink: Hook;
};

const ServiceDesc: React.FC<Props> = ({
  headerText,
  desc,
  image,
  cardType,
  btnLink,
}) => {
  return (
    <Container cardType={cardType} image={image}>
      <InfoWrapper cardType={cardType}>
        <TextWrapper>
          <HeaderText>{headerText}</HeaderText>
          <DescText cardType={cardType}>{desc}</DescText>
        </TextWrapper>
        <Link href={"#" + btnLink} scroll={false}>
          <StyledButton buttonSize={ButtonSize.MEDIUM}>Подробнее</StyledButton>
        </Link>
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
  cardType: "concierge" | "owner";
}>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  width: 448px;
  margin: 0;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    width: ${({ cardType }) => (cardType === "concierge" ? "330px" : "370px")};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: ${({ cardType }) => (cardType === "concierge" ? "330px" : "349px")};
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
`;

const InfoWrapper = styled.div<{
  cardType: "concierge" | "owner";
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
    row-gap: ${({ cardType }) =>
      cardType === "concierge" ? "156px" : "178px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Container = styled.div<{
  image: Concierge | Owner;
  cardType: "concierge" | "owner";
}>`
  display: flex;
  width: 864px;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
  background: url(${({ image }) => image}) right no-repeat;
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
    background-size: ${({ cardType }) =>
      cardType === "concierge" ? "242px" : "202px"};
    height: ${({ cardType }) => (cardType === "concierge" ? "316px" : "370px")};
    background-position: ${({ cardType }) =>
      cardType === "concierge" ? "-20px 135px" : "left 180px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

export default memo(ServiceDesc);
