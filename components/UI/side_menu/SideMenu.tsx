import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TSideMenu } from "../../../redux/slicers/types";
import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import { closeMenu } from "../../../redux/slicers/sideMenuSlicer";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import Button from "../button/Button";
import { MenuItem } from "../../layout/header/types";
import Link from "next/link";

type Props = {
  menuItems: MenuItem[];
  isLanding?: boolean;
};
const SideMenu: FC<Props> = ({ menuItems, isLanding = false }) => {
  const [menuSlide, setMenuSlide] = useState<boolean>(false);

  const { isOpened } = useAppSelector<TSideMenu>((state) => state.sideMenu);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeout = setTimeout(() => {}, 0);
    if (isOpened) {
      timeout = setTimeout(() => setMenuSlide(true), 250);
    } else {
      setMenuSlide(false);
    }
    return () => clearTimeout(timeout);
  }, [isOpened]);

  const handleCloseMenu = () => {
    setMenuSlide(false);
    setTimeout(() => dispatch(closeMenu()), 250);
  };

  const handleMenuContainerClick = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Wrapper isOpen={isOpened} onClick={handleCloseMenu}>
      <Container isSlide={menuSlide} onClick={handleMenuContainerClick}>
        <ButtonsContainer>
          <CloseButtonContainer onClick={handleCloseMenu}>
            <CloseIcon />
          </CloseButtonContainer>
          {!isLanding && (
            <Link href="https://t.me/GamhomeBot" target="_blank">
              <StyledButton>Перейти в Telegram Bot</StyledButton>
            </Link>
          )}
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
  height: 36px;
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
  border-radius: 12px;
  transition: 0.1s linear;
  &:hover {
    background: ${BrandColor.BRAND_12};
  }
  &:active {
    background: ${BrandColor.BRAND_16};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
  justify-content: flex-end;
`;

const Container = styled.div<{ isSlide: boolean }>`
  row-gap: 40px;
  padding: 32px 22px 0 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 282px;
  overflow-y: auto;
  transition: 0.25s linear;
  background-color: ${WhiteColor.WHITE};
  position: relative;
  left: ${({ isSlide }) => (isSlide ? "0" : "-282px")};
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 6;
  background-color: ${({ isOpen }) => (isOpen ? BlackColor.BLACK_80 : "none")};
  transition: 0.25s linear;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default SideMenu;
