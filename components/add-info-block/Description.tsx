import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../common/enums";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";

const Description = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { isLoading } = useAppSelector<TFlatState>((state) => state.flatData);

  return (
    <Container>
      {isLoading ? (
        <>
          <LoadingHeader />
          <LoadingDescBlock />
        </>
      ) : (
        <>
          <HeaderText>Описание</HeaderText>
          <Text>{flatData?.desc}</Text>
        </>
      )}
    </Container>
  );
};

const LoadingDescBlock = styled.div`
  width: 100%;
  height: 360px;
  background: ${LightBlueColor.LB_400};
  border-radius: 16px;
`;

const LoadingHeader = styled.div`
  width: 100%;
  height: 32px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 48px 0;
  row-gap: 16px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
  }
`;

export default Description;
