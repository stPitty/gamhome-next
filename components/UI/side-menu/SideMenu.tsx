import { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TSideMenu } from "../../../redux/slicers/types";
import styled, { keyframes } from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import {
  closeMenu,
  setWillBeClosed,
} from "../../../redux/slicers/sideMenuSlicer";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import Button from "../button/Button";
import { menuItems } from "../../layout/header/constants";

const SideMenu = () => {
  const { isOpened, willBeClosed } = useAppSelector<TSideMenu>(
    (state) => state.sideMenu
  );

  const dispatch = useAppDispatch();

  const handleCloseMenu = () => {
    dispatch(setWillBeClosed());
    setTimeout(() => {
      dispatch(closeMenu());
    }, 200);
  };

  const handleMenuContainerClick = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Wrapper
      willBeClosed={willBeClosed}
      isOpen={isOpened}
      onClick={handleCloseMenu}
    >
      <Container willBeClosed={willBeClosed} onClick={handleMenuContainerClick}>
        <ButtonsContainer>
          <CloseButtonContainer onClick={handleCloseMenu}>
            <CloseIcon />
          </CloseButtonContainer>
          <StyledButton>Перейти в Telegram Bot</StyledButton>
        </ButtonsContainer>
        <MenuContainer>
          {menuItems.map((el) => {
            return (
              <MenuItemText
                key={el.id}
                href={"#" + el.link}
                onClick={handleCloseMenu}
              >
                {el.name}
              </MenuItemText>
            );
          })}
        </MenuContainer>
        <PhoneNumberLink href="tel:88009999999">
          8 800 999-99-99
        </PhoneNumberLink>
      </Container>
    </Wrapper>
  );
};

const slowAppearanceBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
`;

const slowDisappearanceBackground = keyframes`
  from {
    opacity: 100;
  }
  to {
    opacity: 0;
  }
`;

const slowAppearanceMenu = keyframes`
  from {
    left: -282px
  }
  to {
    left: 0;
  }
`;

const slowDisappearanceMenu = keyframes`
  from {
    left: 0;
  }
  to {
    left: -282px;
  }
`;

const PhoneNumberLink = styled.a`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin-top: 8px;
`;

const MenuItemText = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const StyledButton = styled(Button)`
  width: 168px;
`;

const CloseIcon = styled(CloseSVG)`
  width: 16px;
  height: 16px;
  & path {
    fill: ${BrandColor.BRAND};
  }
`;

const CloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
`;

const Container = styled.div<{ willBeClosed: boolean }>`
  position: absolute;
  row-gap: 40px;
  padding: 32px 22px 0 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 282px;
  background-color: ${WhiteColor.WHITE};
  animation: 0.22s linear
    ${({ willBeClosed }) =>
      willBeClosed ? slowDisappearanceMenu : slowAppearanceMenu};
`;

const Wrapper = styled.div<{ isOpen: boolean; willBeClosed: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: ${BlackColor.BLACK_80};
  animation: 0.22s linear
    ${({ willBeClosed }) =>
      willBeClosed ? slowDisappearanceBackground : slowAppearanceBackground};
`;

export default SideMenu;
