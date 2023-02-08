import styled from "styled-components";
import { Hook } from "../../../../common/routes";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import ChevronSVG from "../../../../public/assets/svg/ChevronSVG";
import Image from "next/image";
import { useAppSelector } from "../../../../redux/hooks";
import { TWindowSize } from "../../../../redux/slicers/types";
import { WindowSize } from "../../../../redux/slicers/enums";
import {
  handleEmblaSelect,
  handleLeftBtnClick,
  handleRightBtnClick,
} from "./helpers";
import { OPTIONS } from "./constants";
import clsx from "clsx";

const Reports = () => {
  const [isInit, setIsInit] = useState<boolean>(false);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const handleEmblaSlide = useCallback(
    handleEmblaSelect(emblaApi, windowSize),
    [emblaApi, windowSize]
  );

  const commonSlide = useMemo(() => {
    return clsx({
      selected: windowSize !== WindowSize.LG,
    });
  }, [windowSize]);

  const lgSlide = useMemo(() => {
    return clsx({
      selected: windowSize === WindowSize.LG,
    });
  }, []);

  useEffect(() => {
    if (emblaApi) {
      if (!isInit) setIsInit(true);
      emblaApi.on("select", handleEmblaSlide);
    }
  }, [emblaApi, windowSize]);

  useEffect(() => {
    if (isInit) {
      emblaApi?.reInit(OPTIONS);
    }
  }, [windowSize]);

  return (
    <Wrapper id={Hook.REPORTS}>
      <Container>
        <HeaderText>Отзывы</HeaderText>
        <ContentWrapper>
          <ControlBtnLeft onClick={handleLeftBtnClick(emblaApi)}>
            <ChevronSVG />
          </ControlBtnLeft>
          <ReportsWrapper ref={emblaRef}>
            <ReportsContainer>
              <Slide>
                <ImageContainer className={commonSlide}>
                  <Image
                    src="/images/landing/report_1.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer className={lgSlide}>
                  <Image
                    src="/images/landing/report_2.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_3.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_4.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_5.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_6.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_7.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_8.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_9.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
              <Slide>
                <ImageContainer>
                  <Image
                    src="/images/landing/report_10.jpg"
                    alt="review screenshot"
                    loading="lazy"
                    fill
                  />
                </ImageContainer>
              </Slide>
            </ReportsContainer>
          </ReportsWrapper>
          <ControlBtnRight onClick={handleRightBtnClick(emblaApi)}>
            <ChevronSVG />
          </ControlBtnRight>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const ControlBtn = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(200, 212, 223, 0.8);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: 0.1s linear;
  @media screen and (max-width: 1023px) {
    display: none;
  }
  &:hover {
    background: #c8d4df;
  }
  &:active {
    background: #f5f7f9;
  }
`;

const ControlBtnLeft = styled(ControlBtn)`
  left: 16px;
`;

const ControlBtnRight = styled(ControlBtn)`
  right: 16px;
  transform: rotate(180deg);
`;

const ImageContainer = styled.div`
  height: 423px;
  width: 195px;
  transition: 0.3s linear;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  &.selected {
    width: 230px;
    height: 498px;
  }
  &.moved {
    left: 17.5px;
  }
  @media screen and (max-width: 1439px) {
    &.moved {
      left: 35px;
    }
  }
  @media screen and (max-width: 1023px) {
    &.moved {
      left: 17.5px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 167.51px;
    height: 363.36px;
    border-radius: 20.6163px;
    &.selected {
      width: 197.57px;
      height: 427.79px;
    }
    &.moved {
      left: 14.5px;
    }
  }
`;

const Slide = styled.div`
  min-width: 0;
  flex: 0 0 fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 29.75px;
  @media screen and (max-width: 1439px) {
    padding: 0 22.83px;
  }
  @media screen and (max-width: 1023px) {
    padding: 0 17px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 14.6px;
  }
`;

const ReportsContainer = styled.div`
  display: flex;
  width: 1248px;
  height: 498px;
  @media screen and (max-width: 1439px) {
    width: 952px;
    height: 498px;
    position: relative;
    right: 23px;
  }
  @media screen and (max-width: 1023px) {
    width: 688px;
    height: 498px;
    right: 0;
  }
  @media screen and (max-width: 767px) {
    width: 591px;
    height: 427.79px;
  }
`;

const ReportsWrapper = styled.div`
  overflow: hidden;
  margin-left: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: 1439px) {
    margin-bottom: 0;
  }
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
  @media screen and (max-width: 1023px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 72px;
  }
`;

export default Reports;
