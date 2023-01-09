import styled from "styled-components";
import { FC } from "react";

type Props = {
  className?: string;
};

const BankBlock: FC<Props> = ({ className }) => {
  return (
    <ImagesContainer className={className}>
      <BankImage image="/assets/icons/absolute_bank_grey.webp" />
      <BankImage image="/assets/icons/soglasye_bank_grey.webp" />
      <BankImage image="/assets/icons/strahovaya_companya_grey.webp" />
      <BankImage image="/assets/icons/vsk_grey.webp" />
      <BankImage image="/assets/icons/renessans_grey.webp" />
      <BankImage image="/assets/icons/max_grey.webp" />
      <BankImage image="/assets/icons/alfa_grey.webp" />
      <BankImage image="/assets/icons/sogaz_grey.webp" />
      <BankImage image="/assets/icons/zetta_grey.webp" adaptVisibility={true} />
    </ImagesContainer>
  );
};

const BankImage = styled.div<{ image: string; adaptVisibility?: boolean }>`
  width: 188px;
  height: 47px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: ${({ adaptVisibility }) => adaptVisibility && "none"};
    width: 166px;
    height: 35px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 140px;
    height: 34px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 172px;
    height: 43px;
    background-position: unset;
    display: ${({ adaptVisibility }) => adaptVisibility && "none"};
  }
  @media screen and (max-width: 374px) {
    width: 140px;
    height: 35px;
    display: ${({ adaptVisibility }) => adaptVisibility && "none"};
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 31px;
  justify-content: space-between;
  width: 611px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    row-gap: 32px;
    width: 360px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: max-content;
    height: 34px;
    column-gap: 23px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 362px;
    height: 225px;
    row-gap: 18px;
    justify-content: space-between;
  }
  @media screen and (max-width: 375px) {
    width: 303px;
    height: 186px;
    row-gap: 15px;
    justify-content: space-between;
    overflow-x: visible;
  }
`;

export default BankBlock;
