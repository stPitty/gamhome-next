import { ModalBody, ModalBodyData } from "./types";
import { ModalState } from "../../../redux/slicers/enums";
import {
  checkObjInputEmail,
  checkOwnerInputEmail,
  closeModal,
  docsSent,
  errorWithDocs,
  informationSent,
  makeDeal,
  openBuyCheckListWithEmail,
  openFreeDocsWithEmail,
  thanksForBuy,
  thanksForOrder,
  thanksForOrder2,
} from "../../../redux/slicers/modalStateSlicer";
import {
  clearOwnerData,
  emptyClear,
  setOwnerSubmitError,
  setOwnerValidationError,
  setOwnerValue,
} from "../../../redux/slicers/ownerDataSlicer";
import {
  clearServiceData,
  setServiceSubmitError,
  setServiceValidationError,
  setServiceValue,
} from "../../../redux/slicers/serviceDataSlicer";
import {
  ownerInputFieldsNames,
  serviceInputFieldsNames,
} from "../../../redux/slicers/constants";
import ConditionsLink from "../ConditionsLink/ConditionsLink";
import {
  setCadastralNum,
  setEmail,
} from "../../../redux/slicers/cadastralDataSlicer";

const emailValidationRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const flatNumberRegexp = /^\d+:\d+:\d+:\d+$/;

const personalDataRegexp = /^.{0,50}$/;

const userDateRegexp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

const dateErrorMessage = "Введите число в формате: YYYY-MM-DD";

const passNumRegexp = /^\d{6}$/;

const issuerCodeRegexp = /^\d{3}-\d{3}$/;

const issuerCodeErrorMessage = "Введите число в формате: XXX-XXX";

const dateRegexp = /^.{0,30}$/im;

const passSerRegexp = /^\d{4}$/;

const nameRegexp = /^[а-яА-я]{1,32}\s[а-яА-я]{1,32}(\s[а-яА-я]{1,32})?$/;

const nameErrorMessage = "Введите корректные ФИО";

const fiftySymbolsErrorMessage = "Не более 50 символов";

const thirtySymbolsErrorMessage = "Не более 30 символов";

const fourIntsErrorMessage = "Укажите 4 цифры";

const sixIntsErrorMessage = "Укажите 6 цифр";

const serviceModal: Omit<ModalBody, "header"> = {
  modalType: "withInput",
  subDesc: (
    <span>
      Отправляя заявку вы&nbsp;подтверждаете, что согласны с&nbsp;
      <ConditionsLink href="/documents/privacy_policy.pdf">
        Политикой конфиденциальности
      </ConditionsLink>{" "}
      и&nbsp;условиями{" "}
      <ConditionsLink href="/documents/user_agreement.pdf">
        Пользовательского Соглашения
      </ConditionsLink>
    </span>
  ),
  buttonText: "Оставить заявку",
  nextStateBtnAction: thanksForOrder,
  clearAction: clearServiceData,
  withMultiInputs: true,
  fieldNames: serviceInputFieldsNames,
  stateName: "serviceData",
  setSubmitErrorAction: setServiceSubmitError,
  setValidationErrorAction: setServiceValidationError,
  setValueAction: setServiceValue,
  lowRowGap: true,
  multiInputsProps: [
    {
      id: 1,
      name: "name",
      validationPattern: personalDataRegexp,
      placeHolder: "Имя",
      errorMessage: fiftySymbolsErrorMessage,
      submitFailedMessage: "Укажите имя",
    },
    {
      id: 2,
      name: "phone",
      validationPattern: dateRegexp,
      placeHolder: "Телефон",
      errorMessage: thirtySymbolsErrorMessage,
      submitFailedMessage: "Укажите телефон",
    },
    {
      id: 3,
      name: "city",
      validationPattern: dateRegexp,
      placeHolder: "Город",
      errorMessage: thirtySymbolsErrorMessage,
      submitFailedMessage: "Укажите город",
    },
  ],
  isCrmDeal: true,
};

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
    desc: (
      <span>
        Файл с&nbsp;чек-листами и&nbsp;документами пришлём на&nbsp;почту. При
        отправке вы&nbsp;принимаете условия{" "}
        <ConditionsLink href="/documents/privacy_policy.pdf">
          Политики конфиденциальности
        </ConditionsLink>{" "}
        и&nbsp;условия{" "}
        <ConditionsLink href="/documents/user_agreement.pdf">
          Пользовательского Соглашения
        </ConditionsLink>
      </span>
    ),
    buttonText: "Перейти к оплате 799 ₽",
    modalType: "withInput",
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
    nextStateBtnAction: closeModal,
    isPayable: true,
    price: 79900, //799*100
    paymentObj: {
      isLast: true,
      type: "check-list",
    },
    errorAction: errorWithDocs,
  },
  [ModalState.THANKS_FOR_BUY]: {
    header: "Спасибо за покупку",
    desc: "Чек-листы и\u00A0документы отправлены на\u00A0почту",
    modalType: "lastMessage",
    image: "/images/man-sends-message.webp",
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
        text: "Соглашение о\u00A0расторжении договора найма жилого помещения",
      },
      {
        id: 6,
        text: "Акт возврата квартиры",
      },
    ],
    buttonText: "Получить документы",
    modalType: "withInfo",
  },
  [ModalState.FREE_DOCS_BAG_ENTER_EMAIL]: {
    header: "Пакет бесплатных документов",
    desc: (
      <span>
        Файл с&nbsp;документами пришлём на&nbsp;почту. При отправке
        вы&nbsp;принимаете условия{" "}
        <ConditionsLink href="/documents/privacy_policy.pdf">
          Политики конфиденциальности
        </ConditionsLink>
      </span>
    ),
    buttonText: "Отправить",
    modalType: "withInput",
    nextStateBtnAction: docsSent,
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
    isPayable: true,
    paymentObj: {
      isLast: true,
      type: "freeDocs",
    },
    errorAction: errorWithDocs,
  },
  [ModalState.DOCS_SENT]: {
    header: "Документы отправлены на почту",
    modalType: "lastMessage",
    image: "/images/man-sends-message.webp",
  },
  [ModalState.ERROR_WITH_DOCS_POST]: {
    header: "Не получилось отправить документы",
    modalType: "lastMessage",
    desc: "Попробуйте еще раз",
    image: "/images/fatal-error.webp",
    buttonText: "Отправить еще раз",
    nextStateBtnAction: closeModal,
    isErrorMessage: true,
  },
  [ModalState.ERROR_APPLYING]: {
    header: "Не получилось отправить заявку",
    modalType: "lastMessage",
    desc: "Попробуйте еще раз",
    image: "/images/fatal-error.webp",
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
    isPayable: true,
    paymentObj: {
      saveDataAction: setCadastralNum,
    },
  },
  [ModalState.CHECK_OBJ_INPUT_EMAIL]: {
    header: "Проверить объект",
    modalType: "withInput",
    desc: (
      <span>
        Результат проверки пришлём на&nbsp;почту. При отправке
        вы&nbsp;принимаете условия{" "}
        <ConditionsLink href="/documents/privacy_policy.pdf">
          Политики конфиденциальности
        </ConditionsLink>{" "}
        и&nbsp;условия{" "}
        <ConditionsLink href="/documents/user_agreement.pdf">
          Пользовательского Соглашения
        </ConditionsLink>
      </span>
    ),
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
    buttonText: "Перейти к оплате 799 ₽",
    nextStateBtnAction: closeModal,
    isPayable: true,
    price: 79900, //799*100
    paymentObj: {
      saveDataAction: setEmail,
      isLast: true,
      type: "property",
    },
    errorAction: errorWithDocs,
  },
  [ModalState.INFORMATION_SENT]: {
    header: "Информация отправлена на\u00A0проверку",
    modalType: "lastMessage",
    desc: "Результат проверки придёт на\u00A0почту. Проверка занимает от\u00A030\u00A0минут до\u00A03\u00A0дней",
    image: "/images/perfect-candidate.webp",
  },
  [ModalState.CHECK_OWNER_INPUT_INFO]: {
    header: "Проверить собственника",
    modalType: "withInput",
    desc: "Укажите паспортные данные собственника квартиры",
    buttonText: "Далее",
    nextStateBtnAction: checkOwnerInputEmail,
    clearAction: emptyClear,
    withMultiInputs: true,
    stateName: "ownerData",
    setSubmitErrorAction: setOwnerSubmitError,
    setValidationErrorAction: setOwnerValidationError,
    setValueAction: setOwnerValue,
    fieldNames: ownerInputFieldsNames,
    multiInputsProps: [
      {
        id: 1,
        name: "nameValue",
        placeHolder: "ФИО",
        submitFailedMessage: "Укажите Фамилию Имя Отчество",
        validationPattern: nameRegexp,
        errorMessage: nameErrorMessage,
      },
      {
        id: 2,
        name: "bornDate",
        placeHolder: "Дата рождения",
        submitFailedMessage: "Укажите Дату рождения",
        validationPattern: userDateRegexp,
        errorMessage: dateErrorMessage,
      },
      {
        id: 3,
        name: "passSer",
        placeHolder: "Серия",
        submitFailedMessage: fourIntsErrorMessage,
        validationPattern: passSerRegexp,
        errorMessage: fourIntsErrorMessage,
        halfWidth: true,
      },
      {
        id: 4,
        name: "passNum",
        placeHolder: "Номер",
        submitFailedMessage: sixIntsErrorMessage,
        validationPattern: passNumRegexp,
        errorMessage: sixIntsErrorMessage,
        halfWidth: true,
      },
      {
        id: 5,
        name: "dateGet",
        placeHolder: "Дата выдачи",
        submitFailedMessage: "Укажите Дату выдачи",
        validationPattern: userDateRegexp,
        errorMessage: dateErrorMessage,
        halfWidth: true,
      },
      {
        id: 6,
        name: "divCode",
        placeHolder: "Код подразделения",
        submitFailedMessage: sixIntsErrorMessage,
        validationPattern: issuerCodeRegexp,
        errorMessage: issuerCodeErrorMessage,
        halfWidth: true,
      },
    ],
    isPayable: true,
  },
  [ModalState.CHECK_OWNER_INPUT_EMAIL]: {
    header: "Проверить собственника",
    modalType: "withInput",
    desc: (
      <span>
        Результат проверки пришлём на&nbsp;почту. При отправке
        вы&nbsp;принимаете условия{" "}
        <ConditionsLink href="/documents/privacy_policy.pdf">
          Политики конфиденциальности
        </ConditionsLink>{" "}
        и&nbsp;условия{" "}
        <ConditionsLink href="/documents/user_agreement.pdf">
          Пользовательского Соглашения
        </ConditionsLink>
      </span>
    ),
    buttonText: "Перейти к оплате 549 ₽",
    nextStateBtnAction: closeModal,
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
    errorAction: errorWithDocs,
    clearAction: clearOwnerData,
    isPayable: true,
    paymentObj: {
      isLast: true,
      type: "subject",
    },
  },
  [ModalState.WANT_TO_LEND_FLAT]: {
    header: "Хочу сдать квартиру",
    pipelineId: 6267634,
    ...serviceModal,
  },
  [ModalState.AGENT_FOR_CONTRACT]: {
    header: "Агент на договор",
    pipelineId: 6267646,
    price: 5000,
    ...serviceModal,
  },
  [ModalState.CONCIERGE_SERVICE_RENT]: {
    header: "Консьерж сервис",
    pipelineId: 6267638,
    price: 14890,
    ...serviceModal,
  },
  [ModalState.CONCIERGE_SERVICE_BUY]: {
    header: "Консьерж сервис",
    pipelineId: 6267682,
    price: 99999,
    ...serviceModal,
  },
  [ModalState.KEY_SEARCH_RENT]: {
    header: "Поиск под ключ",
    pipelineId: 6267630,
    price: 20000,
    ...serviceModal,
  },
  [ModalState.KEY_SEARCH_BUY]: {
    header: "Поиск под ключ",
    pipelineId: 6252474,
    price: 150000,
    ...serviceModal,
  },
  [ModalState.THANKS_FOR_ORDER]: {
    header: "Спасибо за заявку",
    desc: "Мы свяжемся с вами в ближайшее время",
    modalType: "lastMessage",
    image: "/images/cozy-evening.webp",
  },
  [ModalState.THANKS_FOR_ORDER_2]: {
    header: "Спасибо за заявку",
    desc: "Мы свяжемся с вами в ближайшее время",
    modalType: "lastMessage",
    image: "/images/man-sends-message.webp",
  },
  [ModalState.CONTACT_MANAGER]: {
    ...serviceModal,
    header: "Расчёт ипотеки",
    desc: "Мы свяжемся с вами в ближайшее время",
    pipelineId: 6267754,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.PROPERTY_EVAL]: {
    ...serviceModal,
    header: "Оценка недвижимости",
    desc: "Мы свяжемся с вами в ближайшее время",
    pipelineId: 6267758,
    price: 2500,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.INSURANCE]: {
    ...serviceModal,
    header: "Ипотечное страхование",
    desc: "Мы свяжемся с вами в ближайшее время",
    pipelineId: 6267766,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.TYPE_DEAL]: {
    header: "Типовые договора",
    desc: (
      <span>
        Файл с&nbsp;документами пришлём на&nbsp;почту. При отправке
        вы&nbsp;принимаете условия{" "}
        <ConditionsLink href="/documents/privacy_policy.pdf">
          Политики конфиденциальности
        </ConditionsLink>
      </span>
    ),
    buttonText: "Отправить",
    modalType: "withInput",
    nextStateBtnAction: docsSent,
    placeHolder: "email",
    errorMessage: "Введите корректный Email",
    submitFailedMessage: "Укажите Email",
    validationPattern: emailValidationRegexp,
    isPayable: true,
    paymentObj: {
      isLast: true,
      type: "freeDocs",
    },
    errorAction: errorWithDocs,
  },
  [ModalState.LAW]: {
    ...serviceModal,
    header: "Правовое заключение",
    desc: "Мы свяжемся с вами в ближайшее время",
    pipelineId: 6267686,
    price: 79890,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.DEAL_FOLLOWING]: {
    ...serviceModal,
    header: "Сопровождение сделки",
    pipelineId: 6267686,
    price: 79890,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.MAKE_DECLARATION]: {
    ...serviceModal,
    header: "Составление деклараций 3-НДФЛ",
    desc: "Мы свяжемся с вами в ближайшее время",
    pipelineId: 6267770,
    price: 1900,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.MAKE_DEAL_INFO]: {
    header: "Составление договоров",
    modalType: "withInfo",
    desc:
      "Включает в себя:\n" +
      "Подготовка договора с учётом особенностей сделки и интересов клиента — продавца или покупателя.\n" +
      "Консультирование по подготовленному договору,\n" +
      "корректировка договора после ознакомления сторонами сделки.\n" +
      "Итоговая корректировка договора при проведении сделки.\n" +
      "\n" +
      "Договор купли-продажи включает:\n" +
      "Передаточный акт с учётом интересов клиента.\n" +
      "Шаблон расписки о получении денежных средств\n" +
      "\n" +
      "Стоимость услуги может быть увеличена, при множественности объектов, для коммерческих объектов, при нестандартном/не типовом виде договора и тд.",
    buttonText: "Заказать от 1 500 ₽",
    nextStateBtnAction: makeDeal,
  },
  [ModalState.MAKE_DEAL]: {
    ...serviceModal,
    header: "Составление договоров",
    desc: "Мы свяжемся с вами в ближайшее время",
    pipelineId: 6267762,
    price: 1500,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.TAX_CONSULT]: {
    ...serviceModal,
    header: "Консультация по налогообложению",
    desc: "Мы свяжемся с вами в ближайшее время",
    price: 1500,
    pipelineId: 6267770,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.FREE_CONSULTATION]: {
    ...serviceModal,
    header: "Бесплатная консультация",
    desc: "Мы\u00A0свяжемся с\u00A0вами для уточнения информации",
    pipelineId: 6250686,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.FOLLOWING_DEAL]: {
    ...serviceModal,
    header: "Сопровождение сделки",
    desc: "Мы\u00A0свяжемся с\u00A0вами для уточнения информации",
    buttonText: "Заказать за\u00A079\u00A0890\u00A0₽",
    price: 79890,
    pipelineId: 6267686,
    nextStateBtnAction: thanksForBuy,
  },
  [ModalState.SELL_OR_CHANGE]: {
    ...serviceModal,
    header: "Продажа или обмен под\u00A0ключ",
    desc: "Мы\u00A0свяжемся с\u00A0вами для уточнения информации",
    pipelineId: 6252418,
    nextStateBtnAction: thanksForOrder2,
  },
  [ModalState.AGENT_DEAL]: {
    ...serviceModal,
    header: "Агент на\u00A0договор",
    desc: "Мы\u00A0свяжемся с\u00A0вами для уточнения информации",
    buttonText: "Заказать за\u00A05\u00A0000\u00A0₽",
    price: 5000,
    pipelineId: 6267646,
    nextStateBtnAction: thanksForBuy,
  },
  [ModalState.UNDER_KEY]: {
    ...serviceModal,
    header: "Под ключ",
    desc: "Мы\u00A0свяжемся с\u00A0вами для уточнения информации",
    pipelineId: 6267634,
    nextStateBtnAction: thanksForOrder2,
  },
};

export { modalData, emailValidationRegexp };
