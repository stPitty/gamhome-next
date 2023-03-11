import { MenuEntryName } from "./enums";
import { Hook } from "../../../common/routes";

type MenuItem = {
  id: number;
  name: string;
  link: string;
  isRedirect?: boolean;
};

export type { MenuItem };
