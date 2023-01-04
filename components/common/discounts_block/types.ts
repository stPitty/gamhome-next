import { AdaptiveLayoutPriority } from "../../../common/types";

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
};
