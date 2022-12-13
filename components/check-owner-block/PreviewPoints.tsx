import styled from "styled-components";
import { BlackColor } from "../../common/enums";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState, TPhotoPosition } from "../../redux/slicers/types";
import { useMemo } from "react";

const PreviewPoints = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  const offset = useMemo(() => {
    if (flatData) {
      return Math.floor((309 / flatData?.images.length) * position);
    }
  }, [position]);

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
  @media screen and (max-width: 767px) and (min-width: 375px) {
    display: flex;
  }
`;

export default PreviewPoints;
