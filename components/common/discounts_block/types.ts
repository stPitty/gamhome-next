import { AdaptiveLayoutPriority } from "../../../common/types";
import { Hook } from "../../../common/routes";

export type CardAbout = "delivery" | "cleaning";

export type CardData = {
  id: number;
  header: string;
  subHeader: string;
  desc: string;
  tags: ({
    id: number;
    text: string;
  } & Partial<AdaptiveLayoutPriority>)[];
  primaryButtonText: string;
  image: string;
  cardType: CardAbout;
  contentId: Hook.DELIVERY_CONTENT | Hook.CLEANING_CONTENT;
};
