import { memo, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { BlackColor, Font, WhiteColor } from "../../../common/enums";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import Button from "../../../components/UI/button/Button";
import Carousel from "../../../components/UI/carousel/Carousel";
import { useRouter } from "next/router";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import {
  handleGetFlatData,
  handleSwapImageClick,
} from "../../../common/helpers";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import PreviewList from "../../../components/UI/preview-list/PreviewList";
import { TFlatState } from "../../../redux/slicers/types";
import { fetchFlatData } from "../../../redux/slicers/flatDataSlicer";
import { Route } from "../../../common/routes";

const FullscreenCarousel: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { flatData, isError } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const router = useRouter();

  useEffect(() => {
    handleGetFlatData(router, flatData, dispatch);
  }, [router.query.id]);

  useEffect(() => {
    if (isError) {
      router.push(Route.REQUEST_ERROR);
    }
  }, [isError]);

  const handleCloseClick = () => {
    const path = router.asPath.replace("photos", "");
    router.push(path);
  };

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
        <HeaderText>
          {flatData?.title}, {flatData?.price}₽ в мес.
        </HeaderText>
        <ControlWrapper>
          {showNumber ? (
            <NumberText href={`tel:${flatData?.phone}`}>
              {flatData?.phone}
            </NumberText>
          ) : (
            <Button
              width={137}
              onClick={handleShowNumberClick}
              loading={loading}
            >
              Показать телефон
            </Button>
          )}
          <CloseButton onClick={handleCloseClick}>
            <CloseSVG />
          </CloseButton>
        </ControlWrapper>
      </HeaderContainer>
      <PhotoWrapper>
        <ControlArea
          onClick={handleSwapImageClick(
            "left",
            dispatch,
            flatData?.images.length
          )}
        >
          <StyledChevron orientation="left" />
        </ControlArea>
        <PhotoContainer>
          <Carousel isFullscreen={true} />
        </PhotoContainer>
        <ControlArea
          onClick={handleSwapImageClick(
            "right",
            dispatch,
            flatData?.images.length
          )}
        >
          <StyledChevron orientation="right" />
        </ControlArea>
      </PhotoWrapper>
      <PreviewWrapper>
        <PreviewList isFullSized={true} quantity={8} />
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
