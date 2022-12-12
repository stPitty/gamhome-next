import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import ChevronDoneSVG from "../../../public/assets/svg/ChevronDoneSVG";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import DeployableWrapper from "../../UI/deployable-wrapper/DeployableWrapper";

const SubInfoBlock = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);
  const { isLoading } = useAppSelector<TFlatState>((state) => state.flatData);

  const subInfoData: string[] | null = flatData
    ? JSON.parse(flatData?.additionalParams as string)
    : null;

  return (
    <Wrapper minHeight={168}>
      <Container paramsCount={subInfoData?.length}>
        {!isLoading &&
          subInfoData?.map((el: string, i: number) => {
            return (
              <TextWrapper key={el + i}>
                <IconContainer>
                  <ChevronDoneSVG />
                </IconContainer>
                <Text>{el}</Text>
              </TextWrapper>
            );
          })}
      </Container>
    </Wrapper>
  );
};

const IconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  column-gap: 6px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 162px;
  }
`;

const Wrapper = styled(DeployableWrapper)`
  margin-top: 24px;
  border-radius: 24px;
  background: ${LightBlueColor.LB_100};
  padding: 24px;
`;

const Container = styled.div<{ paramsCount: number | undefined }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 107px;
  width: 864px;
  height: ${({ paramsCount }) => {
    if (paramsCount) {
      return `${(paramsCount / 3 + 1) * 36}px`;
    }
  }};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
    column-gap: 32px;
    height: ${({ paramsCount }) => {
      if (paramsCount) {
        return `${(paramsCount / 3) * 60 + 48}px`;
      }
    }};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    column-gap: 19px;
    height: ${({ paramsCount }) => {
      if (paramsCount) {
        return `${(paramsCount / 3 + 1) * 36}px`;
      }
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    column-gap: 0;
    height: auto;
    width: fit-content;
    flex-wrap: nowrap;
  }
`;

export default SubInfoBlock;
