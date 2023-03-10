import { useEffect } from "react";
import { useLazyConfirmQuery } from "../../redux/APIs/checkApi";
import styled from "styled-components";
import Image from "next/image";
import Button from "../../components/UI/button/Button";
import { ButtonSize } from "../../components/UI/button/enums";

const PaymentFailedPage = () => {
  const [confirm] = useLazyConfirmQuery();

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop as any),
    });

    const token = (params as { token?: string })?.token;

    if (token) {
      confirm(token);
    }
  }, []);

  const handleCloseClick = () => {
    window.close();
  };

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image
            src="/images/fatal-error.webp"
            alt="Изображение"
            loading="lazy"
            fill
          />
        </ImageContainer>
        <ContentContainer>
          <Header>Не получилось отправить документы</Header>
          <DescText>Попробуйте еще раз</DescText>
        </ContentContainer>
        <Button onClick={handleCloseClick} buttonSize={ButtonSize.MEDIUM}>
          Закрыть
        </Button>
      </Container>
    </Wrapper>
  );
};

const DescText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgba(36, 36, 36, 0.8);
`;

const Header = styled.h1`
  margin: 0;
  text-align: center;
  line-height: 40px;
  text-align: center;
  color: #242424;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 271px;
  height: 180px;
  position: relative;
`;

const Container = styled.div`
  max-width: 435px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default PaymentFailedPage;
