import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import { FC } from "react";

type Props = {
  title: string;
  min: number;
  max: number;
  defaultValue: number;
};

const Slider: FC<Props> = ({ title, min, max, defaultValue }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>65 500 000 ₽</Value>
      <Range type="range" min={min} max={max} defaultValue={defaultValue} />
    </Container>
  );
};

const Range = styled.input`
  background-color: ${BlackColor.BLACK_32};
  width: 101%;
  position: relative;
  left: -3px;
`;

const Value = styled.div`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${BlackColor.BLACK_SECONDARY};
  padding-left: 16px;
`;

const Title = styled.div`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BlackColor.BLACK_32};
  padding: 6px 0 0 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 64px;
  width: 327px;
  border-radius: 8px;
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: ${BlackColor.BLACK_32};
  overflow: hidden;
`;

export default Slider;
