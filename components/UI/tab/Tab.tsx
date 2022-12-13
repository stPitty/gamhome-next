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
  tabsQuantity: number;
};

const Tab: React.FC<Props> = ({
  title,
  children,
  activeTab,
  setActiveTab,
  tabsQuantity,
}) => {
  const [startX, setStartX] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const offset = startX! - e.changedTouches[0].clientX;
    if (Math.abs(offset) > 150) {
      if (offset! > 0) {
        setActiveTab((prev) => prev + 1);
      } else {
        setActiveTab((prev) => prev - 1);
      }
    }
    setStartX(null);
  };

  const handleSetActiveClick = (num: number) => () => {
    setActiveTab(num);
  };

  return (
    <Container
      onTouchStart={handleTouchStart as any}
      onTouchEnd={handleTouchEnd as any}
    >
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

const TabLine = styled.div<{
  isActive: boolean;
  side: "start" | "end";
}>`
  transition: 0.3s all linear;
  width: ${({ isActive }) => (isActive ? "100%" : "0")};
  height: 2px;
  background: ${BrandColor.BRAND};
  align-self: ${({ side }) => `flex-${side}`};
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: ${({ isActive }) => (isActive ? "calc(100% - 10px)" : "0")};
  }
`;

const LabelText = styled.p<{ isActive: boolean }>`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ isActive }) =>
    isActive ? BrandColor.BRAND : BlackColor.BLACK_48};
  margin: 12px 0 14px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  align-items: flex-start;
  justify-content: flex-start;
  user-select: none;
  touch-action: pan-y;
`;

export default memo(Tab);
