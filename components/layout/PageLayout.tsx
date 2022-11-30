import React, { memo, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import Modal from "../UI/modal/Modal";
import { useAppSelector } from "../../redux/hooks";
import { TModalState } from "../../redux/slicers/types";

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  const { isOpened } = useAppSelector<TModalState>((state) => state.modalState);

  return (
    <>
      {isOpened && <Modal />}
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
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
  @media screen and ${(props) => props.theme.screenSize.lg} {
    max-width: 1024px;
  }
`;

export default memo(PageLayout);
