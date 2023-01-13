import { ChildrenProp } from "../../../common/form_utils/types";
import styled from "styled-components";
import { memo } from "react";
import { Asterisk } from "@styled-icons/fa-solid/Asterisk/Asterisk";

type Props = {
  className?: string;
  isRequired?: boolean;
};

const SectionHeader: React.FC<ChildrenProp & Props> = ({
  children,
  className,
  isRequired = false,
}) => {
  return (
    <StyledSectionHeader className={className}>
      {children}
      {isRequired && <AsteriskIcon />}
    </StyledSectionHeader>
  );
};

const AsteriskIcon = styled(Asterisk)`
  width: 9px;
  height: 9px;
  color: #be0000;
  margin-left: 2px;
`;

const StyledSectionHeader = styled.div`
  display: flex;
  color: rgb(104, 107, 114);
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  padding: 20px 20px 8px;
`;

export default memo(SectionHeader);
