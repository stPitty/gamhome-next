import { memo, useState } from "react";
import styled from "styled-components";
import { BlackColor, Font, WhiteColor } from "../../common/enums";
import CloseSVG from "../../public/assets/svg/CloseSVG";
import Button from "../../components/UI/button/Button";
import Carousel from "../../components/UI/carousel/Carousel";
import { useRouter } from "next/router";
import { Route } from "../../common/routes";
import ChevronSVG from "../../public/assets/svg/ChevronSVG";
import { handleRedirClick, handleSwapImageClick } from "../../common/helpers";
import { useAppDispatch } from "../../redux/hooks";
import PreviewList from "../../components/UI/preview-list/PreviewList";

const FullscreenCarousel: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleShowNumberClick = () => {
    if (!showNumber) {
      setLoading(true);
      setTimeout(() => {
        setShowNumber(true);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>2-комн. апартаменты, 78 м², 390 000 ₽ в мес.</HeaderText>
        <ControlWrapper>
          {showNumber ? (
            <NumberText href="tel:+79167086382">+7 916 708-63-82</NumberText>
          ) : (
            <StyledButton onClick={handleShowNumberClick} loading={loading}>
              <ButtonText>Показать телефон</ButtonText>
            </StyledButton>
          )}
          <CloseButton onClick={handleRedirClick(router, Route.HOME)}>
            <CloseSVG />
          </CloseButton>
        </ControlWrapper>
      </HeaderContainer>
      <PhotoWrapper>
        <ControlArea onClick={handleSwapImageClick("left", dispatch)}>
          <StyledChevron orientation="left" />
        </ControlArea>
        <PhotoContainer>
          <Carousel isFullscreen={true} size={[1088, 747]} />
        </PhotoContainer>
        <ControlArea onClick={handleSwapImageClick("right", dispatch)}>
          <StyledChevron orientation="right" />
        </ControlArea>
      </PhotoWrapper>
      <PreviewWrapper>
        <PreviewList size={[98, 80]} quantity={8} />
      </PreviewWrapper>
    </Container>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 896px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const StyledChevron = styled(ChevronSVG)<{ orientation: "left" | "right" }>`
  height: 12px;
  transform: ${({ orientation }) =>
    orientation === "right" && "rotate(180deg)"};
`;

const ControlArea = styled.div`
  cursor: pointer;
  display: flex;
  height: 747px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const PhotoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PhotoContainer = styled.div`
  width: 1088px;
  height: 747px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const NumberText = styled.a`
  width: 104px;
  height: 36px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 36px;
  margin-left: 12px;
  color: ${WhiteColor.WHITE};
`;

const StyledButton = styled(Button)`
  width: 137px;
  height: 36px;
`;

const ButtonText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
`;

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 193px;
`;

const HeaderText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${WhiteColor.WHITE};
  margin: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 64px 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${BlackColor.BLACK_SECONDARY};
`;

export default memo(FullscreenCarousel);
