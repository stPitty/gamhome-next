import styled from "styled-components";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import { BlackColor } from "../../../common/enums";
import { FC, memo, useEffect, useState } from "react";
import BankModal from "./BankModal";
import { IBank, IBanksData } from "./types";
import { ErrorMessages } from "./enums";
import BanksErrorBlock from "./BanksErrorBlock";
import useEmblaCarousel from "embla-carousel-react";
import { handleLeftClick, handleRightClick } from "./helpers";
import BankItems from "./BankItems";

type Props = {
  cost: string;
  firstPay: string;
  time: string;
  data: IBanksData;
};

const BankCarousel: FC<Props> = ({ cost, firstPay, time, data }) => {
  const [bankData, setBankData] = useState<IBank | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  useEffect(() => {
    if (bankData) {
      document.querySelector("html")!.style.overflowY = "hidden";
    } else {
      document.querySelector("html")!.style.overflowY = "unset";
    }
  }, [bankData]);

  const handleOpenModal = (data: IBank) => () => {
    setBankData(data);
  };

  return (
    <>
      <Container>
        {!data || data?.minimalBankMortgageOffers.length === 0 ? (
          <BanksErrorBlock message={ErrorMessages.EMPTY_DATA} />
        ) : (
          <>
            <ControlContainer onClick={handleLeftClick(emblaApi)}>
              <ChevronIcon type="left" />
            </ControlContainer>
            <BankWrapper ref={emblaRef}>
              <BankContainer>
                <BankItems data={data} handleOpenModal={handleOpenModal} />
              </BankContainer>
            </BankWrapper>
            <ControlContainer onClick={handleRightClick(emblaApi)}>
              <ChevronIcon type="right" />
            </ControlContainer>
          </>
        )}
      </Container>
      <BankModal
        isOpen={!!bankData}
        setIsOpen={setBankData}
        bankData={bankData}
        cost={cost}
        firsPay={firstPay}
        time={time}
      />
    </>
  );
};

const BankWrapper = styled.div`
  width: 1216px;
  overflow-x: hidden;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 856px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 592px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    overflow: visible;
  }
`;

const BankContainer = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 767px) {
    gap: 8px;
  }
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
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: space-between;
  align-items: center;
`;

export default memo(BankCarousel);
