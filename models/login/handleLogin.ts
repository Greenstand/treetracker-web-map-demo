import { RecoilState, SetterOrUpdater, useRecoilState } from 'recoil';
import { LoginForm } from './LoginForm';
import {login} from '../api/accounts';
import { User } from '../user/User';
import { UpdateState } from '../UpdateState';

async function handleLogin(
  form: LoginForm,
  setForm: UpdateState<LoginForm>,
  onSuccess: (user: User) => void,
) {
    if (!form.name) {
      setForm({ ...form, nameError: 'Please enter your name' });
      return;
    }
    if (!form.password) {
      setForm({ ...form, passwordError: 'Please enter your password' });
      return;
    }
    console.log('login');
    // sleep
    setForm({ ...form, isSubmitting: true });
    const user = await login(form.name, form.password);
    onSuccess(user);
};

export default handleLogin;
