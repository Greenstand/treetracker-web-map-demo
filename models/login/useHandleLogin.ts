import { RecoilState, useRecoilState } from 'recoil';
import { StateLoginForm } from './typeStateLoginForm';
import {login} from '../api/accounts';

function useHandleLogin<StateLoginForm>({
  stateLoginForm,
  onSuccess,
}:{
  stateLoginForm: RecoilState<StateLoginForm>,
  onSuccess: () => void,
}) {
  const [form, setForm] = useRecoilState(stateLoginForm);
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
    onSuccess();
  };
  return handleLogin;
};

export default useHandleLogin;
