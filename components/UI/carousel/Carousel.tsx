import React, { SyntheticEvent, useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useRouter } from "next/router";
import { Route } from "../../../common/routes";
import {
  TFlatState,
  TPhotoPosition,
  TWindowSize,
} from "../../../redux/slicers/types";
import { Url } from "../../../common/config_enums/url.enum";
import {
  decrement,
  increment,
} from "../../../redux/slicers/photoPositionSlicer";
import { WindowSize } from "../../../redux/slicers/enums";

type Props = {
  isFullscreen: boolean;
};

const Carousel: React.FC<Props> = ({ isFullscreen }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );
  const handleImageClick = (index: number) => (e: SyntheticEvent) => {
    if (
      !isFullscreen &&
      windowSize !== WindowSize.XS &&
      windowSize !== WindowSize.SM
    ) {
      const path = `${Url.CLIENT_PATH}/${router.pathname.split("/")[1]}/${
        router.query.id
      }${Route.PHOTOS}`;
      router.push(path);
    }
  };

  const handleMouseUp = (e: TouchEvent) => {
    const minOffset = windowSize === WindowSize.SM ? 100 : 150;
    const offset = touchStart! - e.changedTouches[0].clientX;
    if (Math.abs(offset) > minOffset) {
      if (offset! > 0) {
        dispatch(increment(flatData?.images.length));
      } else {
        dispatch(decrement());
      }
    }
    setTouchStart(null);
  };

  const handleMouseDown = (e: TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  return (
    <Container
      onTouchStart={handleMouseDown as any}
      onTouchEnd={handleMouseUp as any}
      isFullscreen={isFullscreen}
      count={position}
    >
      {flatData?.images.map((item, index) => {
        return (
          <Image
            key={item.id}
            isFullscreen={isFullscreen}
            onClick={handleImageClick(index)}
            clickable={!isFullscreen}
            image={item.url}
          />
        );
      })}
    </Container>
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
  @media screen and (max-width: 767px) and (min-width: 375px) {
    min-width: 349px;
    height: 284px;
    background-size: auto 284px;
  }
`;

const Container = styled.div<{
  count: number;
  isFullscreen: boolean;
}>`
  user-select: none;
  touch-action: pan-y;
  display: flex;
  transition: 0.3s linear;
  margin: 0;
  padding: 0;
  height: ${({ isFullscreen }) => (isFullscreen ? "747px" : "544px")};
  font-size: 0;

  ${({ count, isFullscreen }) => {
    return css`
      transform: translateX(
        ${isFullscreen ? `${-(count * 1088)}px` : `${-(count * 792)}px`}
      );
    `;
  }};

  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    height: ${({ isFullscreen }) => (isFullscreen ? "539px" : "393px")};

    ${({ count, isFullscreen }) => {
      return css`
        transform: translateX(
          ${isFullscreen ? `${-(count * 788)}px` : `${-(count * 576)}px`}
        );
      `;
    }};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    height: ${({ isFullscreen }) => (isFullscreen ? "526px" : "393px")};
    ${({ count, isFullscreen }) => {
      return css`
        transform: translateX(
          ${isFullscreen ? `${-(count * 768)}px` : `${-(count * 640)}px`}
        );
      `;
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    height: 284px;
    ${({ count, isFullscreen }) => {
      return css`
        transform: translateX(${-(count * 349)}px);
      `;
    }};
  }
`;

export default Carousel;
