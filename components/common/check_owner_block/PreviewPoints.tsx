import styled from "styled-components";
import { BlackColor } from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import {
  TFlatState,
  TPhotoPosition,
  TWindowSize,
} from "../../../redux/slicers/types";
import { useMemo } from "react";
import { WindowSize } from "../../../redux/slicers/enums";

const PreviewPoints = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  const offset = useMemo(() => {
    const width = windowSize === WindowSize.SM ? 309 : 248;
    if (flatData) {
      return Math.floor((width / flatData?.images.length - 1) * position);
    }
  }, [position, windowSize]);

  return (
    <Container>
      <PreviewPoint offset={offset} />
    </Container>
  );
};

const PreviewPoint = styled.div<{ offset: number | undefined }>`
  transform: translateX(${({ offset }) => offset}px);
  transition: 0.3s all linear;
  background: ${BlackColor.BLACK_24};
  border-radius: 24px;
  width: 32px;
  height: 4px;
`;

const Container = styled.div`
  display: none;
  padding: 0 20px;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    position: relative;
    bottom: 8px;
    overflow: visible;
    height: 0;
  }
`;

export default PreviewPoints;
