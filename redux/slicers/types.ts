import { ModalState, WindowSize } from "./enums";
import { Route } from "../../common/routes";
import { AddParameters } from "../../common/form_utils/types";

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
  nonFormattedPrice: number;
  squarePrice: string;
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

type TWindowSize = {
  windowSize: WindowSize | null;
};

type TSideMenu = {
  isOpened: boolean;
  willBeClosed: boolean;
};

type TMobBtnView = {
  isShown: boolean;
};

type TCookiePopUp = {
  isCookieAccepted: boolean;
};

type TScrollTopBtn = {
  isLightTheme: boolean;
};

type TPathName = {
  pathName: Route | null;
};

type FieldName =
  | "category"
  | "type"
  | "minPrice"
  | "maxPrice"
  | "city"
  | "author"
  | "minKmMetro"
  | "maxKmMetro"
  | "metros"
  | "districts"
  | "params"
  | "fee"
  | "typeOfPart"
  | "maxYear"
  | "minYear"
  | "polygon";

type Params = {
  id: number | null;
  name: string;
};

type FieldAction = {
  payload: {
    name: FieldName;
    value: string | number | boolean | undefined | Params | any[] | null;
    addType?: AddParameters;
  };
  type: string;
};

type Metros = Params & {
  lat: number;
  lng: number;
};

type MetroLines = Params & {
  color: string;
  metros: Metros[];
};

type Cities = Params & {
  metroLines: MetroLines[];
  districts: Params[];
};

type City = Params & {
  cities: Cities[];
};

type ParametersObj = Partial<Record<AddParameters, string | null>>;

type Data = {
  typeOfPart: string;
  polygon: any;
  category: 2 | 3 | 4 | null;
  type: 1 | 2 | null;
  minPrice: string;
  maxPrice: string;
  city: Params;
  metros: Params[];
  districts: Params[];
  author: 2 | 3 | null;
  params: ParametersObj;
  minKmMetro: string;
  maxKmMetro: string;
  fee: boolean;
  minYear: string;
  maxYear: string;
};

type TFormData = {
  citiesData: City[] | null;
  data: Data;
  isLoading: boolean;
  isError: boolean;
};

type Select =
  | "isMapDisabled"
  | "isCitiesDisabled"
  | "isDistrictsDisabled"
  | "isMetrosDisabled";

type TDisableSelect = Record<Select, boolean>;

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
  TWindowSize,
  TSideMenu,
  TMobBtnView,
  TCookiePopUp,
  TScrollTopBtn,
  TPathName,
  TFormData,
  FieldAction,
  City,
  FieldName,
  Cities,
  MetroLines,
  Metros,
  TDisableSelect,
  Select,
};
