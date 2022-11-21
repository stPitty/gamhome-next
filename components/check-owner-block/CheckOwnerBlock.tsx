import styled from "styled-components";
import Tab from "../UI/tab/Tab";
import { tabsData, tabTitle } from "./constants";
import { useState } from "react";
import TabBody from "./TabBody";

const CheckOwnerBlock = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <Container>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} title={tabTitle}>
        <TabBody data={tabsData[activeTab - 1]} />
      </Tab>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 112px 0 -112px;
  z-index: 1;
  overflow-y: hidden;
`;

export default CheckOwnerBlock;
