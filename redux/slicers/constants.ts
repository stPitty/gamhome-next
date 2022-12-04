import { CheckOwnerInputFieldNames, ServiceInputFieldNames } from "./types";

const ownerInputFieldsNames: CheckOwnerInputFieldNames[] = [
  "nameValue",
  "bornDate",
  "passSer",
  "passNum",
  "dateGet",
  "divCode",
];

const serviceInputFieldsNames: ServiceInputFieldNames[] = [
  "name",
  "phone",
  "city",
];

export { ownerInputFieldsNames, serviceInputFieldsNames };
