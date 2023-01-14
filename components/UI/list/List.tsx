import { DescText } from "../modal/types";
import React, { FC } from "react";
import styled from "styled-components";
import { BlackColor, Font, WhiteColor } from "../../../common/enums";

type Props = {
  data: DescText[] | string;
};

const List: FC<Props> = ({ data }) => {
  return (
    <>
      {typeof data === "object" ? (
        <StyledUL>
          {data?.map((el) => {
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
        <Text notList={true}>{data}</Text>
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

const Text = styled.p<{ notList?: boolean }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  margin: 0;
  width: ${({ notList }) => (notList ? "100%" : "430px")};
  transition: none;
  white-space: pre-wrap;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: ${({ notList }) => (notList ? "100%" : "335px")};
  }
  @media screen and (max-width: 374px) {
    width: ${({ notList }) => (notList ? "100%" : "280px")};
  }
`;

export default List;
