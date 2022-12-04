import { CardType } from "./enums";
import { ButtonType } from "../UI/button/enums";

export type CardData = {
  id: number;
  cardType: CardType;
  buttonType: ButtonType;
  headerText: string;
  cost: string;
  descText: string;
  buttonAction: Function;
  points: {
    id: number;
    text: string;
  }[];
  tagText?: string;
  plusService?: string;
};
