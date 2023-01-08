import styled, { css } from "styled-components";
import { BlackColor, BrandColor, Font } from "../../../common/enums";
import { FC, memo, SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  handleMoneyDataFormatter,
  handleFormatValue,
} from "../../../common/helpers";

type Props = {
  title: string;
  min: number | undefined;
  max: number | undefined;
  defaultValue: number | undefined;
};

const Slider: FC<Props> = ({ title, min, max, defaultValue }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [inputBackground, setInputBackground] = useState<number>(0);

  const rangeRef = useRef(null);

  const handleSetPercents = (value: number | undefined) => {
    if (max && min && value) {
      const percent = ((value - min) * 100) / (max - min);
      setInputBackground(percent);
    }
  };

  useEffect(() => {
    handleSetPercents(defaultValue);
    if (defaultValue) {
      setSliderValue(defaultValue);
      const formattedDefValue = handleMoneyDataFormatter(defaultValue);
      setInputValue(formattedDefValue);
    }
  }, [defaultValue]);

  const handleChangeSliderValue = (e: any) => {
    const formattedValue = handleMoneyDataFormatter(e.target.value);
    handleSetPercents(e.target.value);
    setSliderValue(e.target.value);
    setInputValue(formattedValue);
  };

  const handleChangeInputValue = (e: any) => {
    const formattedSliderValue = handleFormatValue(
      e.target.value,
      min,
      max,
      sliderValue
    );

    if (formattedSliderValue && formattedSliderValue !== sliderValue) {
      handleSetPercents(formattedSliderValue);
      const formattedInputValue =
        handleMoneyDataFormatter(formattedSliderValue);
      setInputValue(formattedInputValue);
      setSliderValue(formattedSliderValue);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Input value={inputValue} onChange={handleChangeInputValue} />
      <Range
        style={{
          backgroundSize: `${inputBackground}%`,
        }}
        ref={rangeRef}
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleChangeSliderValue}
      />
    </Container>
  );
};

const Input = styled.input`
  height: 24px;
  outline: none;
  border: none;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
`;

const Range = styled.input`
  width: 100.6%;
  position: relative;
  top: 5px;
  right: 1px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  background-color: ${BlackColor.BLACK_32};
  background-image: linear-gradient(${BrandColor.BRAND}, ${BrandColor.BRAND});
  background-repeat: no-repeat;
  border-radius: 0 0 8px 8px;
  &::-webkit-slider-runnable-track {
    height: 8px;
  }

  &::-moz-range-track {
    height: 8px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -4px;
    background-color: ${BrandColor.BRAND};
    width: 16px;
    height: 16px;
    border-radius: 16px;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -4px;
    background-color: ${BrandColor.BRAND};
    width: 16px;
    height: 16px;
    border-radius: 16px;
  }
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 215px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 216px;
  }
  @media screen and (max-width: 767px) {
    width: 349px;
  }
`;

export default memo(Slider);
