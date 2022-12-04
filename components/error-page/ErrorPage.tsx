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
        <SecondaryDescContainer>
          <DescText>{desc}</DescText>
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
        </SecondaryDescContainer>
      </DescContainer>
    </PageWrapper>
  );
};

const StyledButton = styled(Button)`
  font-size: 13px;
  line-height: 20px;
  padding: 7px 12px 9px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 24px;
`;

const DescText = styled.p`
  margin: 0;
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${BlackColor.BLACK_80};
`;

const SecondaryDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const HeaderText = styled.p`
  font-family: Inter, serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: ${BlackColor.BLACK_80};
  margin: 0;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 472px;
`;

const LogoIcon = styled(LogoSVG)`
  margin-top: 40px;
`;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 148px;
`;

export default memo(ErrorPage);
