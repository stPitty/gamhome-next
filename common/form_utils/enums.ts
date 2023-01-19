export enum HouseMaterialType {
  PANEL = "Панельный",
  BRICK = "Кирпичный",
  MONOLITHIC = "Монолитный",
  WOODEN = "Деревянный",
  BLOCK = "Блочный",
}

export enum CategoryType {
  ROOM = "Комната",
  FLAT = "Квартира",
  HOUSE = "Дом",
}

export enum Type {
  RENT = "Снять",
  BUY = "Купить",
}

export enum Author {
  AGENT = "Агент",
  OWNER = "Собственник",
}

export enum TypeOfPArt {
  FREE = "Свободная",
  ALTER = "Альтернативная",
  DEAL = "Договор долевого участия",
  OVER = "Переуступка",
}

export enum Repair {
  NEEDING = "Требуется",
  COSMETIC = "Косметический",
  DESIGN = "Дизайнерский",
  EURO = "Евро",
}

export enum RoomsQuantity {
  STUDIO = "Студия",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOURTH = "4",
  FIVE_PLUS = "5+",
}

export enum RoomsInFlatQuantity {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOURTH = "4",
  FIVE_PLUS = "5+",
}

export enum WallMaterial {
  BRICK = "Кирпич",
  LOG = "Бревно",
  GAS_BLOCK = "Газоблоки",
  BAR = "Брус",
  FOAM_BLOCK = "Пеноблоки",
  PANEL = "Ж/б панели",
  SANDWICH = "Сэндвич-панели",
  EXPERIMENTAL = "Экспериментальные материалы",
  METAL = "Металл",
}

export enum FloorsInHouse {
  NOT_FIRST = "Не первый",
  NOT_LAST = "Не последний",
  LAST = "Только последний",
}

export enum ParamType {
  HOUSE_TYPE = "houseType",
  REPAIR = "repair",
  WALL_MATERIAL = "wallMaterial",
  ROOMS_IN_FLAT = "roomsInFlatQuantity",
  ROOMS_QUANTITY = "roomsQuantity",
  FLOOR_PARAM = "floorParam",
  PART_TYPE = "partType",
  DEAL_TYPE = "dealType",
  OBJ_TYPE = "objType",
}

export enum RefType {
  PARAMS = "params",
  CATEGORY = "category",
  TYPE = "type",
  FEE = "fee",
  LAST_FLOORS = "lastFloor",
  VARS = "vars",
  ROOMS_IN_FLAT = "roomsInFlatQuantity",
  ROOMS_QUANTITY = "roomsQuantity",
  REPAIR = "repair",
}
