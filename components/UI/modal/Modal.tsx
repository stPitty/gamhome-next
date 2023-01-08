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
  min-height: 16px;
  min-width: 16px;
  & path {
    fill: ${BrandColor.BRAND};
  }
  @media screen and (max-width: 768px) {
    margin-right: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 7;
  background-color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 767px) {
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
  @media screen and (max-width: 767px) {
    border-radius: 16px 16px 0 0;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 375px;
    padding: 0 0 32px 20px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    padding: 0 0 20px 20px;
  }
  @media screen and (max-width: 374px) {
    max-height: 536px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }
    padding-bottom: 68px;
  }
`;

export default Modal;
