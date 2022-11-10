import React from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import Control from "../../UI/control/Control";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import PhotoCarousel from "./PhotoCarousel";
import { photos } from "../../../mock";
import PreviewStack from "./PreviewStack";

const PhotoBlock: React.FC = () => {
  return (
    <Container>
      <PhotoWrapper>
        <Control length={photos.length} orientation="left">
          <ChevronSVG />
        </Control>
        <PhotoCarousel />
        <Control length={photos.length} orientation="right">
          <ChevronSVG />
        </Control>
      </PhotoWrapper>
      <PreviewStack />
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
