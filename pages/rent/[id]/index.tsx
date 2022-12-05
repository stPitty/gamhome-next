import WebinarBlock from "../../../components/WebinarBlock";
import DiscountsBlock from "../../../components/discounts-block";
import { ComponentWithLayout } from "../../../common/types";
import PageLayout from "../../../components/layout";
import MainServices from "../../../components/main-services";
import PriceBlock from "../../../components/price-block";
import styled from "styled-components";
import FlatBlock from "../../../components/flat-block";
import CheckOwnerBlock from "../../../components/check-owner-block";
import CardWitsImage from "../../../components/card-with-image";
import AddInfoBlock from "../../../components/add-info-block";
import ServicesBlock from "../../../components/services-block";
import { Hook, Route } from "../../../common/routes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchFlatData } from "../../../redux/slicers/flatDataSlicer";
import { TFlatState } from "../../../redux/slicers/types";

const RentPage: ComponentWithLayout = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);
  const { isError } = useAppSelector<TFlatState>((state) => state.flatData);

  useEffect(() => {
    if (router.query.id && flatData === null) {
      dispatch(fetchFlatData(router.query.id as string));
    }
  }, [router.query.id]);

  useEffect(() => {
    if (isError) {
      router.push(Route.REQUEST_ERROR);
    }
  }, [isError]);

  return (
    <Container id={Hook.HOME}>
      <InfoWrapperRow>
        <InfoWrapperColumn>
          <FlatBlock />
          <AddInfoBlock />
        </InfoWrapperColumn>
        <PriceBlock />
      </InfoWrapperRow>
      <ServicesBlock />
      <CheckOwnerBlock />
      <CardWitsImage />
      <MainServices />
      <DiscountsBlock />
      <WebinarBlock />
    </Container>
  );
};

const InfoWrapperRow = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
  justify-content: center;
  padding: 0 64px;
  height: 100%;
  column-gap: 32px;
  @media ${(props) => props.theme.screenSize.lg} {
    padding-left: 36px;
    padding-right: 36px;
  }
`;

const InfoWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.screenSize.lg} {
    padding-top: 16px;
  }
`;

const Container = styled.div`
  padding-top: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-bottom: 82px;
`;

RentPage.PageLayout = PageLayout;

export default RentPage;
