import styled from "styled-components";
import { BlackColor, LightBlueColor } from "../../common/enums";
import PhotoBlock from "./photo-block/PhotoBlock";
import InfoBlock from "./info-block";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";

const FlatBlock: React.FC = () => {
  const { flatData, isLoading } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingBlock />
      ) : (
        <HeaderText>{flatData?.title}</HeaderText>
      )}
      <PhotoBlock />
      <InfoBlock />
    </Container>
  );
};

const LoadingBlock = styled.div`
  width: 864px;
  height: 40px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_PRIMARY};
  margin: 0;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default FlatBlock;
