import React from "react";
import styled from "styled-components";
import { BlackColor } from "../../../common/enums";

type Props = {
  className?: string;
};

const Divider: React.FC<Props> = ({ className }) => {
  return <Container></Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background: ${BlackColor.BLACK_16};
`;

export default Divider;
