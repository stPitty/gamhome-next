import styled from "styled-components";
import { BlackColor } from "../../../../common/enums";
import { FormikHelpers, useFormik } from "formik";
import { FORM_SCHEMA, initialValues } from "./constants";
import { QuestionsValues } from "./types";
import Input from "../../../UI/input/Input";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  thanksForOrder,
  thanksForOrder2,
} from "../../../../redux/slicers/modalStateSlicer";

const Questions = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: FORM_SCHEMA,
    onSubmit<Values>(
      values: QuestionsValues,
      formikHelpers: FormikHelpers<Values>
    ): void | Promise<any> {
      console.log(values);
      dispatch(thanksForOrder());
    },
  });

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <HeaderText>Остались вопросы?</HeaderText>
          <HeaderTextSub>
            Оставьте заявку на&nbsp;бесплатную консультацию{" "}
            <AdaptiveTextDivider md />
            или звоните нам по&nbsp;телефону:{" "}
            <PhoneLink href="tel:+79260211033">+7&nbsp;926 021-10-33</PhoneLink>
          </HeaderTextSub>
        </HeaderWrapper>
        <StyledForm
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
        >
          <InnerFormWrapper>
            <InputsWrapper>
              <StyledInput
                value={formik.values.name}
                placeHolder="Имя"
                onChangeHandler={formik.handleChange}
                required={true}
                name="name"
              />
              <StyledInput
                value={formik.values.phone}
                placeHolder="Телефон"
                onChangeHandler={formik.handleChange}
                required={true}
                name="phone"
              />
            </InputsWrapper>
            <StyledButton buttonSize={ButtonSize.MEDIUM} type="submit">
              Отправить заявку
            </StyledButton>
          </InnerFormWrapper>
        </StyledForm>
        <ConditionsText>
          Отправляя заявку, вы&nbsp;соглашаетесь на&nbsp;обработку{" "}
          <ConditionsLink>персональных данных</ConditionsLink>
        </ConditionsText>
      </Container>
    </Wrapper>
  );
};

const ConditionsLink = styled.a`
  cursor: pointer;
  color: #0086ff;
`;

const ConditionsText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #242424;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  width: 201px;
  height: 56px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  width: 364px;
  @media screen and (max-width: 1023px) {
    width: 284px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  column-gap: 24px;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const InnerFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  align-items: center;
  @media screen and (max-width: 1023px) {
    row-gap: 10px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const PhoneLink = styled.a`
  color: ${BlackColor.BLACK_80};
  cursor: pointer;
`;

const HeaderTextSub = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  row-gap: 16px;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  max-width: 752px;
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
  @media screen and (max-width: 1023px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 72px;
  }
`;
export default Questions;
