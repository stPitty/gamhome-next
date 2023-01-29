import {
  Author,
  CategoryType,
  FloorsInHouse,
  HouseMaterialType,
  Repair,
  RoomsInFlatQuantity,
  RoomsQuantity,
  Type,
  TypeOfPArt,
  WallMaterial,
} from "./enums";
import { AddParameters } from "./types";
import { Param } from "../../redux/APIs/types";

const houseTypeValues = [
  {
    value: HouseMaterialType.PANEL,
    children: HouseMaterialType.PANEL,
  },
  {
    value: HouseMaterialType.BRICK,
    children: HouseMaterialType.BRICK,
  },
  {
    value: HouseMaterialType.MONOLITHIC,
    children: HouseMaterialType.MONOLITHIC,
  },
  {
    value: HouseMaterialType.WOODEN,
    children: HouseMaterialType.WOODEN,
  },
  {
    value: HouseMaterialType.BLOCK,
    children: HouseMaterialType.BLOCK,
  },
];

const categoryValues = [
  {
    value: 3,
    children: CategoryType.ROOM,
  },
  {
    value: 2,
    children: CategoryType.FLAT,
  },
  {
    value: 4,
    children: CategoryType.HOUSE,
  },
];

const typeValues = [
  {
    value: 2,
    children: Type.RENT,
  },
  {
    value: 1,
    children: Type.BUY,
  },
];

const typeOfPartValues = [
  {
    value: TypeOfPArt.FREE,
    children: TypeOfPArt.FREE,
  },
  {
    value: TypeOfPArt.ALTER,
    children: TypeOfPArt.ALTER,
  },
  {
    value: TypeOfPArt.DEAL,
    children: TypeOfPArt.DEAL,
  },
  {
    value: TypeOfPArt.OVER,
    children: TypeOfPArt.OVER,
  },
];

const feeValues = [
  {
    value: true,
    children: "Без комиссии",
  },
];

const authorValues = [
  {
    value: 2,
    children: Author.AGENT,
  },
  {
    value: 3,
    children: Author.OWNER,
  },
];

const varsValues = [
  {
    value: "Новостройки",
    children: "Новостройка",
  },
  {
    value: "Вторичка",
    children: "Вторичка",
  },
  {
    value: "Все варианты",
    children: "Все варианты",
  },
];
const repairValues = [
  {
    value: Repair.NEEDING,
    children: Repair.NEEDING,
  },
  {
    value: Repair.COSMETIC,
    children: Repair.COSMETIC,
  },
  {
    value: Repair.DESIGN,
    children: Repair.DESIGN,
  },
  {
    value: Repair.EURO,
    children: Repair.EURO,
  },
];

const wallMaterialValues = [
  {
    value: WallMaterial.BRICK,
    children: WallMaterial.BRICK,
  },
  {
    value: WallMaterial.LOG,
    children: WallMaterial.LOG,
  },
  {
    value: WallMaterial.GAS_BLOCK,
    children: WallMaterial.GAS_BLOCK,
  },
  {
    value: WallMaterial.BAR,
    children: WallMaterial.BAR,
  },
  {
    value: WallMaterial.FOAM_BLOCK,
    children: WallMaterial.FOAM_BLOCK,
  },
  {
    value: WallMaterial.PANEL,
    children: WallMaterial.PANEL,
  },
  {
    value: WallMaterial.SANDWICH,
    children: WallMaterial.SANDWICH,
  },
  {
    value: WallMaterial.EXPERIMENTAL,
    children: WallMaterial.EXPERIMENTAL,
  },
  {
    value: WallMaterial.METAL,
    children: WallMaterial.METAL,
  },
];

const roomsQuantityValues = [
  {
    value: RoomsQuantity.STUDIO,
    children: "Студия",
  },
  {
    value: RoomsQuantity.ONE,
    children: RoomsQuantity.ONE,
  },
  {
    value: RoomsQuantity.TWO,
    children: RoomsQuantity.TWO,
  },
  {
    value: RoomsQuantity.THREE,
    children: RoomsQuantity.THREE,
  },
  {
    value: RoomsQuantity.FOURTH,
    children: RoomsQuantity.FOURTH,
  },
  {
    value: RoomsQuantity.FIVE_PLUS,
    children: RoomsQuantity.FIVE_PLUS,
  },
];

const roomsInFlatQuantityValues = [
  {
    value: RoomsInFlatQuantity.ONE,
    children: RoomsInFlatQuantity.ONE,
  },
  {
    value: RoomsInFlatQuantity.TWO,
    children: RoomsInFlatQuantity.TWO,
  },
  {
    value: RoomsInFlatQuantity.THREE,
    children: RoomsInFlatQuantity.THREE,
  },
  {
    value: RoomsInFlatQuantity.FOURTH,
    children: RoomsInFlatQuantity.FOURTH,
  },
  {
    value: RoomsInFlatQuantity.FIVE_PLUS,
    children: RoomsInFlatQuantity.FIVE_PLUS,
  },
];

const floorsInHouseValues = [
  {
    value: FloorsInHouse.NOT_FIRST,
    children: FloorsInHouse.NOT_FIRST,
  },
  {
    value: FloorsInHouse.NOT_LAST,
    children: FloorsInHouse.NOT_LAST,
  },
  {
    value: FloorsInHouse.LAST,
    children: FloorsInHouse.LAST,
  },
];

const dealTypeValues = [
  {
    value: true,
    children: "Возможна ипотека",
  },
];

const objTypeValues = [
  {
    value: "Вторичка",
    children: "Вторичка",
  },
  {
    value: "Новостройка",
    children: "Новостройка",
  },
];

const objTypeHomeValues = [
  {
    value: "Дом",
    children: "Дом",
  },
  {
    value: "Таунхаус",
    children: "Таунхаус",
  },
  {
    value: "Дача",
    children: "Дача",
  },
  {
    value: "Коттедж",
    children: "Коттедж",
  },
];

const parametersKeys: {
  id: number;
  name: AddParameters | Param;
  categoryId: number;
}[] = [
  {
    id: 1,
    name: "repair",
    categoryId: 2,
  },
  {
    id: 2,
    name: "FloorsInHouse",
    categoryId: 2,
  },
  {
    id: 3,
    name: "KitchenSquare",
    categoryId: 2,
  },
  {
    id: 4,
    name: "Square",
    categoryId: 2,
  },
  {
    id: 5,
    name: "roomsQuantity",
    categoryId: 2,
  },
  {
    id: 6,
    name: "Floor",
    categoryId: 2,
  },
  {
    id: 7,
    name: "LivingSquare",
    categoryId: 2,
  },
  {
    id: 8,
    name: "houseType",
    categoryId: 2,
  },
  {
    id: 9,
    name: "DeliveryTime",
    categoryId: 2,
  },
  {
    id: 10,
    name: "Floor",
    categoryId: 3,
  },
  {
    id: 11,
    name: "FloorsInHouse",
    categoryId: 3,
  },
  {
    id: 12,
    name: "RoomSquare",
    categoryId: 3,
  },
  {
    id: 13,
    name: "roomsInFlatQuantity",
    categoryId: 3,
  },
  {
    id: 14,
    name: "houseType",
    categoryId: 3,
  },
  {
    id: 15,
    name: "HouseSquare",
    categoryId: 4,
  },
  {
    id: 16,
    name: "FloorsInHouse",
    categoryId: 4,
  },
  {
    id: 17,
    name: "LandSquare",
    categoryId: 4,
  },
  {
    id: 18,
    name: "wallMaterial",
    categoryId: 4,
  },
  {
    id: 19,
    name: "partType",
    categoryId: 2,
  },
  {
    id: 21,
    name: "dealType",
    categoryId: 2,
  },
  {
    id: 22,
    name: "objType",
    categoryId: 2,
  },
  {
    id: 23,
    name: "objType",
    categoryId: 4,
  },
];

export {
  houseTypeValues,
  categoryValues,
  typeValues,
  authorValues,
  typeOfPartValues,
  repairValues,
  wallMaterialValues,
  parametersKeys,
  roomsQuantityValues,
  roomsInFlatQuantityValues,
  floorsInHouseValues,
  feeValues,
  dealTypeValues,
  objTypeValues,
  objTypeHomeValues,
  varsValues,
};
