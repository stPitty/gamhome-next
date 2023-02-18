import { handleFormatValue } from "../../../common/helpers";

export interface IRegions {
  regions: {
    regionId: string;
    regionName: string;
    geoId: string;
  }[];
}

export interface IBank {
  bank: {
    id: string;
    icon: string;
    iconUrl: string;
    name: string;
    mnemonic: string;
    iconPng128x128: string;
    iconUrlPng128x128: string;
  };
  minimalPercent: string;
  minimalPayment: string;
  minimalOverpayment: string;
}

export interface IBanksData {
  minimalBankMortgageOffers: IBank[];
}

export interface IBankReqBody {
  query: {
    purpose: number;
    regionId: string;
    term: number;
    mainCreditSums: {
      downPayment: number;
      propertyCost: number;
    };
  };
}
