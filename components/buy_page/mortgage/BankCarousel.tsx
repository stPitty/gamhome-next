import styled from "styled-components";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import { useEffect, useRef, useState } from "react";
import { WindowSize } from "../../../redux/slicers/enums";
import {
  decrement,
  increment,
} from "../../../redux/slicers/photoPositionSlicer";

const BankCarousel = () => {
  const [translate, setTranslate] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const containerRef = useRef(null);

  const handleContainerWheel = (e: any) => {
    e.preventDefault();
    setTranslate((prev) => {
      if (e.deltaY > 0 && prev < 1348) {
        return prev + 246;
      }
      if (e.deltaY < 0 && prev > 0) {
        return prev - 246;
      }
      return prev;
    });
  };

  useEffect(() => {
    (containerRef.current! as HTMLDivElement).addEventListener(
      "wheel",
      handleContainerWheel
    );

    return () =>
      (containerRef.current! as HTMLDivElement).removeEventListener(
        "wheel",
        handleContainerWheel
      );
  }, []);

  const handleControlClick = (type: "left" | "right") => () => {
    if (type === "left" && translate > 0) {
      setTranslate((prev) => prev - 246);
    }
    if (type === "right" && translate < 1348) {
      setTranslate((prev) => prev + 246);
    }
  };

  const handleMouseUp = (e: TouchEvent) => {
    if (touchStart) {
      const value = touchStart - e.changedTouches[0].clientX;
      if (value > 0 && value > value - 100) {
        handleControlClick("right")();
      }
      if (value < 0 && Math.abs(value) > Math.abs(value) - 100) {
        handleControlClick("left")();
      }
    }
    setTouchStart(null);
  };

  const handleMouseDown = (e: TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  return (
    <Container>
      <ControlContainer onClick={handleControlClick("left")}>
        <ChevronIcon type="left" />
      </ControlContainer>
      <BankWrapper>
        <BankContainer
          ref={containerRef}
          style={{ transform: `translateX(-${translate}px)` }}
          onTouchStart={handleMouseDown as any}
          onTouchEnd={handleMouseUp as any}
        >
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
            <BankImage image="/assets/icons/zenit_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/mkb_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/metall_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/atb_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/bspb_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/smp_bank.png" />
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
          <BankItem>
            <BankImage image="/assets/icons/vtb_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/rosbank_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/tkb_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/bjf_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/rh_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/ps_bank.png" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
        </BankContainer>
      </BankWrapper>
      <ControlContainer onClick={handleControlClick("right")}>
        <ChevronIcon type="right" />
      </ControlContainer>
    </Container>
  );
};

const BankWrapper = styled.div`
  width: 1216px;
  overflow-x: hidden;
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
  width: 2696px;
  transition: 0.15s linear;
  touch-action: pan-x;
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
`;

const Container = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: space-between;
  align-items: center;
`;

export default BankCarousel;
