import { Link } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import UserInput from "../../components/Inputs/UserInput";
import EmailInput from "../../components/Inputs/EmailInput";
import PasswordInput from "../../components/Inputs/PassWordInput";
import useForm from "../../hooks/useForm";
import "./auth.css";

const SignUpPage = () => {
  const User = {
    username: "",
    email: "",
    password: "",
  };

  const { data, handleInputChange, resetForm } = useForm(User);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(JSON.stringify(data));
    resetForm();
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
              <UserInput onChange={handleInputChange} value={data.username} />
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
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SignUpPage;
