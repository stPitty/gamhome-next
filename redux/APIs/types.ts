type Param =
  | "FloorsInHouse"
  | "KitchenSquare"
  | "Square"
  | "Floor"
  | "LivingSquare"
  | "RoomSquare"
  | "HouseSquare"
  | "LandSquare"
  | "DeliveryTime";

type Parameter = {
  id: number;
  name: string;
  type?: "input" | "tag";
  paramType?: Param;
  index?: number;
};

type ParametersData = Parameter[];

type FormattedParametersData = Required<Parameter>[];

export type { ParametersData, FormattedParametersData, Parameter, Param };
