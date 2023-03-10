import { AnyAction } from "redux";

type LargeModalData = {
  header: string;
  buttonText: string;
  points: string[];
  btnAction: () => AnyAction;
};

type LargeModalState = "followDeal" | "sellOrBuy" | "key" | null;

type LargeModal = Record<NonNullable<LargeModalState>, LargeModalData>;

export type { LargeModalData, LargeModalState, LargeModal };
