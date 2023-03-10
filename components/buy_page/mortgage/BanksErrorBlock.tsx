import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
  message: string;
};

const BanksErrorBlock: FC<Props> = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

const ErrorMessage = styled.p`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 340px;
  @media screen and (max-width: 1439px) {
    height: 320px;
  }
  @media screen and (max-width: 767px) {
    height: 152px;
  }
`;

export default memo(BanksErrorBlock);
