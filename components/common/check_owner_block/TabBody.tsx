import { TabBodyData, TabContentType } from "./types";
import React, { memo } from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import Card from "./Card";
import Conditions from "./Conditions";

type Props = {
  data: TabBodyData;
};

const TabBody: React.FC<Props> = ({ data }) => {
  return (
    <Container contentType={data.contentType}>
      <Card data={data} />
      <Conditions data={data} />
    </Container>
  );
};

const Container = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${LightBlueColor.LB_100};
  border-radius: 48px;
  padding: 64px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    height: ${({ contentType }) => contentType === "jurAnalysis" && "1262px"};
    padding: 40px 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 24px 13px;
    border-radius: 24px;
  }
  @media screen and (max-width: 374px) {
    padding: 24px 16px;
    border-radius: 24px;
  }
`;

export default memo(TabBody);
