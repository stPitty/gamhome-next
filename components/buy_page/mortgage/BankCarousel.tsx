import styled from "styled-components";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { TWindowSize } from "../../../redux/slicers/types";
import { carouselHandler, handleControlClick } from "./helpers";
import { WindowSize } from "../../../redux/slicers/enums";

const BankCarousel = () => {
  const [translate, setTranslate] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const containerRef = useRef(null);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const handleContainerWheel = (e: any) => {
    e.preventDefault();
    const values = carouselHandler(windowSize);
    if (values) {
      setTranslate((prev) => {
        if (e.deltaY > 0 && prev < values.width) {
          return prev + values.quantifier;
        }
        if (e.deltaY < 0 && prev > 0) {
          return prev - values.quantifier;
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    (containerRef.current! as HTMLDivElement)?.removeEventListener(
      "wheel",
      handleContainerWheel
    );
    setTranslate(0);
    (containerRef.current! as HTMLDivElement)?.addEventListener(
      "wheel",
      handleContainerWheel
    );

    return () =>
      (containerRef.current! as HTMLDivElement)?.removeEventListener(
        "wheel",
        handleContainerWheel
      );
  }, [windowSize]);

  const handleMouseUp = (e: TouchEvent) => {
    if (touchStart) {
      const value = touchStart - e.changedTouches[0].clientX;
      if (value > 0 && value > value - 100) {
        handleControlClick("right", translate, setTranslate, windowSize)();
      }
      if (value < 0 && Math.abs(value) > Math.abs(value) - 100) {
        handleControlClick("left", translate, setTranslate, windowSize)();
      }
    }
    setTouchStart(null);
  };

  const handleMouseDown = (e: TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  return (
    <Container>
      <ControlContainer
        onClick={handleControlClick(
          "left",
          translate,
          setTranslate,
          windowSize
        )}
      >
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
            <BankImage image="/assets/icons/fora_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/raifaizen_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/unicredit_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/dom_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/absolut_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/zenit_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/mkb_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/metall_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/atb_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/bspb_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/smp_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/otkrytye_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/sber_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/alfa_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/gazprom_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/vtb_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/rosbank_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/tkb_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/bjf_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/rh_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
          <BankItem>
            <BankImage image="/assets/icons/ps_bank.webp" />
            <CostContainer>
              <Percent>10,8%</Percent>
              <Price>97 543 ₽</Price>
            </CostContainer>
          </BankItem>
        </BankContainer>
      </BankWrapper>
      <ControlContainer
        onClick={handleControlClick(
          "right",
          translate,
          setTranslate,
          windowSize
        )}
      >
        <ChevronIcon type="right" />
      </ControlContainer>
    </Container>
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
  @media screen and (max-width: 1439px) {
    width: 160px;
    height: 40px;
  }
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
  transition: 0.1s linear;
  cursor: pointer;
  &:hover {
    background-color: ${LightBlueColor.LB_200};
  }
  &:active {
    background-color: ${LightBlueColor.LB_300};
  }
  @media screen and (max-width: 1439px) {
    height: 152px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 202px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 187px;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;

const BankContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 2696px;
  transition: 0.2s linear;
  touch-action: pan-x;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 2382px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 2233px;
  }
  @media screen and (max-width: 767px) {
    gap: 8px;
    width: 4360px;
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

export default BankCarousel;
