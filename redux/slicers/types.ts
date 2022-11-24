import { ModalState } from "./enums";

type TPhotoPosition = {
  position: number;
};

type TModalState = {
  currentState: ModalState | null;
  isOpened: boolean;
};

export type { TPhotoPosition, TModalState };
