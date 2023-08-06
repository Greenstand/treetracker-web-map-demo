/**
 * Update operation compatible with Recoil's SetterOrUpdater and React's Dispatch
 */
import { Dispatch, SetStateAction } from 'react';
import { SetterOrUpdater} from 'recoil';

export type UpdateState<T> = SetterOrUpdater<T> | Dispatch<SetStateAction<T>>;
