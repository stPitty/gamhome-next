import { ModalState } from "../../../redux/slicers/enums";

export type Modal = "withEmailInput" | "withInfo" | "lastMessage";

export type DescText = {
  id: number;
  text: string;
};

export type ModalBody = {
  header: string;
  modalType: Modal;
  desc?: DescText[] | string;
  buttonText?: string;
  nextStateBtnAction?: any;
};

export type ModalBodyData = {
  [ModalState.CHECK_LISTS_INFORMATION]: ModalBody;
  [ModalState.CHECK_LISTS_ENTER_EMAIL]: ModalBody;
  [ModalState.THANKS_FOR_BUY]: ModalBody;
  [ModalState.FREE_DOCS_BAG_INFORMATION]: ModalBody;
  [ModalState.FREE_DOCS_BAG_ENTER_EMAIL]: ModalBody;
  [ModalState.DOCS_SENT]: ModalBody;
};
