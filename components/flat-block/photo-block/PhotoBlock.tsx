import React from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import Control from "../../UI/control/Control";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import PhotoCarousel from "./PhotoCarousel";
import PreviewStack from "./PreviewStack";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";

const PhotoBlock: React.FC = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  return (
    <Container>
      <PhotoWrapper>
        <Control length={flatData?.images.length} orientation="left">
          <ChevronSVG />
        </Control>
        <PhotoCarousel />
        <Control length={flatData?.images.length} orientation="right">
          <ChevronSVG />
        </Control>
      </PhotoWrapper>
      <PreviewStack />
    </Container>
  );
};

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 864px;
  height: 544px;
  background-color: ${LightBlueColor.LB_100};
  border-radius: 12px;
  overflow: hidden;
  @media ${(props) => props.theme.screenSize.lg} {
    width: 624px;
    height: 393px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
`;

export default PhotoBlock;
