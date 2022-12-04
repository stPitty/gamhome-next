import styled from "styled-components";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPosition } from "../../../redux/slicers/photoPositionSlicer";
import PreviewList from "../../UI/preview-list/PreviewList";
import { TPhotoPosition } from "../../../redux/slicers/types";

const PreviewStack: React.FC = () => {
  return (
    <Container>
      <PreviewList isFullSized={false} quantity={5} />
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
