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
      <BankImage image="/assets/icons/zetta_grey.webp" lgVisibility={true} />
    </ImagesContainer>
  );
};

const BankImage = styled.div<{ image: string; lgVisibility?: boolean }>`
  width: 183px;
  height: 47px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: ${({ lgVisibility }) => lgVisibility && "none"};
    width: 166px;
    height: 35px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 133px;
    height: 34px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 31px;
  width: 611px;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    row-gap: 32px;
    column-gap: 28px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: max-content;
    height: 34px;
    column-gap: 23px;
  }
`;

export default BankBlock;
