import { RecoilState, atom } from 'recoil';
import { LoginForm } from '../models/login/LoginForm';

const stateLoginForm: RecoilState<LoginForm> = atom<LoginForm>({
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
