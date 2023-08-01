import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import loginForm from "./stateLoginForm";

const useHandleLogin = () => {
  const [form, setForm] = useRecoilState(loginForm);
  const nextRouter = useRouter();
  const handleLogin = () => {
    if (!form.name) {
      setForm({...form, nameError: 'Please enter your name'});
      return;
    }
    if (!form.password) {
      setForm({...form, passwordError: 'Please enter your password'});
      return;
    }
    console.log('login'); 
    // sleep
    setForm({...form, isSubmitting: true});
    new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => {
        // navigate to home page.
        setForm({...form, isSubmitting: false});
        nextRouter.push('/home');
      });
  }
  return handleLogin;
}

export default useHandleLogin;
