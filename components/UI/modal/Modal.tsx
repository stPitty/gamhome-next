import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { BlackColor, BrandColor, WhiteColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { closeModal } from "../../../redux/slicers/modalStateSlicer";
import ModalBody from "./ModalBody";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import { modalData } from "./constants";
import { TModalState } from "../../../redux/slicers/types";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();

  const { currentState } = useAppSelector<TModalState>(
    (state) => state.modalState
  );

  const handleModalWrapperClick = () => {
    dispatch(closeModal());
    if (currentState && modalData[currentState].clearAction) {
      dispatch(modalData[currentState].clearAction!());
    }
  };

  const handleModalContainerClick = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleModalWrapperClick}>
      <Container onClick={handleModalContainerClick}>
        <StyledCloseIcon onClick={handleModalWrapperClick} />
        <ModalBody />
      </Container>
    </Wrapper>
  );
};

const StyledCloseIcon = styled(CloseSVG)`
  align-self: flex-end;
  cursor: pointer;
  margin: 18px 26px 0 0;
  height: 16px;
  width: 16px;
  & path {
    fill: ${BrandColor.BRAND};
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 767px) and (min-width: 375px) {
    align-items: flex-end;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 40px 40px;
  background: ${WhiteColor.WHITE};
  border-radius: 16px;
  width: fit-content;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 0 0 32px 20px;
    width: 375px;
    border-radius: 16px 16px 0 0;
  }
`;

export default Modal;
