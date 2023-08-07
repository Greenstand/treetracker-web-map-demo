import { Token } from "../entities/Token";
import { Wallet } from "../entities/Wallet";

export type TransferWizard = {
  step: number;
  fromWallet: Wallet | null;
  toWallet: Wallet | null;
  token: Token | null;
};
