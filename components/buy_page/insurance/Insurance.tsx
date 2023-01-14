import styled, { keyframes } from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import UsersSVG from "../../../public/assets/svg/UsersSVG";
import PriceSVG from "../../../public/assets/svg/PriceSVG";
import MoneySVG from "../../../public/assets/svg/MoneySVG";
import PeopleSVG from "../../../public/assets/svg/PeopleSVG";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import InfiniteLooper from "../../UI/infinite_looper/InfiniteLooper";
import BankBlock from "../mortgage/BankBlock";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { useAppDispatch } from "../../../redux/hooks";
import { insurance } from "../../../redux/slicers/modalStateSlicer";

const Insurance = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(insurance());
  };

  return (
    <Wrapper>
      <Container>
        <StyledBankBlock />
        <AnimationContainer>
          <InfiniteLooper speed={30} direction={"left"}>
            <BankBlock />
          </InfiniteLooper>
        </AnimationContainer>

        <InfoBlock>
          <InfoContainer>
            <Header>Ипотечное страхование</Header>
            <DescText>
              С нами вы можете застраховать недвижимость, жизнь и здоровье
              дешевле, чем предложит банк.
            </DescText>
            <ListContainer>
              <LIContainer>
                <LIIconContainer>
                  <UsersSVG />
                </LIIconContainer>
                <LIText>
                  Зaполните анкету, получите страховой полис на почту
                </LIText>
              </LIContainer>
              <LIContainer>
                <LIIconContainer>
                  <PriceSVG />
                </LIIconContainer>
                <LIText>
                  Полисы по ценам страховых компаний или ещё дешевле
                  <AdaptiveTextDivider xs={true} />
                  за счёт наших скидок
                </LIText>
              </LIContainer>
              <LIContainer>
                <LIIconContainer>
                  <MoneySVG />
                </LIIconContainer>
                <LIText>
                  Гарантируем выплаты по страховым случаям и подлинность полисов
                </LIText>
              </LIContainer>
              <LIContainer>
                <LIIconContainer>
                  <PeopleSVG />
                </LIIconContainer>
                <LIText>
                  Наши партнеры — крупные страховые компании{" "}
                  <AdaptiveTextDivider xs={true} />с действующими лицензиями
                </LIText>
              </LIContainer>
            </ListContainer>
            <MobileBankBlock />
          </InfoContainer>
          <StyledButton
            onClick={handleButtonClick}
            buttonSize={ButtonSize.LARGE}
          >
            Оставить заявку
          </StyledButton>
        </InfoBlock>
      </Container>
    </Wrapper>
  );
};

const MobileBankBlock = styled(BankBlock)`
  display: none;
  margin-top: 18px;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const StyledBankBlock = styled(BankBlock)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const AnimationContainer = styled.div`
  display: none;
  position: relative;
  overflow: hidden;
  left: -162px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  width: 167px;
  height: 44px;
  padding: 0;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const LIText = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
`;

const LIIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background: #f5f7f9;
  min-width: 24px;
  height: 24px;
`;

const LIContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const DescText = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 528px;
  height: 404px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 459px;
    height: 452px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 568px;
    height: 380px;
  }
  @media screen and (max-width: 767px) {
    height: fit-content;
    row-gap: 48px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 1247px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 952px;
    padding-left: 60px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 42px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 64px;
  }
`;

export default Insurance;
