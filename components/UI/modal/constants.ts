import { ModalBodyData } from "./types";
import { ModalState } from "../../../redux/slicers/enums";
import {
  docsSent,
  openBuyCheckListWithEmail,
  openFreeDocsWithEmail,
  thanksForBuy,
} from "../../../redux/slicers/modalStateSlicer";

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
    modalType: "withEmailInput",
    nextStateBtnAction: thanksForBuy,
  },
  [ModalState.THANKS_FOR_BUY]: {
    header: "Спасибо за покупку",
    desc: "Чек-листы и документы отправлены на почту",
    modalType: "lastMessage",
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
    modalType: "withEmailInput",
    nextStateBtnAction: docsSent,
  },
  [ModalState.DOCS_SENT]: {
    header: "Документы отправлены на почту",
    modalType: "lastMessage",
  },
};

const emailValidationRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { modalData, emailValidationRegexp };
