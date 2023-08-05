import { RecoilState, useRecoilState } from 'recoil';
import { LoginForm } from './LoginForm';
import {login} from '../api/accounts';
import { User } from '../user/User';

function useHandleLogin({
  loginForm,
  onSuccess,
}:{
  loginForm: RecoilState<LoginForm>,
  onSuccess: (user: User) => void,
}) {
  const [form, setForm] = useRecoilState<LoginForm>(loginForm);
  const handleLogin = async () => {
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
  return handleLogin;
};

export default useHandleLogin;
