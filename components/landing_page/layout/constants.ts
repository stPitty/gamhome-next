import { MenuItem } from "../../layout/header/types";
import { Hook } from "../../../common/routes";

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Продать",
    link: Hook.SELL_PROPERTY,
  },
  {
    id: 2,
    name: "Сдать в аренду",
    link: Hook.RENT,
  },
  {
    id: 3,
    name: "Найти жилье",
    link: Hook.FIND_PROPERTY,
  },
  {
    id: 4,
    name: "О нас",
    link: Hook.ABOUT_US,
  },
  {
    id: 5,
    name: "Отзывы",
    link: Hook.REPORTS,
  },
];

export { menuItems };
