import styled from "styled-components";
import Tab from "../../UI/tab/Tab";
import {
  buyTabsData,
  buyTabTitle,
  rentTabsData,
  rentTabTitle,
} from "./constants";
import { useState } from "react";
import TabBody from "./TabBody";
import { Hook, Route } from "../../../common/routes";
import { useAppSelector } from "../../../redux/hooks";
import { TPathName } from "../../../redux/slicers/types";

const CheckOwnerBlock = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  return (
    <Container id={Hook.CHECK_OBJ} isRent={pathName === Route.RENT}>
      <Tab
        tabsQuantity={
          pathName === Route.RENT ? rentTabsData.length : buyTabsData.length
        }
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title={pathName === Route.RENT ? rentTabTitle : buyTabTitle}
      >
        <TabBody
          data={
            pathName === Route.RENT
              ? rentTabsData[activeTab - 1]
              : buyTabsData[activeTab - 1]
          }
        />
      </Tab>
    </Container>
  );
};

const Container = styled.div<{ isRent: boolean }>`
  display: flex;
  margin-bottom: ${({ isRent }) => isRent && "-112px"};
  z-index: 1;
  padding-top: 112px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
    margin-bottom: ${({ isRent }) => isRent && "-96px"};
  }
  @media screen and (max-width: 767px) {
    padding-top: 64px;
    margin-bottom: ${({ isRent }) => isRent && "-24px"};
  }
`;

export default CheckOwnerBlock;
