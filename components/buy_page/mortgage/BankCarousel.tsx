import styled from "styled-components";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";

const BankCarousel = () => {
  return (
    <Container>
      <ControlContainer>
        <ChevronIcon type="left" />
      </ControlContainer>
      <BankContainer>
        <BankItem>
          <BankImage image="/assets/icons/fora_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/raifaizen_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/unicredit_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/dom_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/absolut_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/vtb_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/otkrytye_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/sber_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/alfa_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
        <BankItem>
          <BankImage image="/assets/icons/gazprom_bank.png" />
          <CostContainer>
            <Percent>10,8%</Percent>
            <Price>97 543 ₽</Price>
          </CostContainer>
        </BankItem>
      </BankContainer>
      <ControlContainer>
        <ChevronIcon type="right" />
      </ControlContainer>
    </Container>
  );
};

const Price = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const Percent = styled.div`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const CostContainer = styled.div`
  display: flex;
  row-gap: 4px;
  flex-direction: column;
`;

const BankImage = styled.div<{ image: string }>`
  width: 200px;
  height: 50px;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

const BankItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 162px;
  background: ${LightBlueColor.LB_100};
  border-radius: 8px;
  padding: 16px 0 16px 16px;
  row-gap: 24px;
`;

const BankContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const ChevronIcon = styled(ChevronSVG)<{ type: "left" | "right" }>`
  transform: rotate(${({ type }) => (type === "right" ? "180" : "0")}deg);
  height: 14px;
  width: 8px;
  & path {
    fill: ${BlackColor.BLACK_80};
  }
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`;

const Container = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: space-between;
  align-items: center;
`;

export default BankCarousel;
