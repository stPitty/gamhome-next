import styled from "styled-components";
import { photos } from "../../mock";
import { Dispatch, memo, SetStateAction } from "react";
import { BrandColor } from "../../common/enums";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setPosition,
  TPhotoPosition,
} from "../../redux/slicers/photoPositionSlicer";
import PreviewList from "../UI/preview-list/PreviewList";

const PreviewStack: React.FC = () => {
  const dispatch = useAppDispatch();

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  const handelPreviewClick = (index: number) => () => {
    dispatch(setPosition(index));
  };

  return (
    <Container>
      <PreviewList size={[160, 130]} quantity={5} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 864px;
  overflow: hidden;
`;

export default memo(PreviewStack);
