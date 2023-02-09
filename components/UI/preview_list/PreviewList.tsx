import React from "react";
import styled from "styled-components";
import { BrandColor, LightBlueColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPosition } from "../../../redux/slicers/photoPositionSlicer";
import { TFlatState, TPhotoPosition } from "../../../redux/slicers/types";
import Image from "next/image";

type Props = {
  quantity: number;
  isFullSized: boolean;
};

const PreviewList: React.FC<Props> = ({ quantity, isFullSized }) => {
  const dispatch = useAppDispatch();

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  const handelPreviewClick = (index: number) => () => {
    dispatch(setPosition(index));
  };

  return (
    <ImagesWrapper
      isFullSized={isFullSized}
      quantity={quantity}
      position={position}
    >
      {flatData?.images.map((el, index) => (
        <ImageContainer
          isFullSized={isFullSized}
          onClick={handelPreviewClick(index)}
          outline={position === index}
          key={el.id}
          // image={el.url}
        >
          <Image
            src={el.url}
            alt="Превью оъекта недвижимости"
            fill
            loading="lazy"
            objectFit="cover"
          />
        </ImageContainer>
      ))}
    </ImagesWrapper>
  );
};

const ImagesWrapper = styled.div<{
  position: number;
  quantity: number;
  isFullSized: boolean;
}>`
  transition: 0.3s all linear;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 16px;
  margin-top: 16px;
  transform: translateX(
    ${({ position, quantity, isFullSized }) =>
      position > 4 &&
      `-${
        Math.floor(position / quantity) *
        quantity *
        ((isFullSized ? 98 : 160) + 16)
      }px`}
  );
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    column-gap: ${({ isFullSized }) => (isFullSized ? "16px" : "12px")};
    margin-top: ${({ isFullSized }) => (isFullSized ? "34px" : "12px")};
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    transform: translateX(
      ${({ position, quantity, isFullSized }) =>
        position > 4 &&
        `-${
          Math.floor(position / quantity) *
          quantity *
          (isFullSized ? 99 + 16 : 115 + 12)
        }px`}
    );
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    transform: translateX(
      ${({ position, quantity }) =>
        position > 4 &&
        `-${Math.floor(position / quantity) * quantity * 140}px`}
    );
  }
`;

const ImageContainer = styled.div<{
  outline: boolean;
  isFullSized: boolean;
}>`
  position: relative;
  min-width: ${({ isFullSized }) => (isFullSized ? "98px" : "160px")};
  height: ${({ isFullSized }) => (isFullSized ? "80px" : "130px")};
  border-radius: 12px;
  cursor: pointer;
  transition: 0s;
  overflow: hidden;
  border: ${({ outline }) => outline && `2px solid ${BrandColor.BRAND}`};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: ${({ isFullSized }) => (isFullSized ? "99px" : "115px")};
    height: ${({ isFullSized }) => (isFullSized ? "80px" : "94px")};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    min-width: ${({ isFullSized }) => !isFullSized && "128px"};
    height: ${({ isFullSized }) => !isFullSized && "94px"};
  }
`;

export default PreviewList;
