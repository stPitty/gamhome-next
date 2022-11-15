type ButtonContent = {
  width: number;
  text?: string;
};

export type CardData = {
  id: number;
  header: string;
  subHeader: string;
  desc: string;
  tags: {
    id: number;
    text: string;
  }[];
  primaryButton: ButtonContent;
  image: string;
};
