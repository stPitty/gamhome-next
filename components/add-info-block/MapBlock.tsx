import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import CircleSVG from "../../public/assets/svg/CircleSVG";
import { GeolocationControl, Map, Placemark } from "@pbe/react-yandex-maps";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";
import { useMemo } from "react";
import { getTimeToMetro } from "../../common/helpers";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";

const MapBlock = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const modules = ["control.ZoomControl", "Placemark", "route"];

  const timeToMetro = useMemo(getTimeToMetro(flatData?.kmMetro), [flatData]);

  return (
    <Container>
      <HeaderText>Расположение</HeaderText>
      <AddressText>{`${flatData?.city.name}, ${flatData?.address}`}</AddressText>
      <MetroContainer>
        {flatData?.metro && (
          <MetroWrapper>
            <StyledCircleIcon color={flatData?.metro.metroLine.color} />
            <MetroNameText>{flatData?.metro?.name}</MetroNameText>
            <TimeText>{timeToMetro}</TimeText>
          </MetroWrapper>
        )}
      </MetroContainer>
      {flatData && (
        <Map
          defaultState={{
            center: [flatData.lat, flatData.lng],
            zoom: 12,
            controls: ["zoomControl"],
          }}
          width={864}
          height={448}
          modules={modules}
        >
          <GeolocationControl options={{ float: "left" }} />
          <Placemark defaultGeometry={[flatData.lat, flatData.lng]} />
        </Map>
      )}
      <StyledButton buttonSize={ButtonSize.LARGE} buttonType={ButtonType.FLAT}>
        Перейти на страницу объявления
      </StyledButton>
    </Container>
  );
};

const StyledButton = styled(Button)`
  margin-top: 40px;
  height: 64px;
`;

const StyledCircleIcon = styled(CircleSVG)<{ color: string }>`
  & rect {
    fill: ${({ color }) => color};
  }
`;

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
