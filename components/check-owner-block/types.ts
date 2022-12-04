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
    points: string[];
    cost: number;
  };
  btnAction: Function;
};
