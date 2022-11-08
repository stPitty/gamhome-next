import { MenuEntryName } from "./enums";
import { Route } from "../../../common/routes";

type MenuItem = {
  name: MenuEntryName;
  link: Route;
};

export type { MenuItem };
