import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import ChevronDoneSVG from "../../../public/assets/svg/ChevronDoneSVG";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";

const SubInfoBlock = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  return (
    <Container>
      {JSON.parse(flatData?.additionalParams as string).map(
        (el: string, i: number) => {
          return (
            <TextWrapper key={el + i}>
              <ChevronDoneSVG />
              <Text>{el}</Text>
            </TextWrapper>
          );
        }
      )}
    </Container>
  );
};

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0 0 0 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 24px 48px 24px 24px;
  width: 864px;
  height: 216px;
  background: ${LightBlueColor.LB_100};
  border-radius: 24px;
  margin-top: 24px;
  row-gap: 12px;
  column-gap: 112.5px;
`;

export default SubInfoBlock;
