import styled from "styled-components";
import React, { memo } from "react";
import { ChildrenProp } from "../../../common/form_utils/types";

type Props = {
  isOpen: boolean | undefined;
  className?: string;
};

const ModalWrapper: React.FC<ChildrenProp & Props> = ({
  children,
  isOpen,
  className,
}) => {
  return (
    <Wrapper
      style={{
        visibility: isOpen ? "visible" : "hidden",
      }}
      className={className}
      isOpen={isOpen}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean | undefined }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: white;
  z-index: 10;
`;

export default memo(ModalWrapper);
