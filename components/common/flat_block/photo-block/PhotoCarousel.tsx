import React, { memo } from "react";
import styled from "styled-components";
import Carousel from "../../../UI/carousel/Carousel";

const PhotoCarousel: React.FC = () => {
  return (
    <Container>
      <Carousel isFullscreen={false} />
    </Container>
  );
};

const Container = styled.div<{ photo?: string }>`
  min-width: 792px;
  height: 544px;
  overflow: hidden;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    height: 393px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: 576px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    min-width: 640px;
  }
  @media screen and (max-width: 767px) {
    height: 332px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    min-width: 349px;
  }
  @media screen and (max-width: 374px) {
    min-width: 288px;
  }
`;

export default PhotoCarousel;
