import React, { memo, ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import Modal from "../UI/modal/Modal";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState, TModalState } from "../../redux/slicers/types";
import ErrorPage from "../error-page/ErrorPage";
import CookiesPopup from "./cookies-popup/CookiesPopup";

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  const [acceptCookies, setAcceptCookies] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("acceptCookies")) {
      setAcceptCookies(true);
    }
  }, []);

  const { isOpened } = useAppSelector<TModalState>((state) => state.modalState);

  return (
    <>
      {isOpened && <Modal />}
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
      <CookiesPopup
        acceptCookies={acceptCookies}
        setAcceptCookies={setAcceptCookies}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1440px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: 1024px;
  }
`;

export default memo(PageLayout);
