import { ModalState } from "./enums";

type TPhotoPosition = {
  position: number;
};

type TModalState = {
  currentState: ModalState | null;
  isOpened: boolean;
};

type FlatData = {
  id: number;
  title: string;
  desc: string;
  publishedAt: string;
  parsedAt: string;
  updatedAt: string;
  address: string;
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
  price: number;
  oldPrice: number;
  lat: number;
  lng: number;
  kmMetro: number;
  parameters: {
    propertyId: number;
    parameterId: number;
    parameter: {
      id: number;
      name: string;
      category: string;
    };
    value: string;
  }[];
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

export type { TPhotoPosition, TModalState, TFlatState };
