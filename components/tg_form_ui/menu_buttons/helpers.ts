import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { TFormData } from "../../../redux/slicers/types";
import { Parameter, PostData } from "./types";
import { parametersKeys } from "../../../common/form_utils/constants";
import { AddParameters } from "../../../common/form_utils/types";

const formatComplexData = (arr: Params[]) => {
  return arr.reduce(
    (
      previousValue: {
        id: number;
      }[],
      currentValue
    ) => {
      previousValue.push({
        id: Number(currentValue.id),
      });
      return previousValue;
    },
    []
  );
};

const reduceSpaces = (data: string) => {
  if (data !== "") {
    return Number.parseInt(data.replaceAll(" ", ""));
  }
  return null;
};

const formatParameters = (
  params: TFormData["data"]["params"],
  category: number | null
): Parameter[] => {
  const paramsArr: Parameter[] = [];
  let isHouseTypeExist = false;
  for (let i = 0; i < parametersKeys.length; i++) {
    if (
      parametersKeys[i].name === "repair" ||
      parametersKeys[i].name === "houseType" ||
      parametersKeys[i].name === "wallMaterial" ||
      parametersKeys[i].name === "roomsQuantity" ||
      parametersKeys[i].name === "roomsInFlatQuantity" ||
      parametersKeys[i].name === "floorParam"
    ) {
      let tagParam: Parameter;
      switch (parametersKeys[i].name) {
        case "houseType":
          tagParam = {
            parameterId: category === 2 ? 8 : 14,
            value: params[parametersKeys[i].name as AddParameters] as any,
            minValue: "",
          };
          !isHouseTypeExist && paramsArr.push(tagParam);
          isHouseTypeExist = true;
          break;
        default:
          tagParam = {
            parameterId: parametersKeys[i].id,
            value: params[parametersKeys[i].name as AddParameters] as any,
            minValue: "",
          };
          paramsArr.push(tagParam);
      }
      continue;
    }

    const value =
      params[`max${parametersKeys[i].name}` as AddParameters] === ""
        ? "9999"
        : params[`max${parametersKeys[i].name}` as AddParameters];
    const minValue =
      params[`min${parametersKeys[i].name}` as AddParameters] === ""
        ? "0"
        : params[`min${parametersKeys[i].name}` as AddParameters];
    if ((!!value || !!minValue) && category === parametersKeys[i].categoryId) {
      const inputParam: Parameter = {
        parameterId: parametersKeys[i].id,
        value: reduceSpaces(value as string) as any,
        minValue: reduceSpaces(minValue as string) as any,
      };
      paramsArr.push(inputParam);
    }
  }

  return paramsArr;
};

type WindowTg = Window & typeof globalThis & { Telegram: any };

const handlePushClick = (data: TFormData["data"]) => {
  const newData: PostData = {
    category: {
      id: data.category,
    },
    type: {
      id: data.type,
    },
    minPrice: reduceSpaces(data.minPrice) ?? 0,
    maxPrice: reduceSpaces(data.maxPrice) ?? 999_999_999,
    city: {
      id: data.city.id,
    },
    metros: formatComplexData(data.metros),
    districts: formatComplexData(data.districts),
    author: {
      id: data.author,
    },
    minKmMetro: reduceSpaces(data.minKmMetro)
      ? Math.round((reduceSpaces(data.minKmMetro) as number) / 10)
      : 0,
    maxKmMetro: reduceSpaces(data.maxKmMetro)
      ? Math.round((reduceSpaces(data.maxKmMetro) as number) / 10)
      : 100,
    fee: data.fee,
    parameters: formatParameters(data.params, data.category),
    polygons: data.polygon ?? "",
    typeOfPart: data.typeOfPart,
    minYear: reduceSpaces(data.minYear) ?? 0,
    maxYear: reduceSpaces(data.maxYear) ?? 3000,
  };
  localStorage.setItem("formData", JSON.stringify(data));
  console.log(newData);
  if (typeof (window as WindowTg)?.Telegram !== "undefined") {
    try {
      (window as WindowTg)?.Telegram.WebApp.sendData(JSON.stringify(newData));
    } catch (error) {
      console.error(error);
    }
  }
};

export { handlePushClick };
