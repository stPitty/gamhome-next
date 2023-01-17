import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { TFormData } from "../../../redux/slicers/types";
import { Parameter, PostData } from "./types";

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
  return Number.parseInt(data.replaceAll(" ", ""));
};

const formatParams = (
  data: TFormData["data"]["params"],
  categoryId: number | null,
  notFirstFloor: boolean
) => {
  const newArr: Parameter[] = [];

  switch (categoryId) {
    case 2:
      if (data?.repair) {
        newArr.push({
          parameterId: 1,
          value: data.repair,
          minValue: "",
        });
      }

      if (data.minFloorsInHouse || data.maxFloorsInHouse) {
        newArr.push({
          parameterId: 2,
          value: data.maxFloorsInHouse ?? "50",
          minValue: data.minFloorsInHouse ?? "0",
        });
      }

      if (data.minKitchenSquare || data.maxKitchenSquare) {
        newArr.push({
          parameterId: 3,
          value: data.maxKitchenSquare
            ? String(reduceSpaces(data.maxKitchenSquare))
            : "9999",
          minValue: data.minKitchenSquare
            ? String(reduceSpaces(data.minKitchenSquare))
            : "0",
        });
      }

      if (data.minSquare || data.maxSquare) {
        newArr.push({
          parameterId: 4,
          value: data.maxSquare ? String(reduceSpaces(data.maxSquare)) : "9999",
          minValue: data.minSquare ? String(reduceSpaces(data.minSquare)) : "0",
        });
      }

      if (data?.roomsQuantity) {
        newArr.push({
          parameterId: 5,
          value: data.roomsQuantity,
          minValue: "",
        });
      }

      if (data.minFloor || data.maxFloor || notFirstFloor) {
        newArr.push({
          parameterId: 6,
          value: data.maxFloor ? String(reduceSpaces(data.maxFloor)) : "100",
          minValue: data.minFloor
            ? notFirstFloor && (data.minFloor === "1" || data.minFloor === "0")
              ? "2"
              : String(reduceSpaces(data.minFloor))
            : notFirstFloor
            ? "2"
            : "1",
        });
      }

      if (data.minLivingSquare || data.maxLivingSquare) {
        newArr.push({
          parameterId: 7,
          value: data.maxLivingSquare
            ? String(reduceSpaces(data.maxLivingSquare))
            : "9999",
          minValue: data.minLivingSquare
            ? String(reduceSpaces(data.minLivingSquare))
            : "0",
        });
      }

      if (data?.houseType) {
        newArr.push({
          parameterId: 8,
          value: data.houseType,
          minValue: "",
        });
      }

      if (data.minDeliveryTime || data.maxDeliveryTime) {
        newArr.push({
          parameterId: 9,
          value: data.maxDeliveryTime
            ? String(reduceSpaces(data.maxDeliveryTime))
            : "2050",
          minValue: data.minDeliveryTime
            ? String(reduceSpaces(data.minDeliveryTime))
            : "0",
        });
      }

      if (data?.partType) {
        newArr.push({
          parameterId: 19,
          value: data.partType,
          minValue: "",
        });
      }

      if (data?.dealType) {
        newArr.push({
          parameterId: 21,
          value: data.dealType,
          minValue: "",
        });
      }

      if (data?.objType) {
        newArr.push({
          parameterId: 22,
          value: data.objType,
          minValue: "",
        });
      }

      break;

    case 3:
      if (data.minFloor || data.maxFloor || notFirstFloor) {
        newArr.push({
          parameterId: 10,
          value: data.maxFloor ? String(reduceSpaces(data.maxFloor)) : "100",
          minValue: data.minFloor
            ? notFirstFloor && (data.minFloor === "1" || data.minFloor === "0")
              ? "2"
              : String(reduceSpaces(data.minFloor))
            : notFirstFloor
            ? "2"
            : "1",
        });
      }

      if (data.minFloorsInHouse || data.maxFloorsInHouse) {
        newArr.push({
          parameterId: 11,
          value: data.maxFloorsInHouse
            ? String(reduceSpaces(data.maxFloorsInHouse))
            : "100",
          minValue: data.minFloorsInHouse
            ? String(reduceSpaces(data.minFloorsInHouse))
            : "0",
        });
      }

      if (data.minRoomSquare || data.maxRoomSquare) {
        newArr.push({
          parameterId: 12,
          value: data.maxRoomSquare
            ? String(reduceSpaces(data.maxRoomSquare))
            : "9999",
          minValue: data.minRoomSquare
            ? String(reduceSpaces(data.minRoomSquare))
            : "0",
        });
      }

      if (data?.roomsInFlatQuantity) {
        newArr.push({
          parameterId: 13,
          value: data.roomsInFlatQuantity,
          minValue: "",
        });
      }

      if (data?.houseType) {
        newArr.push({
          parameterId: 14,
          value: data.houseType,
          minValue: "",
        });
      }
      break;

    case 4:
      if (data.minHouseSquare || data.maxHouseSquare) {
        newArr.push({
          parameterId: 15,
          value: data.maxHouseSquare
            ? String(reduceSpaces(data.maxHouseSquare))
            : "9999",
          minValue: data.minHouseSquare
            ? String(reduceSpaces(data.minHouseSquare))
            : "0",
        });
      }

      if (data.minFloorsInHouse || data.maxFloorsInHouse) {
        newArr.push({
          parameterId: 16,
          value: data.maxFloorsInHouse
            ? String(reduceSpaces(data.maxFloorsInHouse))
            : "100",
          minValue: data.minFloorsInHouse
            ? String(reduceSpaces(data.minFloorsInHouse))
            : "0",
        });
      }

      if (data.minLandSquare || data.maxLandSquare) {
        newArr.push({
          parameterId: 17,
          value: data.maxLandSquare
            ? String(reduceSpaces(data.maxLandSquare))
            : "100",
          minValue: data.minLandSquare
            ? String(reduceSpaces(data.minLandSquare))
            : "0",
        });
      }

      if (data?.wallMaterial) {
        newArr.push({
          parameterId: 18,
          value: data.wallMaterial,
          minValue: "",
        });
      }

      if (data?.objType) {
        newArr.push({
          parameterId: 23,
          value: data.objType,
          minValue: "",
        });
      }
  }

  return newArr;
};

type WindowTg = Window & typeof globalThis & { Telegram: any };

const handlePushClick = (data: TFormData["data"]) => {
  const formattedData: PostData = {};

  if (data?.category) {
    formattedData.category = {
      id: data.category,
    };
  }

  if (data?.type) {
    formattedData.type = {
      id: data.type,
    };
  }

  if (data?.minPrice.length !== 0 || data?.maxPrice?.length !== 0) {
    formattedData.minPrice =
      data?.minPrice.length !== 0 ? reduceSpaces(data.minPrice) : 0;
    formattedData.maxPrice =
      data?.maxPrice?.length !== 0 ? reduceSpaces(data.maxPrice) : 999_999_999;
  }

  if (data?.city?.id) {
    formattedData.city = {
      id: data.city.id,
    };
  }

  if (data?.metros.length !== 0) {
    formattedData.metros = formatComplexData(data.metros);
  }

  if (data?.districts.length !== 0) {
    formattedData.districts = formatComplexData(data.districts);
  }

  if (data?.maxKmMetro?.length !== 0 || data?.minKmMetro.length !== 0) {
    formattedData.minKmMetro =
      data?.minKmMetro?.length !== 0
        ? Math.round((reduceSpaces(data.minKmMetro) as number) / 10)
        : 0;
    formattedData.maxKmMetro =
      data?.maxKmMetro.length !== 0
        ? Math.round((reduceSpaces(data.maxKmMetro) as number) / 10)
        : 100;
  }

  if (data?.fee) {
    formattedData.fee = data.fee;
  }

  if (data?.polygon) {
    formattedData.polygons = data.polygon;
  }

  if (data?.maxYear?.length !== 0 || data?.minYear.length !== 0) {
    formattedData.minYear =
      data?.minYear.length !== 0 ? reduceSpaces(data.minYear) : 0;
    formattedData.maxYear =
      data?.maxYear.length !== 0 ? reduceSpaces(data.maxYear) : 2050;
  }

  if (data?.lastFloor === "Только последний") {
    formattedData.lastFloor = true;
  }

  const params = formatParams(
    data.params,
    data.category,
    data.lastFloor === "Не первый"
  );

  if (params.length !== 0) {
    formattedData.parameters = params;
  }

  console.log(formattedData);

  localStorage.setItem("formData", JSON.stringify(data));

  if (typeof (window as WindowTg)?.Telegram !== "undefined") {
    try {
      (window as WindowTg)?.Telegram.WebApp.sendData(
        JSON.stringify(formattedData)
      );
    } catch (error) {
      console.error(error);
    }
  }
};

export { handlePushClick };
