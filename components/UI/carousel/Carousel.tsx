import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { useRouter } from "next/router";
import { Route } from "../../../common/routes";
import { TFlatState, TPhotoPosition } from "../../../redux/slicers/types";
import { Url } from "../../../common/config_enums/url.enum";
import { handleRedirClick } from "../../../common/helpers";

type Props = {
  size: [number, number];
  isFullscreen: boolean;
};

const Carousel: React.FC<Props> = ({ isFullscreen, size }) => {
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
    <StyledUl size={size} count={position}>
      {flatData?.images.map((item, index) => {
        return (
          <StyledLi key={index}>
            <Image
              onClick={handleImageClick(index)}
              clickable={!isFullscreen}
              size={size}
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
  size: [number, number];
  clickable: boolean;
}>`
  display: block;
  margin: 0;
  min-width: ${({ size }) => size[0] + "px"};
  height: ${({ size }) => size[1] + "px"};
  background: url(${({ image }) => image}) center no-repeat;
  // background-size: ${({ size }) => `${size[0]}px ${size[1]}px`};
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
