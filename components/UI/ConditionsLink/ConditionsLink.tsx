import { FC } from "react";
import { ChildrenProp } from "../../../common/form_utils/types";
import styled from "styled-components";
import { BlackColor } from "../../../common/enums";

const ConditionsLink: FC<ChildrenProp> = ({ children }) => {
  return <TextWrapper>{children}</TextWrapper>;
};

const TextWrapper = styled.span`
  color: ${BlackColor.BLACK_48};
  cursor: pointer;
`;

export default ConditionsLink;
