import { useRouter } from "next/router";
import { handleRedirClick } from "../../common/helpers";
import { Route } from "../../common/routes";
import { ButtonType } from "../UI/button/enums";
import styled from "styled-components";
import Button from "../UI/button/Button";
import { BlackColor, Font } from "../../common/enums";
import LogoSVG from "../../public/assets/svg/LogoSVG";
import React, { Dispatch, memo, SetStateAction } from "react";

type Props = {
  header: string;
  desc: string;
  setHasNoError?: () => void;
};

const ErrorPage: React.FC<Props> = ({ header, desc, setHasNoError }) => {
  const router = useRouter();

  const handleRouteMainClick = () => {
    handleRedirClick(router, Route.HOME)();
    if (setHasNoError) {
      setHasNoError();
    }
  };

  return (
    <PageWrapper>
      <LogoIcon />
      <DescContainer>
        <HeaderText>{header}</HeaderText>
        <DescText>{desc}</DescText>
      </DescContainer>
      <ButtonsContainer>
        <div>
          <StyledButton onClick={handleRouteMainClick}>
            Перейти на Главную
          </StyledButton>
        </div>
        <div>
          <StyledButton buttonType={ButtonType.FLAT}>
            Перейти в Telegram Bot
          </StyledButton>
        </div>
      </ButtonsContainer>
    </PageWrapper>
  );
};

const StyledButton = styled(Button)`
  font-size: 13px;
  line-height: 20px;
  padding: 7px 12px 9px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 332px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  margin-top: 24px;
  @media screen and (max-width: 1023px) {
    margin-top: 0;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 32px;
    flex-direction: column;
    row-gap: 24px;
  }
`;

const DescText = styled.p`
  margin: 0;
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 767px) {
    width: 250px;
  }
`;

const HeaderText = styled.p`
  font-family: Inter, serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: ${BlackColor.BLACK_80};
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  width: 472px;
  margin-top: 148px;
  @media screen and (max-width: 1023px) {
    margin-top: 0;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const LogoIcon = styled(LogoSVG)`
  margin-top: 40px;
`;

const PageWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`;

export default memo(ErrorPage);
