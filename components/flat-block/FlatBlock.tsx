import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../common/enums";
import PhotoBlock from "./photo-block/PhotoBlock";
import InfoBlock from "./info-block";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";
import ChevronSVG from "../../public/assets/svg/ChevronSVG";

const FlatBlock: React.FC = () => {
  const { flatData, isLoading } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingBlock />
      ) : (
        <HeaderText>{flatData?.title}</HeaderText>
      )}
      <TelegramButtonContainer>
        <ChevronIconContainer>
          <ChevronIcon />
        </ChevronIconContainer>
        <TelegramBtnText>Назад в Telegram бот</TelegramBtnText>
      </TelegramButtonContainer>
      <PhotoBlock />
      <InfoBlock />
    </Container>
  );
};

const TelegramBtnText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BlackColor.BLACK_48};
  margin: 0;
`;

const ChevronIconContainer = styled.div`
  display: flex;
  width: 12px;
  height: 24px;
  align-items: center;
`;

const ChevronIcon = styled(ChevronSVG)`
  & path {
    fill: ${BlackColor.BLACK_64};
  }
`;

const TelegramButtonContainer = styled.div`
  display: none;
  column-gap: 4px;
  width: 349px;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    display: flex;
  }
`;

const LoadingBlock = styled.div`
  width: 864px;
  height: 40px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_PRIMARY};
  margin: 0;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default FlatBlock;
