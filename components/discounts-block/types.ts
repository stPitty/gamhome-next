export type CardAbout = "delivery" | "cleaning";

export type CardData = {
  id: number;
  header: string;
  subHeader: string;
  desc: string;
  tags: {
    id: number;
    text: string;
    xlPriority: number;
    lgPriority: number;
  }[];
  primaryButtonText: string;
  image: string;
  cardType: CardAbout;
};
