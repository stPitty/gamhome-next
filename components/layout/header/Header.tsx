import styled from "styled-components";
import Body from "../Body";
import { WhiteColor } from "../../../common/enums";

const Header: React.FC = () => {
  return (
    <Container>
      <Body />
    </Container>
  );
};

const Container = styled.div`
  background: ${WhiteColor.WHITE};
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export default Header;
