import { ModalBodyData } from "./types";
import { ModalState } from "../../../redux/slicers/enums";
import {
  checkObjInputEmail,
  checkOwnerInputEmail,
  closeModal,
  docsSent,
  informationSent,
  openBuyCheckListWithEmail,
  openFreeDocsWithEmail,
  thanksForBuy,
} from "../../../redux/slicers/modalStateSlicer";
import {
  clearOwnerData,
  setOwnerSubmitError,
  setOwnerValidationError,
  setOwnerValue,
} from "../../../redux/slicers/ownerDataSlicer";

const emailValidationRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const flatNumberRegexp = /^\d{1,3}:\d{1,2}:\d{6,7}:\d{1,4}$/;

const personalDataRegexp = /^.{0,50}$/;

const dateRegexp = /^.{0,30}$/im;

const passSerRegexp = /^\d{4}$/;

const passDivNumRegexp = /^\d{6}$/;

const modalData: ModalBodyData = {
  [ModalState.CHECK_LISTS_INFORMATION]: {
    header: "Чек-листы и документы для аренды",
    desc: [
      {
        id: 1,
        text: "Договора защищающие интересы арендатора",
      },
      {
        id: 2,
        text: "Чек-лист: как выбрать объект",
      },
      {
        id: 3,
        text: "Чек-лист: осмотра объекта",
      },
      {
        id: 4,
        text: "Чек-лист: обязательных вопросов собственнику",
      },
    ],
    buttonText: "Купить за 799 ₽",
    modalType: "withInfo",
    nextStateBtnAction: openBuyCheckListWithEmail,
  },
  [ModalState.CHECK_LISTS_ENTER_EMAIL]: {
    header: "Чек-листы и документы для аренды",
    desc: "Файл с чек-листами и документами пришлём на почту. При отправке вы принимаете условия Политики конфиденциальности и условия Оферты",
    buttonText: "Перейти к оплате 799 ₽",
    modalType: "withInput",
    nextStateBtnAction: thanksForBuy,
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
  },
  [ModalState.THANKS_FOR_BUY]: {
    header: "Спасибо за покупку",
    desc: "Чек-листы и документы отправлены на почту",
    modalType: "lastMessage",
    image: "/images/man-sends-message.jpg",
  },
  [ModalState.FREE_DOCS_BAG_INFORMATION]: {
    header: "Пакет бесплатных документов",
    desc: [
      {
        id: 1,
        text: "Договор найма жилого помещения",
      },
      {
        id: 2,
        text: "Акт приёма-передачи квартиры",
      },
      {
        id: 3,
        text: "Перечень передаваемого имущества",
      },
      {
        id: 4,
        text: "Расписка о получении денежных средств",
      },
      {
        id: 5,
        text: "Соглашение о расторжении договора найма жилого помещения",
      },
      {
        id: 6,
        text: "Акт возврата квартиры",
      },
    ],
    buttonText: "Получить документы",
    modalType: "withInfo",
    nextStateBtnAction: openFreeDocsWithEmail,
  },
  [ModalState.FREE_DOCS_BAG_ENTER_EMAIL]: {
    header: "Пакет бесплатных документов",
    desc: "Файл с документами пришлём на почту. При отправке вы принимаете условия Политики конфиденциальности",
    buttonText: "Отправить",
    modalType: "withInput",
    nextStateBtnAction: docsSent,
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
  },
  [ModalState.DOCS_SENT]: {
    header: "Документы отправлены на почту",
    modalType: "lastMessage",
    image: "/images/man-sends-message.jpg",
  },
  [ModalState.ERROR_WITH_DOCS_POST]: {
    header: "Не получилось отправить документы",
    modalType: "lastMessage",
    desc: "Попробуйте еще раз",
    image: "/images/fatal-error.jpg",
    buttonText: "Отправить еще раз",
    nextStateBtnAction: closeModal,
    isErrorMessage: true,
  },
  [ModalState.CHECK_OBJ_INPUT_NUM]: {
    header: "Проверить объект",
    modalType: "withInput",
    buttonText: "Далее",
    nextStateBtnAction: checkObjInputEmail,
    validationPattern: flatNumberRegexp,
    placeHolder: "Кадастровый номер",
    errorMessage: "Укажите корректный кадастровый номер",
    submitFailedMessage: "Укажите кадастровый номер",
    withoutInfo: true,
  },
  [ModalState.CHECK_OBJ_INPUT_EMAIL]: {
    header: "Проверить объект",
    modalType: "withInput",
    desc: "Результат проверки пришлём на почту. При отправке вы принимаете условия Политики конфиденциальности и условия Оферты",
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
    buttonText: "Перейти к оплате 799 ₽",
    nextStateBtnAction: informationSent,
  },
  [ModalState.INFORMATION_SENT]: {
    header: "Информация отправлена на проверку",
    modalType: "lastMessage",
    desc: "Результат проверки придёт на почту. Проверка занимает от 30 минут до 3 дней",
    image: "/images/perfect-candidate.jpg",
  },
  [ModalState.CHECK_OWNER_INPUT_INFO]: {
    header: "Проверить собственника",
    modalType: "withInput",
    desc: "Укажите паспортные данные собственника квартиры",
    buttonText: "Далее",
    nextStateBtnAction: checkOwnerInputEmail,
    clearAction: clearOwnerData,
    withMultiInputs: true,
    stateName: "ownerData",
    setSubmitErrorAction: setOwnerSubmitError,
    setValidationErrorAction: setOwnerValidationError,
    setValueAction: setOwnerValue,
    fieldNames: [
      "nameValue",
      "bornDate",
      "passSer",
      "passNum",
      "dateGet",
      "divCode",
    ],
    multiInputsProps: [
      {
        id: 1,
        name: "nameValue",
        placeHolder: "ФИО",
        submitFailedMessage: "Укажите Фамилию Имя Отчество",
        validationPattern: personalDataRegexp,
        errorMessage: "Не более 50 символов",
      },
      {
        id: 2,
        name: "bornDate",
        placeHolder: "Дата рождения",
        submitFailedMessage: "Укажите Дату рождения",
        validationPattern: dateRegexp,
        errorMessage: "Не более 30 символов",
      },
      {
        id: 3,
        name: "passSer",
        placeHolder: "Серия",
        submitFailedMessage: "Укажите 4 цифры",
        validationPattern: passSerRegexp,
        errorMessage: "Укажите 4 цифры",
        halfWidth: true,
      },
      {
        id: 4,
        name: "passNum",
        placeHolder: "Номер",
        submitFailedMessage: "Укажите 6 цифр",
        validationPattern: passDivNumRegexp,
        errorMessage: "Укажите 6 цифр",
        halfWidth: true,
      },
      {
        id: 5,
        name: "dateGet",
        placeHolder: "Дата выдачи",
        submitFailedMessage: "Укажите Дату выдачи",
        validationPattern: dateRegexp,
        errorMessage: "Не более 30 символов",
        halfWidth: true,
      },
      {
        id: 6,
        name: "divCode",
        placeHolder: "Код подразделения",
        submitFailedMessage: "Укажите 6 цифр",
        validationPattern: passDivNumRegexp,
        errorMessage: "Укажите 6 цифр",
        halfWidth: true,
      },
    ],
  },
  [ModalState.CHECK_OWNER_INPUT_EMAIL]: {
    header: "Проверить собственника",
    modalType: "withInput",
    desc: "Результат проверки пришлём на почту. При отправке вы принимаете условия Политики конфиденциальности и условия Оферты",
    buttonText: "Перейти к оплате 549 ₽",
    nextStateBtnAction: informationSent,
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
  },
};

export { modalData, emailValidationRegexp };
