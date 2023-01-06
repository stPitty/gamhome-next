import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const CardsWrapper: FC<Props> = ({ children }) => {
  return <StyledCardsWrapper>{children}</StyledCardsWrapper>;
};

const StyledCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 32px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

export default CardsWrapper;
