import { ChildrenProp } from "../../../common/form_utils/types";
import styled from "styled-components";

const GeneralWrapper: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  background-color: white;
  max-width: 500px;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fdfdfd;
  overflow: hidden;
`;

export default GeneralWrapper;
