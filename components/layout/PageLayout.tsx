import React, { memo, ReactNode, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import Modal from "../UI/modal/Modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TModalState } from "../../redux/slicers/types";
import CookiesPopup from "./cookies-popup/CookiesPopup";
import SideMenu from "../UI/side_menu/SideMenu";
import ScrollTopBtn from "../UI/scroll_top_btn/ScrollTopBtn";
import { setAcceptedCookie } from "../../redux/slicers/cookiePopUpSlicer";
import MobileMenu from "../UI/mobile_menu/MobileMenu";
import { menuItems } from "./header/constants";

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  const { isOpened } = useAppSelector<TModalState>((state) => state.modalState);

  return (
    <>
      <MobileMenu menuItems={menuItems} />
      <ScrollTopBtn />
      {isOpened && <Modal />}
      <Header />
      <Container>{children}</Container>
      <Footer />
      <CookiesPopup />
      <SideMenu menuItems={menuItems} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export default memo(PageLayout);
