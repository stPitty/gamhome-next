import {
  Dispatch,
  memo,
  SetStateAction,
  SyntheticEvent,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import {
  BlackColor,
  Font,
  OtherColor,
  WhiteColor,
} from "../../../common/enums";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeHolder: string;
  validationPattern?: RegExp;
  errorMessage?: string;
  width?: number;
  isSubmitFailed?: boolean;
  submitFailedMessage?: string;
  required?: boolean;
  isValidationError?: boolean;
  setIsValidationError?: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

const Input: React.FC<Props> = ({
  value,
  setValue,
  placeHolder,
  width,
  validationPattern,
  errorMessage = "",
  isSubmitFailed = false,
  submitFailedMessage = "",
  required = false,
  isValidationError = false,
  setIsValidationError,
  className,
}) => {
  // const [isValidationError, setIsValidationError] = useState<boolean>(false);

  const handleValueChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (validationPattern && setIsValidationError)
      setIsValidationError(!validationPattern?.test(e.currentTarget.value));
    if (e.currentTarget.value.length === 0 && setIsValidationError)
      setIsValidationError(false);
  };

  const currErrMsg = useMemo(() => {
    if (required && isSubmitFailed && value.length === 0) {
      return submitFailedMessage;
    }
    if (isValidationError) {
      return errorMessage;
    }
    return "⠀";
  }, [isSubmitFailed, value]);

  const isError = useMemo(() => {
    if ((isSubmitFailed && value.length === 0) || isValidationError) {
      return true;
    }
    return false;
  }, [isSubmitFailed, value]);

  return (
    <Wrapper className={className}>
      <Container>
        <StyledInput
          type="text"
          value={value}
          onChange={handleValueChange}
          width={width}
          required={required}
          isValidationError={isValidationError}
        />
        <StyledLabel isValidationError={isError}>{placeHolder}</StyledLabel>
      </Container>
      <ValidationMessage isError={isError}>{currErrMsg}</ValidationMessage>
    </Wrapper>
  );
};

const ValidationMessage = styled.p<{ isError: boolean }>`
  visibility: ${({ isError }) => !isError && "hidden"};
  font-family: ${Font.ROBOTO};
  font-size: 13px;
  line-height: 20px;
  color: ${OtherColor.ERROR_JUICE};
  margin: 2px 0 0 16px;
  transition: none;
`;

const Wrapper = styled.div``;

const Container = styled.div`
  height: 56px;
  overflow: hidden;
`;

const StyledLabel = styled.label<{
  isValidationError: boolean;
}>`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  color: ${({ isValidationError }) =>
    isValidationError ? OtherColor.ERROR_JUICE : BlackColor.BLACK_32};
  text-transform: capitalize;
  position: relative;
  bottom: 40px;
  padding-left: 16px;
  pointer-events: none;
  transition: 0.1s all linear;
`;

const StyledInput = styled.input<{
  width: number | undefined;
  isValidationError: boolean;
}>`
  background: ${WhiteColor.WHITE};
  border: 1px solid
    ${({ isValidationError }) =>
      isValidationError ? OtherColor.ERROR_JUICE : BlackColor.BLACK_32};
  border-radius: 8px;
  height: 56px;
  padding: 26px 16px 6px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  outline: none;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  &:hover {
    border-color: ${({ isValidationError }) =>
      isValidationError ? OtherColor.ERROR_JUICE : BlackColor.BLACK_48};
  }
  &:focus {
    border: 1px solid
      ${({ isValidationError }) =>
        isValidationError ? OtherColor.ERROR_JUICE : BlackColor.BLACK_64};
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 13px;
    line-height: 20px;
    bottom: 52px;
  }
`;

export default memo(Input);
