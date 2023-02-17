import styled, { css } from "styled-components";
import { Dispatch, FC, memo, SetStateAction, SyntheticEvent } from "react";
import { BrandColor } from "../../../../common/enums";
import CloseSVG from "../../../../public/assets/svg/CloseSVG";
import { LargeModalState } from "./types";
import { largeModal } from "./constants";
import DoneSVG from "../../../../public/assets/svg/DoneSVG";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import { useAppDispatch } from "../../../../redux/hooks";

type Props = {
  type: LargeModalState;
  setIsOpened: Dispatch<SetStateAction<LargeModalState>>;
};

const LargeModal: FC<Props> = ({ setIsOpened, type }) => {
  const dispatch = useAppDispatch();
  const handleCloseClick = () => {
    setIsOpened(null);
  };

  const handleContainerClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleBtnClick = () => {
    setIsOpened(null);
    if (type) {
      dispatch(largeModal[type].btnAction());
    }
  };

  return (
    <Wrapper onClick={handleCloseClick} isOpened={!!type}>
      <Container onClick={handleContainerClick} type={type}>
        <CloseBtnContainer isOpened={!!type} onClick={handleCloseClick}>
          <StyledCloseIcon />
        </CloseBtnContainer>
        <ContentWrapper type={type}>
          <ContentContainer type={type}>
            <HeaderWrapper>
              <HeaderText>{type && largeModal[type].header}</HeaderText>
              <HeaderTextSub>Включает в себя:</HeaderTextSub>
            </HeaderWrapper>
            <GradientBlockTop type={type} />
            <PointsWrapper type={type}>
              <PointsContainer type={type}>
                {type &&
                  largeModal[type].points.map((el) => {
                    return (
                      <LIWrapper type={type} key={el}>
                        <DoneIconContainer>
                          <DoneIcon />
                        </DoneIconContainer>
                        <LIText>{el}</LIText>
                      </LIWrapper>
                    );
                  })}
              </PointsContainer>
            </PointsWrapper>
            <GradientBlockBottom type={type} />
          </ContentContainer>
          <ButtonContainer>
            <StyledButton
              modalType={type}
              buttonSize={ButtonSize.MEDIUM}
              onClick={handleBtnClick}
              isOpen={!!type}
            >
              {type && largeModal[type].buttonText}
            </StyledButton>
          </ButtonContainer>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  }
`;

const GradientBlock = styled.div<{ type: LargeModalState }>`
  width: 100%;
  height: 24px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: none;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1439px) {
    display: ${({ type }) => type === "sellOrBuy" && "block"};
  }
  @media screen and (max-width: 1023px) {
    display: ${({ type }) =>
      (type === "sellOrBuy" || type === "followDeal") && "block"};
  }
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const GradientBlockTop = styled(GradientBlock)`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  top: -1px;
`;

const GradientBlockBottom = styled(GradientBlock)`
  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  bottom: 47px;
`;

const StyledButton = styled(Button)<{
  modalType: LargeModalState;
  isOpen: boolean;
}>`
  height: 44px;
  width: fit-content;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  @media screen and (max-width: 1439px) {
    margin-top: ${({ modalType }) => modalType === "sellOrBuy" && "-16px"};
  }
  @media screen and (max-width: 1023px) {
    margin-top: ${({ modalType }) =>
      (modalType === "sellOrBuy" || modalType === "followDeal") && "-16px"};
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: -16px;
  }
`;

const LIText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.64);
`;

const DoneIcon = styled(DoneSVG)`
  & path {
    fill: white;
  }
`;

const DoneIconContainer = styled.div`
  min-width: 24px;
  height: 24px;
  background: #526eff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LIWrapper = styled.div<{ type: LargeModalState }>`
  display: flex;
  column-gap: 12px;
  width: ${({ type }) => {
    switch (type) {
      case "followDeal":
        return "492px";
      case "sellOrBuy":
        return "604px";
      case "key":
        return "100%";
    }
  }};
  @media screen and (max-width: 1439px) {
    width: ${({ type }) => {
      switch (type) {
        case "key":
          return "100%";
        default:
          return "424px";
      }
    }};
  }
  @media screen and (max-width: 1023px) {
    width: ${({ type }) => {
      switch (type) {
        case "followDeal":
          return "300px";
        case "sellOrBuy":
          return "300px";
        case "key":
          return "100%";
      }
    }};
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const PointsContainer = styled.div<{ type: LargeModalState }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  width: ${({ type }) => {
    switch (type) {
      case "followDeal":
        return "1008px";
      case "sellOrBuy":
        return "1232px";
      case "key":
        return "560px";
    }
  }};
  height: ${({ type }) => {
    switch (type) {
      case "followDeal":
        return "360px";
      case "sellOrBuy":
        return "576px";
      case "key":
        return "408px";
    }
  }};
  @media screen and (max-width: 1439px) {
    width: ${({ type }) => {
      switch (type) {
        case "key":
          return "560px";
        default:
          return "872px";
      }
    }};
    height: ${({ type }) => {
      switch (type) {
        case "followDeal":
          return "384px";
        case "sellOrBuy":
          return "648px";
        case "key":
          return "408px";
      }
    }};
    margin: ${({ type }) => type === "sellOrBuy" && "24px 0"};
  }
  @media screen and (max-width: 1023px) {
    margin: ${({ type }) =>
      (type === "sellOrBuy" || type === "followDeal") && "24px 0"};
    width: ${({ type }) => {
      switch (type) {
        case "followDeal":
          return "624px";
        case "sellOrBuy":
          return "624px";
        case "key":
          return "576px";
      }
    }};
    height: ${({ type }) => {
      switch (type) {
        case "followDeal":
          return "504px";
        case "sellOrBuy":
          return "840px";
        case "key":
          return "408px";
      }
    }};
  }
  @media screen and (max-width: 767px) {
    width: 346px;
    height: auto;
    margin: 16px 0;
  }
  @media screen and (max-width: 375px) {
    max-width: 288px;
  }
`;

const PointsWrapper = styled.div<{ type: LargeModalState }>`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1439px) {
    overflow: auto;
    position: relative;
    height: ${({ type }) => type === "sellOrBuy" && "408px"};
    top: ${({ type }) => type === "sellOrBuy" && "-24px"};
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 1023px) {
    height: 408px;
    top: ${({ type }) =>
      (type === "sellOrBuy" || type === "followDeal") && "-24px"};
  }
  @media screen and (max-width: 767px) {
    height: 408px;
    top: -24px;
  }
  @media screen and (max-width: 767px) {
    height: 344px;
  }
`;

const HeaderTextSub = styled.h2`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: rgba(36, 36, 36, 0.8);
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #242424;
  @media screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
`;

const ContentContainer = styled.div<{ type: LargeModalState }>`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (max-width: 1439px) {
    row-gap: ${({ type }) => type === "sellOrBuy" && "0"};
  }
  @media screen and (max-width: 1023px) {
    row-gap: ${({ type }) =>
      (type === "sellOrBuy" || type === "followDeal") && "0"};
  }
  @media screen and (max-width: 767px) {
    row-gap: 0;
  }
`;

const ContentWrapper = styled.div<{ type: LargeModalState }>`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-right: 40px;
  position: relative;
  top: -12px;
  @media screen and (max-width: 1439px) {
    row-gap: ${({ type }) => type === "sellOrBuy" && "0"};
  }
  @media screen and (max-width: 1023px) {
    margin-right: 32px;
    row-gap: ${({ type }) =>
      (type === "sellOrBuy" || type === "followDeal") && "0"};
  }
  @media screen and (max-width: 767px) {
    margin-right: 0;
    row-gap: 0;
  }
`;

const StyledCloseIcon = styled(CloseSVG)`
  height: 16px;
  width: 16px;
  & path {
    fill: ${BrandColor.BRAND};
  }
`;

const CloseBtnContainer = styled.div<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: 0.1s linear;
  margin-right: 16px;
  &:hover {
    background: ${BrandColor.BRAND_12};
  }
  &:active {
    background: ${BrandColor.BRAND_16};
  }
  @media screen and (max-width: 1023px) {
    margin-right: 8px;
  }
  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

const Container = styled.div<{ type: LargeModalState }>`
  display: flex;
  padding: 8px 0 28px 40px;
  background: #ffffff;
  border-radius: 16px;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1023px) {
    padding: 8px 0 20px 32px;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
    padding: 8px 13px 28px 16px;
    border-radius: 16px 16px 0 0;
    max-height: 100%;
  }
  @media screen and (max-width: 375px) {
    max-width: 320px;
  }
`;

const Wrapper = styled.div<{ isOpened: boolean }>`
  display: flex;
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 36, 36, 0.8);
  z-index: 6;
  @media screen and (max-width: 767px) {
    align-items: flex-end;
  }
`;

export default memo(LargeModal);
