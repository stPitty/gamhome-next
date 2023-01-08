import { FC, forwardRef, RefObject } from "react";
import styled from "styled-components";
import { ChildProp } from "../../../common/types";

const ObservableWrapper = forwardRef((props: ChildProp, ref) => {
  return (
    <ObservingWrapper ref={ref as RefObject<HTMLDivElement>}>
      {props.children}
    </ObservingWrapper>
  );
});

const ObservingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  align-content: center;
  overflow-x: hidden;
`;

ObservableWrapper.displayName = "ObservableWrapper";

export default ObservableWrapper;
