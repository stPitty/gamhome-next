import styled from "styled-components";
import Body from "../Body";
import { WhiteColor } from "../../../common/enums";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleWindowScroll = (e: any) => {
    if (e.currentTarget.scrollY > 0) {
      setScrolled(true);
    }
    if (e.currentTarget.scrollY === 0) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleWindowScroll);
    }
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <Container>
      <Wrapper scrolled={scrolled}>
        <Body isHeader={true} />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div<{ scrolled: boolean }>`
  display: flex;
  background: ${WhiteColor.WHITE};
  border-radius: 100px;
  margin-top: 16px;
  transition: 0.1s linear;
  box-shadow: ${({ scrolled }) =>
    scrolled && "0 0 2px rgba(0, 0, 0, 0.12), 0 10px 16px rgba(0, 0, 0, 0.08)"};
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin-top: 4px;
  }
  @media screen and (max-width: 374px) {
    margin-top: 3px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
`;

export default Header;
