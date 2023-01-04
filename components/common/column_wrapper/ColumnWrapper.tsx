import styled from "styled-components";
import { FC } from "react";
import { ChildProp } from "../../../common/types";

const ColumnWrapper: FC<ChildProp> = ({ children }) => {
  return <InfoWrapperColumn>{children}</InfoWrapperColumn>;
};

const InfoWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    padding-top: 16px;
  }
`;

export default ColumnWrapper;
