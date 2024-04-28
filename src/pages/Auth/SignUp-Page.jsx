import SubmitButton from "../../components/SubmitButton/SubmitButton";
import UserInput from "../../components/Inputs/UserInput";
import EmailInput from "../../components/Inputs/EmailInput";
import PasswordInput from "../../components/Inputs/PassWordInput";
import useForm from "../../hooks/useForm";
import GoogleAuthButton from "../../components/GoogleAuthButton/GoogleAuthButton";
import authStore from "../../store/authStore";
import { useEffect, useCallback } from "react";
import { Toaster, toast } from 'sonner'
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const signUp = authStore((state) => state.signUp);
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const message = authStore((state) => state.message);
  const setMessage = authStore((state) => state.setMessage);

  const { data, handleInputChange, resetForm } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  const notify = useCallback(() => {
    if (message) {
      toast.error(message,  {className: "h-[50px] flex justify-center items-center", duration: 2000});
    }
  }, [message]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/feed");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (message) {
      notify();
    }
    setMessage(null);
  }, [message, notify, setMessage]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await signUp(data);
    if (!isAuthenticated) {
      return;
    }

    resetForm();
    navigate("/feed");
  };

  return (
    <div className="main-container">
      <main className="main">
      <Toaster position="top-right" expand={true}/>
        <section id="section-img">
          <figure className="w-[100%] h-[100%] flex justify-center items-center">
            <img src="/ilustracion-casa.webp" alt="img" />
          </figure>
        </section>
        <section id="section-form">
          <header>
            <h2 className="text-2xl font-semibold">Welcome To Inmobil</h2>
            <p className="text-[#b8b0ba]">Find the home of your dreams</p>
          </header>
          <main>
            <form onSubmit={handleSubmit}>
              <UserInput onChange={handleInputChange} value={data.userName} />
              <EmailInput onChange={handleInputChange} value={data.email} />
              <PasswordInput
                onChange={handleInputChange}
                value={data.password}
              />
              <SubmitButton text="Sign Up" />
            </form>
          </main>
          <footer>
            <Link to={"/auth/sign-in"}>Are you member? Login</Link>
            <p>Or continue with</p>
            <GoogleAuthButton />
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SignUpPage;
