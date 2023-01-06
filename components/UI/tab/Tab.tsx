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
  const [translate, setTranslate] = useState<boolean>(false);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const offset = startX! - e.changedTouches[0].clientX;
    if (Math.abs(offset) > 150) {
      if (offset! > 0 && activeTab < tabsQuantity) {
        setTranslate(true);
        setActiveTab((prev) => prev + 1);
      } else if (offset! < 0 && activeTab > 1) {
        setTranslate(false);
        setActiveTab((prev) => prev - 1);
      }
    }
    setStartX(null);
  };

  const handleSetActiveClick = (num: number) => () => {
    setActiveTab(num);
    if (activeTab < tabsQuantity) {
      setTranslate(true);
    } else if (activeTab > 1) {
      setTranslate(false);
    }
  };

  return (
    <Container
      onTouchStart={handleTouchStart as any}
      onTouchEnd={handleTouchEnd as any}
    >
      <HeaderContainer move={translate}>
        {title.map((el) => (
          <LabelContainer
            onClick={handleSetActiveClick(el.id)}
            isActive={el.id === activeTab}
            key={el.id}
          >
            <LabelText isActive={el.id === activeTab}>{el.title}</LabelText>
            <TabLineContainer>
              <TabLine side="start" isActive={el.id === activeTab} />
              <TabLine side="end" isActive={el.id === activeTab} />
            </TabLineContainer>
          </LabelContainer>
        ))}
      </HeaderContainer>
      {children}
    </Container>
  );
};

const TabLineContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
  @media screen and (max-width: 374px) {
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
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
  @media screen and (max-width: 374px) {
    white-space: nowrap;
  }
`;

const LabelContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${({ isActive }) => !isActive && "pointer"};
  @media screen and (max-width: 374px) {
    height: 52px
`;

const HeaderContainer = styled.div<{ move: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
  @media screen and (max-width: 374px) {
    width: 320px;
    overflow: visible;
    transition: 0.3s linear;
    transform: translateX(${({ move }) => (move ? "-40px" : "40px")});
  }
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
