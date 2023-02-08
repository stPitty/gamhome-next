import { Hook } from "../../../../common/routes";

type CardProp = {
  imgSrc: string;
  imgAlt: string;
  header: string;
  descriptionFull: string;
  descriptionShort?: string;
  link: Hook;
};

export type { CardProp };
