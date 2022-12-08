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
      <InfoWrapper>
        <HeaderText>{headerText}</HeaderText>
        <DescText cardType={cardType}>{desc}</DescText>
        <Link href={"#" + btnLink} scroll={false}>
          <Button width={123} buttonSize={ButtonSize.MEDIUM}>
            Подробнее
          </Button>
        </Link>
      </InfoWrapper>
    </Container>
  );
};

const DescText = styled.p<{
  cardType: "concierge" | "owner";
}>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  width: 448px;
  margin: 0 0 24px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    width: ${({ cardType }) => (cardType === "concierge" ? "330px" : "370px")};
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 12px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 448px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 376px;
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
`;

export default memo(ServiceDesc);
