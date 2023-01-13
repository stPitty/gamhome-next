import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import CircleSVG from "../../../public/assets/svg/CircleSVG";
import { GeolocationControl, Map, Placemark } from "@pbe/react-yandex-maps";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState, TWindowSize } from "../../../redux/slicers/types";
import { useEffect, useMemo, useState } from "react";
import { getTimeToMetro } from "../../../common/helpers";
import Button from "../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import LoadingMap from "../../UI/loading_ui/LoadingMap";
import { handleResizeMap } from "./helpers";
import Link from "next/link";

const MapBlock = () => {
  const [mapWidth, setMapWidth] = useState<number | undefined>();
  const [mapHeight, setMapHeight] = useState<number | undefined>();

  const { flatData, isLoading } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  useEffect(() => {
    if (windowSize !== null) {
      handleResizeMap(windowSize, setMapWidth, setMapHeight);
    }
  }, [windowSize]);

  const modules = ["control.ZoomControl", "Placemark"];

  const timeToMetro = useMemo(getTimeToMetro(flatData?.kmMetro), [flatData]);

  return (
    <Container>
      {isLoading ? (
        <LoadingMap />
      ) : (
        <>
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
              width={mapWidth}
              height={mapHeight}
              modules={modules}
            >
              <GeolocationControl options={{ float: "left" }} />
              <Placemark defaultGeometry={[flatData.lat, flatData.lng]} />
            </Map>
          )}
          <Link
            href={flatData?.sourceUrl ? new URL(flatData?.sourceUrl) : "/"}
            style={{ width: "100%" }}
            target="_blank"
          >
            <StyledButton
              buttonSize={ButtonSize.LARGE}
              buttonType={ButtonType.FLAT}
            >
              Перейти на страницу объявления
            </StyledButton>
          </Link>
        </>
      )}
    </Container>
  );
};

const StyledButton = styled(Button)`
  margin-top: 40px;
  height: 64px;
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    margin-top: 24px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    height: 56px;
  }
  @media screen and (max-width: 767px) {
    height: 36px;
    font-size: 13px;
    line-height: 20px;
    margin-top: 24px;
  }
`;

const StyledCircleIcon = styled(CircleSVG)<{ color: string }>`
  & rect {
    fill: ${({ color }) => color};
  }
  align-self: flex-start;
  margin-top: 8px;
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
  align-items: center;
  width: 100%;
  column-gap: 4px;
  @media screen and (max-width: 374px) {
    flex-wrap: wrap;
    width: 288px;
  }
`;

const AddressText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 48px 0 0 0;
  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
  //@media screen and (max-width: 767px) {
  //  width: 349px; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //}
`;

export default MapBlock;
