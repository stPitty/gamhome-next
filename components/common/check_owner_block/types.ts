import { AdaptiveLayoutPriority } from "../../../common/types";

export type TabContentType = "checkOwner" | "checkObject" | "jurAnalysis";

export type TabBodyData = {
  name: string;
  desc: string;
  points: {
    id: number;
    header: string;
    desc?: string;
    gift?: boolean;
  }[];
  image: string;
  additionalInfo: {
    header: string;
    points: ({
      id: number;
      text: string;
    } & Partial<AdaptiveLayoutPriority>)[];
    cost: number | string;
  };
  contentType: TabContentType;
  btnAction: Function;
};
