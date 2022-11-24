import React from "react";
import { photos } from "../../../mock";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { useRouter } from "next/router";
import { Route } from "../../../common/routes";
import { TPhotoPosition } from "../../../redux/slicers/types";

type Props = {
  size: [number, number];
  isFullscreen: boolean;
};

const Carousel: React.FC<Props> = ({ isFullscreen, size }) => {
  const router = useRouter();

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );
  const handleImageClick = (index: number) => () => {
    if (!isFullscreen) {
      router.push(Route.PHOTO + index);
    }
  };

  return (
    <StyledUl size={size} count={position}>
      {photos.map((item, index) => {
        return (
          <StyledLi key={item + index}>
            <Image
              onClick={handleImageClick(index)}
              clickable={!isFullscreen}
              size={size}
              image={item}
            />
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

const Image = styled.div<{
  image: string;
  size: [number, number];
  clickable: boolean;
}>`
  display: block;
  margin: 0;
  min-width: ${({ size }) => size[0] + "px"};
  height: ${({ size }) => size[1] + "px"};
  background: url(${({ image }) => image}) center no-repeat;
  background-size: ${({ size }) => `${size[0]}px ${size[1]}px`};
  cursor: ${({ clickable }) => clickable && "pointer"};
`;

const StyledUl = styled.ul<{ count: number; size: [number, number] }>`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 20000px;
  height: ${({ size }) => size[1] + "px"};
  font-size: 0;
  transform: translateX(${({ count, size }) => `-${count * size[0]}px`});
`;

const StyledLi = styled.li`
  display: inline-block;
  margin: 0;
  position: relative;
`;

export default Carousel;
