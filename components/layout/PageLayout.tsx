import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
