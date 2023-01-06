import { DescText, ModalBody } from "./types";
import React from "react";
import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import List from "../list/List";

type Props = {
  data: ModalBody;
};

const ModalText: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.modalType === "withInfo" ? (
        <List data={data.desc as DescText[]} />
      ) : (
        <Text>{data.desc as string}</Text>
      )}
    </>
  );
};

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
