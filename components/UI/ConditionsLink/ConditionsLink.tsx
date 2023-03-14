import { FC, memo } from "react";
import { ChildrenProp } from "../../../common/form_utils/types";
import styled from "styled-components";
import { BlackColor } from "../../../common/enums";

type Props = {
  href: string;
};
const ConditionsLink: FC<Props & ChildrenProp> = ({ children, href }) => {
  return (
    <TextWrapper target="_blank" href={href}>
      {children}
    </TextWrapper>
  );
};

const TextWrapper = styled.a`
  color: ${BlackColor.BLACK_48};
  cursor: pointer;
`;

export default memo(ConditionsLink);
