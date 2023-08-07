import { RecoilState, atom } from 'recoil';
import * as transfer from '../models/transfer';

const transferWizard: RecoilState<transfer.TransferWizard> = atom<transfer.TransferWizard>({
  key: 'transferWizard',
  default: {
    step: 0,
    fromWallet: null,
    toWallet: null,
    token: null,
  },
});

export default transferWizard;
