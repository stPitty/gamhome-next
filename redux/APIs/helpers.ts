import { FormattedParametersData, ParametersData } from "./types";

const getFormattedParams = (
  params: ParametersData
): FormattedParametersData => {
  return params.reduce((previousValue: any[], currentValue) => {
    if (
      // currentValue.id === 1 ||
      currentValue.id === 8 ||
      currentValue.id === 14 ||
      currentValue.id === 18 ||
      // currentValue.id === 5 ||
      // currentValue.id === 13 ||
      currentValue.id === 19 ||
      currentValue.id === 21 ||
      currentValue.id === 23
    ) {
      currentValue.type = "tag";
      previousValue.push(currentValue);
      return previousValue;
    }
    currentValue.type = "input";

    if (
      currentValue.id === 2 ||
      currentValue.id === 11 ||
      currentValue.id === 16
    )
      currentValue.paramType = "FloorsInHouse";
    if (currentValue.id === 3) currentValue.paramType = "KitchenSquare";
    if (currentValue.id === 4) currentValue.paramType = "Square";
    if (currentValue.id === 6 || currentValue.id === 10)
      currentValue.paramType = "Floor";
    if (currentValue.id === 7) currentValue.paramType = "LivingSquare";
    if (currentValue.id === 9) currentValue.paramType = "DeliveryTime";
    if (currentValue.id === 12) currentValue.paramType = "RoomSquare";
    if (currentValue.id === 15) currentValue.paramType = "HouseSquare";
    if (currentValue.id === 17) currentValue.paramType = "LandSquare";
    if (
      currentValue.id === 20 ||
      currentValue.id === 1 ||
      currentValue.id === 5 ||
      currentValue.id === 13 ||
      currentValue.id === 22
    )
      return previousValue;
    previousValue.push(currentValue);
    return previousValue;
  }, []);
};

export { getFormattedParams };
