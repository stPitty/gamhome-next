import React, { SyntheticEvent } from "react";
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
  const handleImageClick = (index: number) => (e: SyntheticEvent) => {
    const time = new Date();

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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: ${({ isFullscreen }) => (isFullscreen ? "788px" : "576px")};
    height: ${({ isFullscreen }) => (isFullscreen ? "539px" : "393px")};
    background-size: auto
      ${({ isFullscreen }) => (isFullscreen ? "539px" : "393px")};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    min-width: ${({ isFullscreen }) => (isFullscreen ? "768px" : "640px")};
    height: ${({ isFullscreen }) => (isFullscreen ? "526px" : "393px")};
    background-size: auto
      ${({ isFullscreen }) => (isFullscreen ? "526px" : "393px")};
  }
`;

const StyledUl = styled.ul<{ count: number; isFullscreen: boolean }>`
  transition: 0.3s all linear;
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    height: ${({ isFullscreen }) => (isFullscreen ? "539px" : "393px")};
    transform: translateX(
      ${({ count, isFullscreen }) =>
        isFullscreen ? `-${count * 788}px` : `-${count * 576}px`}
    );
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    height: ${({ isFullscreen }) => (isFullscreen ? "526px" : "393px")};
    transform: translateX(
      ${({ count, isFullscreen }) =>
        isFullscreen ? `-${count * 768}px` : `-${count * 640}px`}
    );
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  margin: 0;
  position: relative;
`;

export default Carousel;
