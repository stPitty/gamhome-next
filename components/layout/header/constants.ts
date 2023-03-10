import { MenuItem } from "./types";
import { MenuEntryName } from "./enums";
import { Hook } from "../../../common/routes";

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: MenuEntryName.MAIN,
    link: Hook.HOME,
  },
  {
    id: 2,
    name: MenuEntryName.CHECK_OBJ,
    link: Hook.CHECK_OBJ,
  },
  {
    id: 3,
    name: MenuEntryName.SERVICES,
    link: Hook.SERVICES,
  },
  {
    id: 4,
    name: MenuEntryName.PARTNERS,
    link: Hook.PARTNERS,
  },
  {
    id: 5,
    name: MenuEntryName.WEBINAR,
    link: Hook.WEBINAR,
  },
];

export { menuItems };
