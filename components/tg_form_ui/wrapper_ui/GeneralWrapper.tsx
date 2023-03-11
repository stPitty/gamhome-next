import { ChildrenProp } from "../../../common/form_utils/types";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../../common/context/AppContext";

const GeneralWrapper: React.FC<ChildrenProp> = ({ children }) => {
  const { isCityOpen, isDistrictOpen, isMetroOpen, isMapOpen } =
    useContext(AppContext);

  const isModalOpened =
    isCityOpen || isDistrictOpen || isMetroOpen || isMapOpen;

  return (
    <Wrapper>
      <Container
        style={{
          height: isModalOpened ? "0" : "fit-content",
        }}
        isModalOpened={!!isModalOpened}
      >
        {children}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div<{ isModalOpened: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 500px;
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
`;

export default GeneralWrapper;
