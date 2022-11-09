import React, { useState } from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../common/enums";
import Control from "../UI/control/Control";
import ChevronSVG from "../../public/assets/svg/ChevronSVG";
import PhotoCarousel from "./PhotoCarousel";
import { photos } from "../../mock";
import PreviewStack from "./PreviewStack";

const PhotoBlock: React.FC = () => {
  const [position, setPosition] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  return (
    <Container>
      <PhotoWrapper>
        <Control
          length={photos.length}
          setPosition={setPosition}
          orientation="left"
        >
          <ChevronSVG />
        </Control>
        <PhotoCarousel count={position} />
        <Control
          length={photos.length}
          setPosition={setPosition}
          orientation="right"
        >
          <ChevronSVG />
        </Control>
      </PhotoWrapper>
      <PreviewStack setPosition={setPosition} position={position} />
    </Container>
  );
};

const PhotoWrapper = styled.div`
  cursor: pointer;
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
