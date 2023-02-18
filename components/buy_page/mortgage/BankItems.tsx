import { IBank, IBanksData } from "./types";
import Image from "next/image";
import { handleMoneyDataFormatter } from "../../../common/helpers";
import { FC, memo, useMemo } from "react";
import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TWindowSize } from "../../../redux/slicers/types";
import { handleGetFormattedData, handleGetIsTwoLevels } from "./helpers";

type Props = {
  data: IBanksData;
  handleOpenModal: (data: IBank) => () => void;
};

const BankItems: FC<Props> = ({ data, handleOpenModal }) => {
  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const isTwoLevels = useMemo(handleGetIsTwoLevels(windowSize), [windowSize]);

  const formattedData = useMemo(handleGetFormattedData(isTwoLevels, data), [
    isTwoLevels,
  ]);

  return (
    <>
      {isTwoLevels
        ? formattedData?.map((el) => {
            return (
              <VerticalBankContainer>
                {(el as unknown as IBanksData["minimalBankMortgageOffers"]).map(
                  (el) => {
                    return (
                      <BankItem
                        key={el.bank.name}
                        onClick={handleOpenModal(el)}
                      >
                        <LogoContainer>
                          <ImageContainer>
                            <Image
                              src={el.bank.iconUrl}
                              alt={`${el.bank.name} лого`}
                              fill
                              loading="lazy"
                            />
                          </ImageContainer>
                          <BankName>{el.bank.name}</BankName>
                        </LogoContainer>
                        <CostContainer>
                          <Percent>{el.minimalPercent}%</Percent>
                          <Price>
                            {handleMoneyDataFormatter(el.minimalPayment)} ₽
                          </Price>
                        </CostContainer>
                      </BankItem>
                    );
                  }
                )}
              </VerticalBankContainer>
            );
          })
        : (
            formattedData as unknown as IBanksData["minimalBankMortgageOffers"]
          ).map((el) => {
            return (
              <BankItem key={el.bank.name} onClick={handleOpenModal(el)}>
                <LogoContainer>
                  <ImageContainer>
                    <Image
                      src={el.bank.iconUrl}
                      alt={`${el.bank.name} лого`}
                      fill
                      loading="lazy"
                    />
                  </ImageContainer>
                  <BankName>{el.bank.name}</BankName>
                </LogoContainer>
                <CostContainer>
                  <Percent>{el.minimalPercent}%</Percent>
                  <Price>{handleMoneyDataFormatter(el.minimalPayment)} ₽</Price>
                </CostContainer>
              </BankItem>
            );
          })}
    </>
  );
};

const VerticalBankContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  flex: 0 0 230px;
  min-width: 0;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    flex: 0 0 202px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex: 0 0 187px;
  }
  @media screen and (max-width: 767px) {
    flex: 0 0 200px;
    gap: 8px;
  }
`;

const BankName = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  @media screen and (max-width: 1439px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  @media screen and (max-width: 1439px) {
    height: 32px;
    width: 32px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  column-gap: 3px;
  height: 50px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 1439px) {
    height: 40px;
    column-gap: 5px;
  }
`;

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

const BankItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 230px;
  min-width: 0;
  max-height: 162px;
  background: ${LightBlueColor.LB_100};
  border-radius: 8px;
  padding: 16px 0 16px 16px;
  row-gap: 24px;
  transition: 0.1s linear;
  cursor: pointer;
  &:hover {
    background-color: ${LightBlueColor.LB_200};
  }
  &:active {
    background-color: ${LightBlueColor.LB_300};
  }
  @media screen and (max-width: 1439px) {
    max-height: 152px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    flex: 0 0 202px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex: 0 0 187px;
  }
  @media screen and (max-width: 767px) {
    flex: 0 0 200px;
  }
`;

export default memo(BankItems);
