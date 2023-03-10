import { MenuEntryName } from "./enums";
import { Hook } from "../../../common/routes";

type MenuItem = {
  id: number;
  name: string;
  link: Hook;
};

export type { MenuItem };
