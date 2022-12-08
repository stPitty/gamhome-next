import React, { memo } from "react";
import styled from "styled-components";
import Carousel from "../../UI/carousel/Carousel";

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
`;

export default PhotoCarousel;
