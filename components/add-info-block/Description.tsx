import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";

const Description = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  return (
    <Container>
      <HeaderText>Описание</HeaderText>
      <Text>{flatData?.desc}</Text>
    </Container>
  );
};

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
  margin: 0 0 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 48px 0;
`;

export default Description;
