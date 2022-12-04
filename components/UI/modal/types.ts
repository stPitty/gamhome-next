import { ModalState } from "../../../redux/slicers/enums";
import { CheckOwnerInputFieldNames } from "../../../redux/slicers/types";

export type Modal = "withInput" | "withInfo" | "lastMessage";

type StateName = "ownerData";

export type DescText = {
  id: number;
  text: string;
};

type InputProps = {
  name: CheckOwnerInputFieldNames;
  validationPattern: RegExp;
  placeHolder: string;
  errorMessage: string;
  submitFailedMessage: string;
};

export type ModalBody = Partial<InputProps> & {
  header: string;
  modalType: Modal;
  desc?: DescText[] | string;
  buttonText?: string;
  nextStateBtnAction?: Function;
  clearAction?: Function;
  image?: string;
  isErrorMessage?: boolean;
  withoutInfo?: boolean;
  withMultiInputs?: boolean;
  fieldNames?: CheckOwnerInputFieldNames[];
  stateName?: StateName;
  setSubmitErrorAction?: Function;
  setValidationErrorAction?: Function;
  setValueAction?: Function;
  multiInputsProps?: (InputProps & {
    halfWidth?: boolean;
    id: number;
  })[];
};

export type ModalBodyData = {
  [ModalState.CHECK_LISTS_INFORMATION]: ModalBody;
  [ModalState.CHECK_LISTS_ENTER_EMAIL]: ModalBody;
  [ModalState.THANKS_FOR_BUY]: ModalBody;
  [ModalState.FREE_DOCS_BAG_INFORMATION]: ModalBody;
  [ModalState.FREE_DOCS_BAG_ENTER_EMAIL]: ModalBody;
  [ModalState.DOCS_SENT]: ModalBody;
  [ModalState.ERROR_WITH_DOCS_POST]: ModalBody;
  [ModalState.CHECK_OBJ_INPUT_NUM]: ModalBody;
  [ModalState.CHECK_OBJ_INPUT_EMAIL]: ModalBody;
  [ModalState.INFORMATION_SENT]: ModalBody;
  [ModalState.CHECK_OWNER_INPUT_EMAIL]: ModalBody;
  [ModalState.CHECK_OWNER_INPUT_INFO]: ModalBody;
  [ModalState.WANT_TO_LEND_FLAT]: ModalBody;
  [ModalState.AGENT_FOR_CONTRACT]: ModalBody;
  [ModalState.CONCIERGE_SERVICE]: ModalBody;
  [ModalState.KEY_SEARCH]: ModalBody;
  [ModalState.THANKS_FOR_ORDER]: ModalBody;
};
