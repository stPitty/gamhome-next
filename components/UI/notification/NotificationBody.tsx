import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ChevronDoneSVG from "../../../public/assets/svg/ChevronDoneSVG";
import { BlackColor, Font, OtherColor } from "../../../common/enums";
import CloseSVG from "../../../public/assets/svg/CloseSVG";

const NotificationBody = () => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const handleButtonClick = () => {
    setIsOpened(false);
  };

  return (
    <>
      {isOpened && (
        <Container>
          <IconContainer>
            <ChevronIcon />
          </IconContainer>
          <Text>Промокод скопирован</Text>
          <CloseIconContainer onClick={handleButtonClick}>
            <CloseIcon />
          </CloseIconContainer>
        </Container>
      )}
    </>
  );
};

const CloseIconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CloseIcon = styled(CloseSVG)`
  width: 12px;
  height: 12px;
  & path {
    fill: ${BlackColor.BLACK_32};
  }
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 15px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.9);
  margin: 0;
  width: 200px;
`;

const bounce = keyframes`
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 0;
  }
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(43, 197, 80, 0.16);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChevronIcon = styled(ChevronDoneSVG)`
  & path {
    fill: ${OtherColor.DARK_GREEN};
    fill-opacity: 100;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 8px;
  height: 48px;
  background: ${OtherColor.LIGHT_GREEN};
  border: 1px solid rgba(43, 197, 80, 0.16);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  animation: ${bounce} 0.2s linear;
  column-gap: 12px;
  align-items: center;
`;

export default NotificationBody;
