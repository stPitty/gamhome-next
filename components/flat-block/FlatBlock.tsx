import styled from "styled-components";
import { BlackColor } from "../../common/enums";
import PhotoBlock from "./PhotoBlock";

const FlatBlock: React.FC = () => {
  return (
    <Container>
      <HeaderText>2-комн. апартаменты, 78 м²</HeaderText>
      <PhotoBlock />
    </Container>
  );
};

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
