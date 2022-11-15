import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import CircleSVG from "../../public/assets/svg/CircleSVG";
import { flatData } from "../../mock";
import { GeolocationControl, Map, Placemark } from "@pbe/react-yandex-maps";

const MapBlock = () => {
  return (
    <Container>
      <HeaderText>Расположение</HeaderText>
      <AddressText>Москва, Шарикоподшипниковская ул., 9</AddressText>
      <MetroContainer>
        {flatData.address.metro.map((el, i) => {
          return (
            <MetroWrapper key={el.name + i}>
              <CircleSVG />
              <MetroNameText>{el.name}</MetroNameText>
              <TimeText>{el.time}</TimeText>
            </MetroWrapper>
          );
        })}
      </MetroContainer>
      <Map
        defaultState={{
          center: flatData.address.city,
          zoom: 12,
          controls: ["zoomControl"],
        }}
        width={864}
        height={448}
      >
        <GeolocationControl options={{ float: "left" }} />
        <Placemark defaultGeometry={flatData.address.addressCoordinates} />
      </Map>
    </Container>
  );
};

const MetroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 8px;
  margin: 16px 0;
`;

const TimeText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
`;

const MetroNameText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const MetroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  column-gap: 4px;
`;

const AddressText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
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
  margin: 48px 0 112px;
`;

export default MapBlock;
