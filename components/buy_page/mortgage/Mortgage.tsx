import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import Slider from "../../UI/slider/Slider";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import BankCarousel from "./BankCarousel";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import { useEffect, useMemo, useState } from "react";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { contactManager } from "../../../redux/slicers/modalStateSlicer";
import {
  useGetBanksMutation,
  useGetRegionsQuery,
} from "../../../redux/APIs/banksApi";
import { handleGetRegionId } from "./helpers";
import Spinner from "../../UI/spinner/Spinner";
import { handleFormatValue } from "../../../common/helpers";
import BanksErrorBlock from "./BanksErrorBlock";
import { ErrorMessages } from "./enums";

const Mortgage = () => {
  const [propertyCost, setPropertyCost] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [term, setTerm] = useState<string>("");

  const [regionId, setRegionId] = useState<string | null>(null);

  const [isChanging, setIsChanging] = useState<boolean>(false);

  const [isReq, setIsReq] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { data, isLoading, isError, isSuccess } = useGetRegionsQuery("");

  const [getBanks, banksData] = useGetBanksMutation();

  useEffect(() => {
    if (!isChanging) {
      setIsReq(true);
      setIsChanging(true);
    }
    const timeout = setTimeout(() => {
      setIsChanging(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [propertyCost, downPayment, term]);

  useEffect(() => {
    if (!isChanging && regionId) {
      (async () => {
        const data = await getBanks({
          query: {
            purpose: 2,
            regionId,
            term: handleFormatValue(term),
            mainCreditSums: {
              downPayment: handleFormatValue(downPayment),
              propertyCost: handleFormatValue(propertyCost),
            },
          },
        });
        setIsReq(false);
        if (banksData.isError) {
          console.error((data as any)?.error);
        }
      })();
    }
  }, [isChanging, regionId]);

  useEffect(() => {
    if (flatData && data && !regionId) {
      const region = handleGetRegionId(flatData.city, data?.regions);
      setRegionId(region);
    }
  }, [flatData, data]);

  const minContribution = useMemo(() => {
    if (flatData?.nonFormattedPrice) {
      return Math.floor(flatData.nonFormattedPrice * 0.1);
    }
  }, [flatData?.nonFormattedPrice]);

  const maxContribution = useMemo(() => {
    if (flatData?.nonFormattedPrice) {
      return Math.floor(flatData.nonFormattedPrice * 0.9);
    }
  }, [flatData?.nonFormattedPrice]);

  const defContribution = useMemo(() => {
    if (flatData?.nonFormattedPrice) {
      return Math.floor(flatData.nonFormattedPrice * 0.2);
    }
  }, [flatData?.nonFormattedPrice]);

  const handleContactClick = () => {
    dispatch(contactManager());
  };

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderText>
            Ипотека <AdaptiveTextDivider xs={true} /> со скидкой{" "}
            <AdaptiveTextDivider xs={true} />
            до 0,7%
          </HeaderText>
          <SubHeader>
            Сниженная ипотечная ставка <AdaptiveTextDivider xs={true} />
            для наших клиентов, рассчитайте ежемесячный платёж сразу
            в&nbsp;нескольких банках
          </SubHeader>
        </HeaderContainer>
        <SliderContainer>
          <SliderWrapper>
            <Slider
              inputValue={propertyCost}
              setInputValue={setPropertyCost}
              title="Стоимость жилья"
              min={500_000}
              max={100_000_000}
              defaultValue={flatData?.nonFormattedPrice}
              type="money"
            />
            <Slider
              inputValue={downPayment}
              setInputValue={setDownPayment}
              title="Первоначальный взнос"
              min={minContribution}
              max={maxContribution}
              defaultValue={defContribution}
              type="money"
            />
            <Slider
              inputValue={term}
              setInputValue={setTerm}
              title="Срок ипотеки"
              min={1}
              max={30}
              defaultValue={20}
              type="years"
            />
          </SliderWrapper>
          <TopBtn onClick={handleContactClick} buttonSize={ButtonSize.LARGE}>
            Связаться с менеджером
          </TopBtn>
        </SliderContainer>
        {isLoading || isChanging || banksData.isLoading || isReq ? (
          <StyledSpinner />
        ) : banksData.isError ? (
          <BanksErrorBlock message={ErrorMessages.REQ_ERROR} />
        ) : (
          <BankCarousel
            cost={propertyCost}
            firstPay={downPayment}
            time={term}
            data={banksData?.data}
          />
        )}
        <BottomBtn onClick={handleContactClick}>
          Связаться с менеджером
        </BottomBtn>
      </Container>
    </Wrapper>
  );
};

const StyledSpinner = styled(Spinner)`
  min-height: unset;
  height: 340px;
  @media screen and (max-width: 1439px) {
    height: 320px;
  }
  @media screen and (max-width: 767px) {
    height: 152px;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

const StyledButton = styled(Button)`
  width: 260px;
  height: 64px;
  white-space: nowrap;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    width: 236px;
    height: 44px;
  }
`;

const TopBtn = styled(StyledButton)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const BottomBtn = styled(StyledButton)`
  display: none;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 44px;
    margin-top: 16px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  column-gap: 32px;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;

const SubHeader = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  width: 525px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 511px;
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HeaderText = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  row-gap: 16px;
  @media screen and (max-width: 1023px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 374px) {
    align-items: flex-start;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1312px;
  row-gap: 40px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 952px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    row-gap: 32px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 112px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 64px;
  }
`;

export default Mortgage;
