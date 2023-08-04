import { RecoilState, atom } from 'recoil';
import { StateLoginForm } from './typeStateLoginForm';

const stateLoginForm: RecoilState<StateLoginForm> = atom<StateLoginForm>({
  key: 'stateLoginForm',
  default: {
    name: '',
    nameError: '',
    password: '',
    passwordError: '',
    isSubmitting: false,
  },
});

export default stateLoginForm;
