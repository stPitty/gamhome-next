import { ModalState } from "../../../redux/slicers/enums";
import {
  CheckOwnerInputFieldNames,
  ServiceInputFieldNames,
} from "../../../redux/slicers/types";
import { ReactNode } from "react";

export type Modal = "withInput" | "withInfo" | "lastMessage";

type StateName = "ownerData" | "serviceData";

export type DescText = {
  id: number;
  text: string;
};

type InputProps = {
  name: CheckOwnerInputFieldNames | ServiceInputFieldNames;
  validationPattern: RegExp;
  placeHolder: string;
  errorMessage: string;
  submitFailedMessage: string;
};

export type ModalBody = Partial<InputProps> & {
  header: string;
  modalType: Modal;
  desc?: DescText[] | string | ReactNode;
  subDesc?: string | ReactNode;
  buttonText?: string;
  nextStateBtnAction?: Function;
  clearAction?: Function;
  image?: string;
  isErrorMessage?: boolean;
  withoutInfo?: boolean;
  withMultiInputs?: boolean;
  fieldNames?: CheckOwnerInputFieldNames[] | ServiceInputFieldNames[];
  stateName?: StateName;
  setSubmitErrorAction?: Function;
  setValidationErrorAction?: Function;
  setValueAction?: Function;
  lowRowGap?: boolean;
  multiInputsProps?: (InputProps & {
    halfWidth?: boolean;
    id: number;
  })[];
  price?: number;
  pipelineId?: number;
  isCrmDeal?: boolean;
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
  [ModalState.CONCIERGE_SERVICE_RENT]: ModalBody;
  [ModalState.CONCIERGE_SERVICE_BUY]: ModalBody;
  [ModalState.KEY_SEARCH_RENT]: ModalBody;
  [ModalState.KEY_SEARCH_BUY]: ModalBody;
  [ModalState.THANKS_FOR_ORDER]: ModalBody;
  [ModalState.CONTACT_MANAGER]: ModalBody;
  [ModalState.THANKS_FOR_ORDER_2]: ModalBody;
  [ModalState.PROPERTY_EVAL]: ModalBody;
  [ModalState.INSURANCE]: ModalBody;
  [ModalState.TYPE_DEAL]: ModalBody;
  [ModalState.LAW]: ModalBody;
  [ModalState.DEAL_FOLLOWING]: ModalBody;
  [ModalState.MAKE_DECLARATION]: ModalBody;
  [ModalState.MAKE_DEAL_INFO]: ModalBody;
  [ModalState.MAKE_DEAL]: ModalBody;
  [ModalState.TAX_CONSULT]: ModalBody;
  [ModalState.FREE_CONSULTATION]: ModalBody;
  [ModalState.FOLLOWING_DEAL]: ModalBody;
  [ModalState.SELL_OR_CHANGE]: ModalBody;
  [ModalState.AGENT_DEAL]: ModalBody;
  [ModalState.UNDER_KEY]: ModalBody;
  [ModalState.ERROR_APPLYING]: ModalBody;
};

export type Deal = {
  price?: string;
  pipelineId?: number;
  propertyId?: string;
  city?: string;
};

export type Contact = {
  name?: string;
  phone?: string;
  email?: string;
};

export type CrmReqBody = {
  deal: Deal;
  contact: Contact;
};
