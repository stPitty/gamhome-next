import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import DoubleCircleSVG from "../../public/assets/svg/DoubleCircleSVG";
import CircleSVG from "../../public/assets/svg/CircleSVG";

const MapBlock = () => {
  return (
    <Container>
      <HeaderText>Расположение</HeaderText>
      <AddressText>Москва, Шарикоподшипниковская ул., 9</AddressText>
      <MetroWrapper>
        <DoubleCircleIcon />
        <MetroNameText>Дубровская</MetroNameText>
      </MetroWrapper>
      <MetroWrapper>
        <CircleIcon />
        <MetroNameText>Волгоградский проспект</MetroNameText>
      </MetroWrapper>
      <MetroWrapper>
        <CircleIcon />
        <MetroNameText>Пролетарская</MetroNameText>
      </MetroWrapper>
    </Container>
  );
};

const MetroNameText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const CircleIcon = styled(CircleSVG)`
  margin-right: 4px;
`;

const DoubleCircleIcon = styled(DoubleCircleSVG)`
  margin-right: 4px;
`;

const MetroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
`;

const AddressText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 16px 0;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 48px 0;
`;

export default MapBlock;
