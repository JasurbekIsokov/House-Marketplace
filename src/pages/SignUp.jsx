import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const SignUn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>

      <form>
        <input
          type="name"
          name="name"
          id="name"
          className="nameInput"
          placeholder="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="emailInput"
          placeholder="email"
          value={email}
          onChange={onChange}
        />

        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            className="passwordInput"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />

          <img
            src={visibilityIcon}
            alt="show password"
            className="showPassword"
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        <Link className="forgotPasswordLink" to="/forgot-password">
          Forgot Password
        </Link>

        <div className="signUpBar">
          <p className="signUpText">Sign Up</p>
          <button className="signUpButton">
            <ArrowRightIcon fill="#fff" width="34px" height="34px" />
          </button>
        </div>
      </form>

      {/* Google Aouth */}
      <Link to="/sign-in" className="registerLink">
        Sign Ip Instead
      </Link>
    </div>
  );
};

export default SignUn;
