import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import ImageLoadingSVG from "../../../public/assets/svg/ImageLoadingSVG";

const LoadingPreviewPhotos = () => {
  return (
    <Wrapper>
      <LoadingPreviewBlock>
        <LoadingImageIcon />
      </LoadingPreviewBlock>
      <LoadingPreviewBlock>
        <LoadingImageIcon />
      </LoadingPreviewBlock>
      <LoadingPreviewBlock>
        <LoadingImageIcon />
      </LoadingPreviewBlock>
      <LoadingPreviewBlock>
        <LoadingImageIcon />
      </LoadingPreviewBlock>
      <LoadingPreviewBlock>
        <LoadingImageIcon />
      </LoadingPreviewBlock>
    </Wrapper>
  );
};

const LoadingImageIcon = styled(ImageLoadingSVG)`
  height: 18px;
  width: 22px;
`;

const LoadingPreviewBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 130px;
  background: ${LightBlueColor.LB_100_64};
  border-radius: 12px;
`;

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  width: 100%;
`;

export default LoadingPreviewPhotos;
