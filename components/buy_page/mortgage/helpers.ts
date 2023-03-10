import { FlatData } from "../../../redux/slicers/types";
import { IBanksData, IRegions } from "./types";
import { WindowSize } from "../../../redux/slicers/enums";

const handleGetRegionId = (
  cityObj: FlatData["city"],
  regionsList: IRegions["regions"]
) => {
  for (let i = 0; i < regionsList.length; i++) {
    const regionName = regionsList[i].regionName;
    if (regionName === cityObj.name || regionName === cityObj.region.name) {
      return regionsList[i].regionId;
    }
  }
  return "3";
};

const handleGetIsTwoLevels = (windowSize: WindowSize | null) => () => {
  return (
    windowSize === WindowSize.XL ||
    windowSize === WindowSize.LG ||
    windowSize === WindowSize.MD
  );
};

const handleGetFormattedData =
  (isTwoLevels: boolean, data: IBanksData) => () => {
    if (isTwoLevels && data?.minimalBankMortgageOffers) {
      const arr = structuredClone(data?.minimalBankMortgageOffers);
      const newArr: IBanksData["minimalBankMortgageOffers"][] = [];

      let counter = 0;

      do {
        if (!newArr[counter]) {
          newArr[counter] = [];
        }
        if (newArr[counter].length === 2) {
          counter++;
        } else {
          newArr[counter].push(arr.shift() as any);
        }
      } while (arr.length !== 0);

      return newArr;
    }

    return data.minimalBankMortgageOffers;
  };

const handleRightClick = (emblaApi: any) => () => {
  emblaApi?.scrollNext();
};

const handleLeftClick = (emblaApi: any) => () => {
  emblaApi?.scrollPrev();
};

export {
  handleGetRegionId,
  handleGetIsTwoLevels,
  handleGetFormattedData,
  handleRightClick,
  handleLeftClick,
};
