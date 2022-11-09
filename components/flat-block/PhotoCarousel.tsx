import React, { memo } from "react";
import styled from "styled-components";
import { photos } from "../../mock";

type Props = {
  count: number;
};

const PhotoCarousel: React.FC<Props> = ({ count }) => {
  return (
    <Container>
      <StyledUl count={count}>
        {photos.map((item, index) => {
          return (
            <StyledLi key={item + index}>
              <Image image={item} />
            </StyledLi>
          );
        })}
      </StyledUl>
    </Container>
  );
};

const StyledUl = styled.ul<{ count: number }>`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 9999px;
  height: 544px;
  font-size: 0;
  transform: translateX(${({ count }) => `-${count * 792}px`});
`;

const StyledLi = styled.li`
  display: inline-block;
  margin: 0;
  position: relative;
`;

const Image = styled.div<{ image: string }>`
  display: block;
  margin: 0;
  min-width: 792px;
  height: 544px;
  background: url(${({ image }) => image}) center no-repeat;
  background-size: 792px 544px;
`;

const Container = styled.div<{ photo?: string }>`
  min-width: 792px;
  height: 544px;
  overflow: hidden;
`;

export default memo(PhotoCarousel);
