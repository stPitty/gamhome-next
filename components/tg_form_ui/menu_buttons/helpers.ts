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
  {
    category,
    params,
    repair,
    vars,
    roomsInFlatQuantity,
    roomsQuantity,
  }: TFormData["data"],
  notFirstFloor: boolean
) => {
  const newArr: Parameter[] = [];

  switch (category) {
    case 2:
      if (repair) {
        newArr.push({
          parameterId: 1,
          value: repair,
          minValue: "",
        });
      }

      if (params.minFloorsInHouse || params.maxFloorsInHouse) {
        newArr.push({
          parameterId: 2,
          value: params.maxFloorsInHouse ?? "50",
          minValue: params.minFloorsInHouse ?? "0",
        });
      }

      if (params.minKitchenSquare || params.maxKitchenSquare) {
        newArr.push({
          parameterId: 3,
          value: params.maxKitchenSquare
            ? String(reduceSpaces(params.maxKitchenSquare))
            : "9999",
          minValue: params.minKitchenSquare
            ? String(reduceSpaces(params.minKitchenSquare))
            : "0",
        });
      }

      if (params.minSquare || params.maxSquare) {
        newArr.push({
          parameterId: 4,
          value: params.maxSquare
            ? String(reduceSpaces(params.maxSquare))
            : "9999",
          minValue: params.minSquare
            ? String(reduceSpaces(params.minSquare))
            : "0",
        });
      }

      if (roomsQuantity) {
        newArr.push({
          parameterId: 5,
          value: roomsQuantity === "5+" ? "9999" : roomsQuantity,
          minValue: roomsQuantity === "5+" ? "0" : "",
        });
      }

      if (params.minFloor || params.maxFloor || notFirstFloor) {
        newArr.push({
          parameterId: 6,
          value: params.maxFloor
            ? String(reduceSpaces(params.maxFloor))
            : "100",
          minValue: params.minFloor
            ? notFirstFloor &&
              (params.minFloor === "1" || params.minFloor === "0")
              ? "2"
              : String(reduceSpaces(params.minFloor))
            : notFirstFloor
            ? "2"
            : "1",
        });
      }

      if (params.minLivingSquare || params.maxLivingSquare) {
        newArr.push({
          parameterId: 7,
          value: params.maxLivingSquare
            ? String(reduceSpaces(params.maxLivingSquare))
            : "9999",
          minValue: params.minLivingSquare
            ? String(reduceSpaces(params.minLivingSquare))
            : "0",
        });
      }

      if (params?.houseType) {
        newArr.push({
          parameterId: 8,
          value: params.houseType,
          minValue: "",
        });
      }

      if (params.minDeliveryTime || params.maxDeliveryTime) {
        newArr.push({
          parameterId: 9,
          value: params.maxDeliveryTime
            ? String(reduceSpaces(params.maxDeliveryTime))
            : "2050",
          minValue: params.minDeliveryTime
            ? String(reduceSpaces(params.minDeliveryTime))
            : "0",
        });
      }

      if (params?.partType) {
        newArr.push({
          parameterId: 19,
          value: params.partType,
          minValue: "",
        });
      }

      if (params?.dealType) {
        newArr.push({
          parameterId: 21,
          value: params.dealType,
          minValue: "",
        });
      }

      if (vars && vars !== "Все варианты") {
        newArr.push({
          parameterId: 22,
          value: vars,
          minValue: "",
        });
      }

      break;

    case 3:
      if (params.minFloor || params.maxFloor || notFirstFloor) {
        newArr.push({
          parameterId: 10,
          value: params.maxFloor
            ? String(reduceSpaces(params.maxFloor))
            : "100",
          minValue: params.minFloor
            ? notFirstFloor &&
              (params.minFloor === "1" || params.minFloor === "0")
              ? "2"
              : String(reduceSpaces(params.minFloor))
            : notFirstFloor
            ? "2"
            : "1",
        });
      }

      if (params.minFloorsInHouse || params.maxFloorsInHouse) {
        newArr.push({
          parameterId: 11,
          value: params.maxFloorsInHouse
            ? String(reduceSpaces(params.maxFloorsInHouse))
            : "100",
          minValue: params.minFloorsInHouse
            ? String(reduceSpaces(params.minFloorsInHouse))
            : "0",
        });
      }

      if (params.minRoomSquare || params.maxRoomSquare) {
        newArr.push({
          parameterId: 12,
          value: params.maxRoomSquare
            ? String(reduceSpaces(params.maxRoomSquare))
            : "9999",
          minValue: params.minRoomSquare
            ? String(reduceSpaces(params.minRoomSquare))
            : "0",
        });
      }

      if (roomsInFlatQuantity) {
        newArr.push({
          parameterId: 13,
          value: roomsInFlatQuantity === "5+" ? "9999" : roomsInFlatQuantity,
          minValue: roomsInFlatQuantity === "5+" ? "0" : "",
        });
      }

      if (params?.houseType) {
        newArr.push({
          parameterId: 14,
          value: params.houseType,
          minValue: "",
        });
      }
      break;

    case 4:
      if (params.minHouseSquare || params.maxHouseSquare) {
        newArr.push({
          parameterId: 15,
          value: params.maxHouseSquare
            ? String(reduceSpaces(params.maxHouseSquare))
            : "9999",
          minValue: params.minHouseSquare
            ? String(reduceSpaces(params.minHouseSquare))
            : "0",
        });
      }

      if (params.minFloorsInHouse || params.maxFloorsInHouse) {
        newArr.push({
          parameterId: 16,
          value: params.maxFloorsInHouse
            ? String(reduceSpaces(params.maxFloorsInHouse))
            : "100",
          minValue: params.minFloorsInHouse
            ? String(reduceSpaces(params.minFloorsInHouse))
            : "0",
        });
      }

      if (params.minLandSquare || params.maxLandSquare) {
        newArr.push({
          parameterId: 17,
          value: params.maxLandSquare
            ? String(reduceSpaces(params.maxLandSquare))
            : "100",
          minValue: params.minLandSquare
            ? String(reduceSpaces(params.minLandSquare))
            : "0",
        });
      }

      if (params?.wallMaterial) {
        newArr.push({
          parameterId: 18,
          value: params.wallMaterial,
          minValue: "",
        });
      }

      if (params?.objType) {
        newArr.push({
          parameterId: 23,
          value: params.objType,
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

  if (data?.lastFloor === "Не последний") {
    formattedData.lastFloor = false;
  }

  const params = formatParams(data, data.lastFloor === "Не первый");

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
