import styled from "styled-components";
import { WhiteColor } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";
import KeySVG from "../../public/assets/svg/KeySVG";
import Link from "next/link";
import { Hook } from "../../common/routes";
import { handleShowNumberClick } from "../../common/helpers";

const MobileButtons = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  return (
    <Wrapper>
      <TopShadow />
      <Container>
        <ButtonsContainer>
          {showNumber ? (
            <StyledLink href={`tel:${flatData?.phone}`}>
              <Button
                buttonType={ButtonType.OUTLINE}
                buttonSize={ButtonSize.LARGE}
              >
                {flatData?.phone}
              </Button>
            </StyledLink>
          ) : (
            <Button
              buttonSize={ButtonSize.LARGE}
              loading={loading}
              onClick={handleShowNumberClick(
                showNumber,
                setLoading,
                setShowNumber
              )}
            >
              Показать телефон
            </Button>
          )}
          <StyledLink href={"#" + Hook.SERVICES} scroll={false}>
            <Button
              buttonSize={ButtonSize.LARGE}
              buttonType={ButtonType.PRIMARY_PURPLE}
            >
              <KeyIcon />
              Подберите мне квартиру
            </Button>
          </StyledLink>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};

const KeyIcon = styled(KeySVG)`
  margin-right: 7px;
`;

const StyledLink = styled(Link)`
  min-width: 338px;
`;

const TopShadow = styled.div`
  width: 100%;
  height: 19px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 768px;
  padding: 24px 40px;
  column-gap: 12px;
`;

const Container = styled.div`
  width: 100%;
  height: 130px;
  margin-top: -1px;
  background-color: ${WhiteColor.WHITE};
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  width: 100%;
  bottom: 0;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: flex;
  }
`;

export default MobileButtons;
