import React from "react";
import styled from "styled-components";
import { BrandColor, LightBlueColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPosition } from "../../../redux/slicers/photoPositionSlicer";
import { TFlatState, TPhotoPosition } from "../../../redux/slicers/types";

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
        <Image
          isFullSized={isFullSized}
          onClick={handelPreviewClick(index)}
          outline={position === index}
          key={el.id}
          image={el.url}
        />
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
  transform: translateX(
    ${({ position, quantity, isFullSized }) =>
      position > 4 &&
      `-${
        Math.floor(position / quantity) *
        quantity *
        ((isFullSized ? 98 : 160) + 16)
      }px`}
  );
`;

const Image = styled.div<{
  image: string;
  outline: boolean;
  isFullSized: boolean;
}>`
  background: url(${({ image }) => image}) no-repeat border-box center;
  background-size: cover;
  min-width: ${({ isFullSized }) => (isFullSized ? "98px" : "160px")};
  height: ${({ isFullSized }) => (isFullSized ? "80px" : "130px")};
  border-radius: 12px;
  margin: 16px 16px 0 0;
  cursor: pointer;
  transition: 0s;
  border: ${({ outline }) => outline && `2px solid ${BrandColor.BRAND}`};
`;

export default PreviewList;
