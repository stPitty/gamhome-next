import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import styled from "styled-components";
import { BlackColor } from "../../../common/enums";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const UsefulServicesHeader: FC<Props> = ({ children }) => {
  return (
    <HeaderTextContainer>
      <HeaderText>{children}</HeaderText>
    </HeaderTextContainer>
  );
};

const HeaderTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-items: flex-start;
  justify-content: flex-start;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 0 0 40px;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin-left: 13px;
  }
  @media screen and (max-width: 374px) {
    margin-left: 15px;
    max-width: 288px;
  }
`;

export default UsefulServicesHeader;
