import { MenuItem } from "./types";
import { MenuEntryName } from "./enums";
import { Route } from "../../../common/routes";

const menuItems: MenuItem[] = [
  {
    name: MenuEntryName.MAIN,
    link: Route.HOME,
  },
  {
    name: MenuEntryName.CHECK_OBJ,
    link: Route.HOME,
  },
  {
    name: MenuEntryName.SERVICES,
    link: Route.HOME,
  },
  {
    name: MenuEntryName.PARTNERS,
    link: Route.HOME,
  },
  {
    name: MenuEntryName.WEBINAR,
    link: Route.HOME,
  },
];

export { menuItems };
