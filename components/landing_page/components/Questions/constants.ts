import { QuestionsValues } from "./types";
import * as yup from "yup";

const initialValues: QuestionsValues = {
  name: "",
  phone: "",
};

const FORM_SCHEMA = yup.object().shape({
  name: yup.string().required("").max(20, "Введите до 20 символов"),
  phone: yup.string().required("").max(20, "Введите до 20 символов"),
});

export { initialValues, FORM_SCHEMA };
