import React, { memo, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export default memo(PageLayout);
