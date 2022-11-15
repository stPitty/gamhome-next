import React, {
  Dispatch,
  memo,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import styled from "styled-components";
import { TabTitle } from "./types";
import { BlackColor, BrandColor, Font } from "../../../common/enums";
import { sides } from "./constants";

type Props = {
  title: TabTitle[];
  children: ReactNode;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  initialActiveTab?: number;
};

const Tab: React.FC<Props> = ({
  title,
  initialActiveTab,
  children,
  activeTab,
  setActiveTab,
}) => {
  const handleSetActiveClick = (num: number) => () => {
    setActiveTab(num);
  };

  return (
    <Container>
      <HeaderContainer>
        {title.map((el) => (
          <LabelContainer
            onClick={handleSetActiveClick(el.id)}
            isActive={el.id === activeTab}
            key={el.id}
          >
            <LabelText isActive={el.id === activeTab}>{el.title}</LabelText>
            <TabLine side={sides[el.id]} isActive={el.id === activeTab} />
          </LabelContainer>
        ))}
      </HeaderContainer>
      {children}
    </Container>
  );
};

const TabBodyContainer = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
`;

const TabLine = styled.div<{
  isActive: boolean;
  side: "start" | "end";
}>`
  width: ${({ isActive }) => (isActive ? "100%" : "0")};
  height: 2px;
  background: ${BrandColor.BRAND};
  align-self: ${({ side }) => `flex-${side}`};
`;

const LabelText = styled.p<{ isActive: boolean }>`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ isActive }) =>
    isActive ? BrandColor.BRAND : BlackColor.BLACK_48};
  margin: 12px 0 14px;
`;

const LabelContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${({ isActive }) => !isActive && "pointer"};
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default memo(Tab);
