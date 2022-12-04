import styled from "styled-components";
import { BlackColor, LightBlueColor } from "../../common/enums";
import PhotoBlock from "./photo-block/PhotoBlock";
import InfoBlock from "./info-block";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";

const FlatBlock: React.FC = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { isLoading } = useAppSelector<TFlatState>((state) => state.flatData);

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
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_PRIMARY};
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default FlatBlock;
