import { atom } from 'recoil';

const stateLoginForm = atom({
  key: 'wmd-loginForm',
  default: {
    name: '',
    nameError: '',
    password: '',
    passwordError: '',
    isSubmitting: false,
  },
});

export default stateLoginForm;
