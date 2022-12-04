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
`;

export default PhotoCarousel;
