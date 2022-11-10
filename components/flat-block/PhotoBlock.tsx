import React from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../common/enums";
import Control from "../UI/control/Control";
import ChevronSVG from "../../public/assets/svg/ChevronSVG";
import PhotoCarousel from "./PhotoCarousel";
import { photos } from "../../mock";
import PreviewStack from "./PreviewStack";
import { useAppSelector } from "../../redux/hooks";
import { TPhotoPosition } from "../../redux/slicers/photoPositionSlicer";

const PhotoBlock: React.FC = () => {
  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  return (
    <Container>
      <PhotoWrapper>
        <Control length={photos.length} orientation="left">
          <ChevronSVG />
        </Control>
        <PhotoCarousel count={position} />
        <Control length={photos.length} orientation="right">
          <ChevronSVG />
        </Control>
      </PhotoWrapper>
      <PreviewStack position={position} />
    </Container>
  );
};

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 864px;
  height: 544px;
  background-color: ${LightBlueColor.LB_100};
  border-radius: 12px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
`;

export default PhotoBlock;
