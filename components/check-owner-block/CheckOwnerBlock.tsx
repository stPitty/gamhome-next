import styled from "styled-components";
import Tab from "../UI/tab/Tab";
import { tabsData, tabTitle } from "./constants";
import { useState } from "react";
import TabBody from "./TabBody";
import { Hook } from "../../common/routes";

const CheckOwnerBlock = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <Container id={Hook.CHECK_OBJ}>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} title={tabTitle}>
        <TabBody data={tabsData[activeTab - 1]} />
      </Tab>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: -112px;
  z-index: 1;
  padding-top: 112px;
`;

export default CheckOwnerBlock;
