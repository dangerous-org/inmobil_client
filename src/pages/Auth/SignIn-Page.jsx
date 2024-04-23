/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import EmailInput from "../../components/Inputs/EmailInput";
import PasswordInput from "../../components/Inputs/PassWordInput";
import useForm from "../../hooks/useForm";
import authStore from "../../store/authStore";
import "./auth.css";

const SignInPage = () => {

  const navigate = useNavigate();

  const signIn = authStore((state) => state.signIn);

  const { data, handleInputChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signIn(data);
    resetForm();
    navigate("/feed");
  };

  return (
    <div className="main-container">
      <main className="main">
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
              <EmailInput onChange={handleInputChange} value={data.email} />
              <PasswordInput
                onChange={handleInputChange}
                value={data.password}
              />
              <SubmitButton text="Sign In" />
            </form>
          </main>
          <footer>
            <Link to={"/auth/sign-up"}>Don't have an Account? Register</Link>
            <p>Or continue with</p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SignInPage;
