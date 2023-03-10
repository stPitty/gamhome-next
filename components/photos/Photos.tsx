import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  TFlatState,
  TPhotoPosition,
  TWindowSize,
} from "../../redux/slicers/types";
import { useRouter } from "next/router";
import { handleGetFlatData, handleSwapImageClick } from "../../common/helpers";
import { Route } from "../../common/routes";
import CloseSVG from "../../public/assets/svg/CloseSVG";
import Carousel from "../UI/carousel/Carousel";
import PreviewList from "../UI/preview_list/PreviewList";
import styled from "styled-components";
import ChevronSVG from "../../public/assets/svg/ChevronSVG";
import { BlackColor, Font } from "../../common/enums";
import { WindowSize } from "../../redux/slicers/enums";
import FullScreenHeader from "../UI/fullscreen_header/FullScreenHeader";

const Photos: React.FC = () => {
  const dispatch = useAppDispatch();

  const { flatData, isError } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  const router = useRouter();

  const imagesQuantity = useMemo(() => {
    return windowSize === WindowSize.XL ? 8 : 7;
  }, [windowSize]);

  useEffect(() => {
    const keyupEventHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseClick();
      }
      if (e.key === "ArrowRight") {
        handleSwapImageClick("right", dispatch, flatData?.images.length)();
      }
      if (e.key === "ArrowLeft") {
        handleSwapImageClick("left", dispatch, flatData?.images.length)();
      }
    };
    window.addEventListener("keyup", keyupEventHandler);

    return () => window.removeEventListener("keyup", keyupEventHandler);
  }, []);

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

  const handleCloseCallback = useCallback(() => {
    handleCloseClick();
  }, []);

  return (
    <Container>
      <TabletHeader>
        <PositionIndicator>
          {position + 1}/{flatData?.images?.length}
        </PositionIndicator>
        <CloseIconContainer onClick={handleCloseClick}>
          <CloseSVG />
        </CloseIconContainer>
      </TabletHeader>
      <FullScreenHeader isTop={true} handleClose={handleCloseCallback} />
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
        <PreviewList isFullSized={true} quantity={imagesQuantity} />
      </PreviewWrapper>
      <FullScreenHeader isTop={false} handleClose={handleCloseCallback} />
    </Container>
  );
};

const CloseIconContainer = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PositionIndicator = styled.div`
  width: 43px;
  height: 28px;
  font-family: ${Font.ROBOTO};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  cursor: default;
`;

const TabletHeader = styled.div`
  display: none;
  width: 688px;
  margin: 32px 40px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 896px;
  overflow: hidden;
  margin-bottom: 16px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 789px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
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
  width: 176px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1439px) {
    height: 539px;
    width: 118px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    height: 539px;
  }
  @media screen and (max-width: 1024px) {
    width: 768px;
    height: 526px;
    margin: 229px 0 225px;
  }
`;

const PhotoContainer = styled.div`
  width: 1088px;
  height: 747px;
  overflow: hidden;

  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 788px;
    height: 539px;
  }
  @media screen and (max-width: 1024px) {
    width: 768px;
    height: 526px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${BlackColor.BLACK_SECONDARY};
`;

export default Photos;
