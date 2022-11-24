import {
  Dispatch,
  memo,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { BlackColor, Font, WhiteColor } from "../../../common/enums";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: "email";
  validationPattern?: RegExp;
  width?: number;
  required?: boolean;
};

const Input: React.FC<Props> = ({
  value,
  setValue,
  type,
  width,
  required,
  validationPattern,
}) => {
  const [isValidationError, setIsValidationError] = useState<boolean>(false);

  useEffect(() => {
    console.log(isValidationError);
  }, [isValidationError]);

  const handleValueChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (validationPattern) {
      setIsValidationError(!validationPattern?.test(e.currentTarget.value));
    }
  };

  return (
    <Container>
      <StyledInput
        type="text"
        value={value}
        onChange={handleValueChange}
        required={required}
        width={width}
      />
      <StyledLabel>{type}</StyledLabel>
    </Container>
  );
};

const Container = styled.div`
  height: 56px;
  overflow: hidden;
`;

const StyledLabel = styled.label`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  color: ${BlackColor.BLACK_32};
  text-transform: capitalize;
  position: relative;
  bottom: 40px;
  padding-left: 16px;
  pointer-events: none;
  transition: 0.1s all linear;
`;

const StyledInput = styled.input<{ width: number | undefined }>`
  background: ${WhiteColor.WHITE};
  border: 1px solid ${BlackColor.BLACK_32};
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
    border-color: ${BlackColor.BLACK_48};
  }
  &:focus {
    border: 1px solid ${BlackColor.BLACK_64};
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 13px;
    line-height: 20px;
    bottom: 52px;
  }
`;

export default memo(Input);
