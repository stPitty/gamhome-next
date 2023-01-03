import { FC, useState } from "react";
import Button from "../button/Button";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import styled from "styled-components";
import { Font, WhiteColor } from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";

type Props = {
  isTop: boolean;
  handleClose: () => void;
};

const FullScreenHeader: FC<Props> = ({ isTop, handleClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const handleShowNumberClick = () => {
    if (!showNumber) {
      setLoading(true);
      setTimeout(() => {
        setShowNumber(true);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <HeaderContainer isTop={isTop}>
      {!isTop && <HeaderText>{flatData?.price}₽ в мес.</HeaderText>}
      <HeaderWrapper>
        <HeaderText>
          {isTop
            ? `${flatData?.title}, ${flatData?.price}₽ в мес.`
            : flatData?.title}
        </HeaderText>
        <ControlWrapper>
          {showNumber ? (
            <NumberText href={`tel:${flatData?.phone}`}>
              {flatData?.phone}
            </NumberText>
          ) : (
            <StyledButton onClick={handleShowNumberClick} loading={loading}>
              Показать телефон
            </StyledButton>
          )}
          {isTop && (
            <CloseButton onClick={handleClose}>
              <CloseSVG />
            </CloseButton>
          )}
        </ControlWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const StyledButton = styled(Button)`
  width: 137px;
  height: 36px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const NumberText = styled.a`
  width: 104px;
  height: 36px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 36px;
  margin-left: 12px;
  color: ${WhiteColor.WHITE};
`;

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`;

const HeaderText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${WhiteColor.WHITE};
  margin: 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div<{ isTop: boolean }>`
  display: ${({ isTop }) => (isTop ? "flex" : "none")};
  flex-direction: column;
  margin: 40px 64px 24px;
  width: 1312px;
  row-gap: 12px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 952px;
  }
  @media screen and (max-width: 1024px) {
    display: ${({ isTop }) => (!isTop ? "flex" : "none")};
    width: 688px;
    margin: 0 40px 40px;
  }
`;

export default FullScreenHeader;
