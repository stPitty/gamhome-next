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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default memo(PreviewStack);
