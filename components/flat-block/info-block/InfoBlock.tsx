import styled from "styled-components";
import { BlackColor } from "../../../common/enums";
import MainInfo from "./MainInfo";
import SubInfoBlock from "./SubInfoBlock";

const InfoBlock: React.FC = () => {
  return (
    <Container>
      <HeaderText>Общая информация</HeaderText>
      <MainInfo />
      <SubInfoBlock />
    </Container>
  );
};

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 56px;
`;

export default InfoBlock;
