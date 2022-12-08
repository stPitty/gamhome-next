import { AdaptiveLayoutPriority } from "../../common/types";

export type TabContentType = "checkOwner" | "checkObject";

export type TabBodyData = {
  name: string;
  desc: string;
  points: {
    id: number;
    header: string;
    desc?: string;
  }[];
  image: string;
  additionalInfo: {
    header: string;
    points: ({
      id: number;
      text: string;
    } & Partial<AdaptiveLayoutPriority>)[];
    cost: number;
  };
  contentType: TabContentType;
  btnAction: Function;
};
