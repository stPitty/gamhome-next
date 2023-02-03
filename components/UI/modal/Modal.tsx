import React, { SyntheticEvent, useEffect } from "react";
import styled, { css } from "styled-components";
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
      <Container
        modalType={
          currentState !== null &&
          modalData[currentState].modalType === "lastMessage"
        }
        onClick={handleModalContainerClick}
      >
        <IconContainer
          onClick={handleModalWrapperClick}
          isLast={
            currentState !== null &&
            modalData[currentState].modalType === "lastMessage"
          }
        >
          <StyledCloseIcon />
        </IconContainer>
        <ModalBody />
      </Container>
    </Wrapper>
  );
};

const IconContainer = styled.div<{ isLast: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin: ${({ isLast }) => (isLast ? "-4px 8px" : "8px 16px")} 0 0;
  border-radius: 12px;
  transition: 0.1s linear;
  ${({ isLast }) =>
    isLast &&
    css`
      position: relative;
      top: 12px;
    `};
  @media screen and (max-width: 768px) {
    margin-right: 8px;
    position: fixed;
  }
  &:hover {
    background: ${BrandColor.BRAND_12};
  }
  &:active {
    background: ${BrandColor.BRAND_16};
  }
`;

const StyledCloseIcon = styled(CloseSVG)`
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
  z-index: 7;
  background-color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 767px) {
    align-items: flex-end;
  }
`;

const Container = styled.div<{ modalType: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ modalType }) =>
    modalType ? "0 0 32px 32px" : "0 0 40px 40px"};
  background: ${WhiteColor.WHITE};
  border-radius: 16px;
  width: fit-content;
  @media screen and (max-width: 767px) {
    max-height: 100vh;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }
    width: 375px;
    padding: 0 0 88px 20px;
    border-radius: 16px 16px 0 0;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    padding: 0 0 72px 20px;
  }
`;

export default Modal;
