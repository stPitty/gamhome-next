import React, { Dispatch, SetStateAction } from "react";
import { ModalBody } from "../UI/modal/types";
import styled from "styled-components";
import Input from "../UI/input/Input";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  data: ModalBody;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isSubmitFailed: boolean;
  isValidationError: boolean;
  setIsValidationError: Dispatch<SetStateAction<boolean>>;
};

const Form: React.FC<Props> = ({
  data,
  inputValue,
  setInputValue,
  isSubmitFailed,
  isValidationError,
  setIsValidationError,
}) => {
  const reduxState = useAppSelector((state) => state);

  return (
    <>
      {data.withMultiInputs ? (
        <FormContainer withDesc={!!data.desc}>
          {data.multiInputsProps?.map((el) => {
            return (
              <StyledInput
                lowMarginTop={!!data.lowRowGap}
                key={el.id}
                withoutInfo={!!data.withoutInfo}
                isMultiInput={data.withMultiInputs}
                halfWidth={el.halfWidth}
                placeHolder={el.placeHolder}
                validationPattern={el.validationPattern}
                errorMessage={el.errorMessage}
                submitFailedMessage={el.submitFailedMessage}
                required={true}
                stateName={el.name}
                setValue={data.setValueAction}
                value={reduxState[data.stateName!][el.name].value}
                setIsValidationError={data.setValidationErrorAction}
                isValidationError={
                  reduxState[data.stateName!][el.name].isValidationError
                }
                isSubmitFailed={
                  reduxState[data.stateName!][el.name].isSubmitFailed
                }
              />
            );
          })}
        </FormContainer>
      ) : (
        <InputContainer withoutDesc={!data.desc}>
          <StyledInput
            withoutInfo={!!data?.withoutInfo}
            value={inputValue}
            setValue={setInputValue}
            placeHolder={data?.placeHolder!}
            validationPattern={data?.validationPattern!}
            errorMessage={data?.errorMessage!}
            required={true}
            isSubmitFailed={isSubmitFailed}
            submitFailedMessage={data.submitFailedMessage!}
            isValidationError={isValidationError}
            setIsValidationError={setIsValidationError}
          />
        </InputContainer>
      )}
    </>
  );
};

const InputContainer = styled.div<{ withoutDesc: boolean }>`
  display: flex;
  margin-top: ${({ withoutDesc }) => withoutDesc && "16px"};
`;

const FormContainer = styled.div<{ withDesc: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 480px;
  column-gap: 20px;
  margin-top: ${({ withDesc }) => (withDesc ? "20px" : "24px")};
`;

const StyledInput = styled(Input)<{
  withoutInfo: boolean;
  halfWidth?: boolean;
  isMultiInput?: boolean;
  lowMarginTop?: boolean;
}>`
  margin-top: ${({ withoutInfo, isMultiInput, lowMarginTop }) =>
    withoutInfo || isMultiInput ? "0" : lowMarginTop ? "16px" : "20px"};
  transition: none;
  width: ${({ halfWidth }) => (halfWidth ? "230px" : "100%")};
`;

export default Form;
