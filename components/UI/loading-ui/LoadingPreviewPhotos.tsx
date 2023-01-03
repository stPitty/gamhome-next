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
  @media screen and (max-width: 1439px) {
    height: 16px;
    width: 13px;
  }
`;

const LoadingPreviewBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 130px;
  background: ${LightBlueColor.LB_100_64};
  border-radius: 12px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 115px;
    height: 94px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 128px;
    height: 94px;
  }
`;

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  width: 100%;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    gap: 12px;
    margin-top: 12px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default LoadingPreviewPhotos;
