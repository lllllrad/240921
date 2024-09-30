export interface Team {
  uniqueName: string;
  isAlly: (uniqueName: string) => boolean;
  isOpponent: (uniqueName: string) => boolean;
}
