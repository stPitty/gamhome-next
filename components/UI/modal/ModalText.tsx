import { DescText, ModalBody } from "./types";
import React from "react";
import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";

type Props = {
  data: ModalBody;
};

const ModalText: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.modalType === "withInfo" ? (
        <StyledUL>
          {(data.desc as Array<DescText>)!.map((el) => {
            return (
              <StyledLI key={el.id}>
                <ListItemWrapper>
                  <ListMarker />
                  <Text>{el.text}</Text>
                </ListItemWrapper>
              </StyledLI>
            );
          })}
        </StyledUL>
      ) : (
        <Text>{data.desc as string}</Text>
      )}
    </>
  );
};

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

const ListMarker = styled.div`
  margin: 10px 10px;
  min-height: 4px;
  min-width: 4px;
  border-radius: 4px;
  align-self: flex-start;
  background-color: ${BlackColor.BLACK_80};
`;

const StyledUL = styled.ul`
  padding: 0;
`;

const StyledLI = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  margin: 0;
  width: 430px;
  transition: none;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (max-width: 374px) {
    width: 280px;
  }
`;

export default ModalText;
