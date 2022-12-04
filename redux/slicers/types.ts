import { ModalState } from "./enums";

type TPhotoPosition = {
  position: number;
};

type TModalState = {
  currentState: ModalState | null;
  isOpened: boolean;
};

type Parameter = {
  propertyId: number;
  parameterId: number;
  parameter: {
    id: number;
    name: string;
    category: string;
  };
  value: string;
};

type FlatData = {
  feeAmount: number | string;
  deposit: number | string;
  fee: boolean;
  id: number;
  title: string;
  desc: string;
  publishedAt: string;
  parsedAt: string;
  updatedAt: string;
  address: string;
  additionalParams: string;
  images: {
    id: number;
    url: string;
    property: string;
  }[];
  source: string;
  sourceId: string;
  sourceUrl: string;
  phone: string;
  category: {
    id: number;
    name: string;
    parameters: {
      id: number;
      name: string;
      category: string;
    }[];
  };
  type: {
    id: number;
    name: string;
    users: string[];
    properties: string[];
  };
  price: number | string;
  oldPrice: number;
  lat: number;
  lng: number;
  kmMetro: number;
  parameters: Parameter[];
  city: {
    id: number;
    name: string;
    region: {
      id: number;
      name: string;
    };
  };
  metro: {
    id: string;
    name: string;
    lat: number;
    lng: number;
    metroLine: {
      id: number;
      name: string;
      color: string;
    };
  };
  district: {
    id: number;
    name: string;
  };
};

type TFlatState = {
  flatData: FlatData | null;
  isLoading: boolean;
  isError: boolean;
};

type CheckOwnerInputFieldNames =
  | "nameValue"
  | "bornDate"
  | "passSer"
  | "passNum"
  | "dateGet"
  | "divCode";

type ServiceInputFieldNames = "name" | "phone" | "city";

type InputData = {
  value: string;
  isSubmitFailed: boolean;
  isValidationError: boolean;
};

type TOwnerData = Record<CheckOwnerInputFieldNames, InputData>;

type TServiceData = Record<ServiceInputFieldNames, InputData>;

type FormActionType = {
  type: string;
  payload: {
    name: CheckOwnerInputFieldNames | ServiceInputFieldNames;
    value: string | boolean;
  };
};

export type {
  TPhotoPosition,
  TModalState,
  TFlatState,
  FlatData,
  Parameter,
  TOwnerData,
  CheckOwnerInputFieldNames,
  FormActionType,
  TServiceData,
  ServiceInputFieldNames,
};
