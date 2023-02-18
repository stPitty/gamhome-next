import styled from "styled-components";
import { FC } from "react";
import { ChildProp } from "../../../common/types";
import { Hook } from "../../../common/routes";

const PageContainer: FC<ChildProp> = ({ children }) => {
  return <Container id={Hook.HOME}>{children}</Container>;
};

const Container = styled.div`
  padding-top: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  @media screen and (max-width: 1023px) {
    overflow-x: hidden;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding-top: 66px;
  }
  @media screen and (max-width: 374px) {
    padding-top: 65px;
  }
`;

export default PageContainer;
