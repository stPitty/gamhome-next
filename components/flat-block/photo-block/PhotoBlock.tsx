import React from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import Control from "../../UI/control/Control";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import PhotoCarousel from "./PhotoCarousel";
import PreviewStack from "./PreviewStack";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import ImageLoadingSVG from "../../../public/assets/svg/ImageLoadingSVG";
import LoadingPreviewPhotos from "../../UI/loading-ui/LoadingPreviewPhotos";

const PhotoBlock: React.FC = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { isLoading } = useAppSelector<TFlatState>((state) => state.flatData);

  return (
    <Container>
      <PhotoWrapper isLoading={isLoading}>
        {isLoading ? (
          <ImageLoadingSVG />
        ) : (
          <>
            <Control length={flatData?.images.length} orientation="left">
              <ChevronSVG />
            </Control>
            <PhotoCarousel />
            <Control length={flatData?.images.length} orientation="right">
              <ChevronSVG />
            </Control>
          </>
        )}
      </PhotoWrapper>
      {isLoading ? <LoadingPreviewPhotos /> : <PreviewStack />}
    </Container>
  );
};

const PhotoWrapper = styled.div<{ isLoading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 864px;
  height: 544px;
  background-color: ${({ isLoading }) =>
    isLoading ? LightBlueColor.LB_100_64 : LightBlueColor.LB_100};
  border-radius: 12px;
  overflow: hidden;
  @media ${(props) => props.theme.screenSize.lg} {
    width: 624px;
    height: 393px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
`;

export default PhotoBlock;
