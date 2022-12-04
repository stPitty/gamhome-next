import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { useRouter } from "next/router";
import { Route } from "../../../common/routes";
import { TFlatState, TPhotoPosition } from "../../../redux/slicers/types";
import { Url } from "../../../common/config_enums/url.enum";

type Props = {
  isFullscreen: boolean;
};

const Carousel: React.FC<Props> = ({ isFullscreen }) => {
  const router = useRouter();

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );
  const handleImageClick = (index: number) => () => {
    if (!isFullscreen) {
      const path = `${Url.CLIENT_PATH}/${router.pathname.split("/")[1]}/${
        router.query.id
      }${Route.PHOTOS}`;
      router.push(path);
    }
  };

  return (
    <StyledUl isFullscreen={isFullscreen} count={position}>
      {flatData?.images.map((item, index) => {
        return (
          <StyledLi key={index}>
            <Image
              isFullscreen={isFullscreen}
              onClick={handleImageClick(index)}
              clickable={!isFullscreen}
              image={item.url}
            />
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

const Image = styled.div<{
  image: string;
  clickable: boolean;
  isFullscreen: boolean;
}>`
  display: block;
  margin: 0;
  min-width: ${({ isFullscreen }) => (isFullscreen ? "1088px" : "792px")};
  height: ${({ isFullscreen }) => (isFullscreen ? "747px" : "544px")};
  background: url(${({ image }) => image}) center no-repeat;
  background-size: auto
    ${({ isFullscreen }) => (isFullscreen ? "747px" : "544px")};
  cursor: ${({ clickable }) => clickable && "pointer"};
`;

const StyledUl = styled.ul<{ count: number; isFullscreen: boolean }>`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100000px;
  height: ${({ isFullscreen }) => (isFullscreen ? "747px" : "544px")};
  font-size: 0;
  transform: translateX(
    ${({ count, isFullscreen }) =>
      isFullscreen ? `-${count * 1088}px` : `-${count * 792}px`}
  );
`;

const StyledLi = styled.li`
  display: inline-block;
  margin: 0;
  position: relative;
`;

export default Carousel;
