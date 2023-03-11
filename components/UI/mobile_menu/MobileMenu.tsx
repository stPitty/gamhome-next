import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TSideMenu } from "../../../redux/slicers/types";
import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import LogoSVG from "../../../public/assets/svg/LogoSVG";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import { closeMenu } from "../../../redux/slicers/sideMenuSlicer";
import { FC, useRef, useState } from "react";
import Button from "../button/Button";
import { MenuItem } from "../../layout/header/types";
import Link from "next/link";

type Props = {
  menuItems: MenuItem[];
  isLanding?: boolean;
};
const MobileMenu: FC<Props> = ({ menuItems, isLanding = false }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const { isOpened } = useAppSelector<TSideMenu>((state) => state.sideMenu);

  const dispatch = useAppDispatch();

  const menuRef = useRef(null);

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const offset = touchStart! - e.changedTouches[0].clientY;
    if (Math.abs(offset) > 200) {
      if (offset! < 0) {
        dispatch(closeMenu());
      } else {
        return;
      }
    }
    setTouchStart(null);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientY);
  };

  return (
    <Wrapper
      ref={menuRef}
      onTouchStart={handleTouchStart as any}
      onTouchEnd={handleTouchEnd as any}
      isOpened={isOpened}
    >
      <MenuContainer>
        <HeaderContainer>
          <StyledLogo />
          <CloseIconContainer>
            <StyledCloseIcon onClick={handleCloseMenu} />
          </CloseIconContainer>
        </HeaderContainer>
        <MenuItemsWrapper>
          {menuItems.map((el) => {
            return (
              <MenuItem
                onClick={handleCloseMenu}
                key={el.id}
                href={el?.isRedirect ? el.link : "#" + el.link}
              >
                {el.name}
              </MenuItem>
            );
          })}
        </MenuItemsWrapper>
      </MenuContainer>
      <ButtonsContainer>
        <PhoneNumberLink href="tel:88009999999">
          8 800 999-99-99
        </PhoneNumberLink>
        {!isLanding && (
          <Link
            style={{ width: "100%" }}
            href="https://t.me/GamhomeBot"
            target="_blank"
          >
            <StyledButton>Перейти в Telegram Bot</StyledButton>
          </Link>
        )}
      </ButtonsContainer>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  height: 36px;
  transition: none;
`;

const PhoneNumberLink = styled.a`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 349px;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 349px;
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const MenuItem = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  text-align: center;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const StyledCloseIcon = styled(CloseSVG)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  & path {
    fill: ${BrandColor.BRAND};
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
`;

const StyledLogo = styled(LogoSVG)``;

const MenuContainer = styled.div`
  display: flex;
  row-gap: 46px;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div<{ isOpened: boolean }>`
  display: none;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 100vw;
  z-index: 6;
  background-color: ${WhiteColor.WHITE};
  padding: 16px 13px 32px;
  bottom: 0;
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export default MobileMenu;
