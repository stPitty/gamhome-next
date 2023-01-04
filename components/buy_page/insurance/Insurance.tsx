import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import UsersSVG from "../../../public/assets/svg/UsersSVG";
import PriceSVG from "../../../public/assets/svg/PriceSVG";
import MoneySVG from "../../../public/assets/svg/MoneySVG";
import PeopleSVG from "../../../public/assets/svg/PeopleSVG";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";

const Insurance = () => {
  return (
    <Wrapper>
      <Container>
        <ImagesContainer>
          <BankImage image="/assets/icons/absolute_bank_grey.png" />
          <BankImage image="/assets/icons/soglasye_bank_grey.png" />
          <BankImage image="/assets/icons/strahovaya_companya_grey.png" />
          <BankImage image="/assets/icons/vsk_grey.png" />
          <BankImage image="/assets/icons/renessans_grey.png" />
          <BankImage image="/assets/icons/max_grey.png" />
          <BankImage image="/assets/icons/alfa_grey.png" />
          <BankImage image="/assets/icons/sogaz_grey.png" />
          <BankImage image="/assets/icons/zetta_grey.png" />
        </ImagesContainer>
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
                  Полисы по ценам страховых компаний или ещё дешевле за счёт
                  наших скидок
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
                  Наши партнеры — крупные страховые компании с действующими
                  лицензиями
                </LIText>
              </LIContainer>
            </ListContainer>
          </InfoContainer>
          <StyledButton buttonSize={ButtonSize.LARGE}>
            Оставить заявку
          </StyledButton>
        </InfoBlock>
      </Container>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  width: 167px;
  height: 44px;
  padding: 0;
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
`;

const BankImage = styled.div<{ image: string }>`
  width: 183px;
  height: 47px;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 31px;
  width: 611px;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 1247px;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
`;

export default Insurance;
