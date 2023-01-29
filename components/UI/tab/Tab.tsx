import React, {
  Dispatch,
  memo,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { TabTitle } from "./types";
import { BlackColor, BrandColor, Font } from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TPathName, TWindowSize } from "../../../redux/slicers/types";
import { Route } from "../../../common/routes";
import { WindowSize } from "../../../redux/slicers/enums";

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
  const [translate, setTranslate] = useState<number>(0);
  const [prevTab, setPrevTab] = useState<number>(1);

  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  useEffect(() => {
    setTranslate(0);
    setPrevTab(1);
    setActiveTab(1);
  }, [windowSize]);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const offset = startX! - e.changedTouches[0].clientX;
    if (Math.abs(offset) > 150) {
      if (offset! > 0 && activeTab < tabsQuantity) {
        setActiveTab((prev) => prev + 1);
        setPrevTab(activeTab + 1);

        if (pathName === Route.BUY) {
          if (windowSize === WindowSize.SM) {
            if (activeTab + 1 - prevTab === 1) {
              setTranslate((prevState) => prevState - 107);
            }
          }

          if (windowSize === WindowSize.XS) {
            if (activeTab + 1 - prevTab === 1) {
              setTranslate((prevState) => prevState - 136);
            }
          }
        }

        if (pathName === Route.RENT) {
          if (windowSize === WindowSize.SM) {
            setTranslate((prevState) => prevState - 40);
          }

          if (windowSize === WindowSize.XS) {
            setTranslate((prevState) => prevState - 80);
          }
        }
      } else if (offset! < 0 && activeTab > 1) {
        setActiveTab((prev) => prev - 1);
        setPrevTab(activeTab - 1);

        if (pathName === Route.BUY) {
          if (windowSize === WindowSize.SM) {
            if (activeTab - 1 - prevTab === -1) {
              setTranslate((prevState) => prevState + 107);
            }
          }

          if (windowSize === WindowSize.XS) {
            if (activeTab + 1 - prevTab === 1) {
              setTranslate((prevState) => prevState + 136);
            }
          }
        }

        if (pathName === Route.RENT) {
          if (windowSize === WindowSize.SM) {
            setTranslate((prevState) => prevState + 40);
          }

          if (windowSize === WindowSize.XS) {
            setTranslate((prevState) => prevState + 80);
          }
        }
      }
    }
    setStartX(null);
  };

  const handleSetActiveClick = (num: number) => () => {
    setActiveTab(num);
    if (prevTab === num) return;
    setPrevTab(num);
    if (pathName === Route.BUY) {
      if (windowSize === WindowSize.SM) {
        if (num - prevTab === 1) {
          setTranslate((prevState) => prevState - 107);
        }
        if (num - prevTab === 2) {
          setTranslate((prevState) => prevState - 214);
        }
        if (num - prevTab === -1) {
          setTranslate((prevState) => prevState + 107);
        }
        if (num - prevTab === -2) {
          setTranslate((prevState) => prevState + 214);
        }
      }

      if (windowSize === WindowSize.XS) {
        if (num - prevTab === 1) {
          setTranslate((prevState) => prevState - 136);
        }
        if (num - prevTab === 2) {
          setTranslate((prevState) => prevState - 272);
        }
        if (num - prevTab === -1) {
          setTranslate((prevState) => prevState + 136);
        }
        if (num - prevTab === -2) {
          setTranslate((prevState) => prevState + 272);
        }
      }
    }

    if (pathName === Route.RENT) {
      if (windowSize === WindowSize.SM) {
        if (num > prevTab) {
          setTranslate((prevState) => prevState - 40);
        } else {
          setTranslate((prevState) => prevState + 40);
        }
      }

      if (windowSize === WindowSize.XS) {
        if (num > prevTab) {
          setTranslate((prevState) => prevState - 80);
        } else {
          setTranslate((prevState) => prevState + 80);
        }
      }
    }
  };

  return (
    <Container
      onTouchStart={handleTouchStart as any}
      onTouchEnd={handleTouchEnd as any}
    >
      <HeaderContainer
        isRent={pathName === Route.RENT}
        style={{
          transform: `translateX(${translate}px)`,
        }}
      >
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
  white-space: nowrap;
`;

const LabelContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${({ isActive }) => !isActive && "pointer"};
  @media screen and (max-width: 374px) {
    height: 52px;
  }
`;

const HeaderContainer = styled.div<{ isRent: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
  transition: 0.3s linear;
  overflow: visible;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    position: relative;
    left: ${({ isRent }) => (isRent ? "20px" : "107px")};
    width: 375px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    position: relative;
    left: ${({ isRent }) => (isRent ? "40px" : "136px")};
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: pan-y;
`;

export default memo(Tab);
