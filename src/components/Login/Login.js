import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const { register, errors, handleSubmit } = useForm({});
  const history = useHistory();
  const onSubmit = () => {
    const password = localStorage.getItem("Password").replace(/"/g, "");
    const email = localStorage.getItem("Email").replace(/"/g, "");

    if (passwordlog !== password || emaillog !== email) {
      setErrorMessage(true);
    } else {
      history.push("/movies");
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <form className="formStyle">
        <h3>Login</h3>

        <label className="labelStyle">Username or Email</label>
        <input
          className="inputStyle"
          onBlur={(e) => setEmaillog(e.target.value)}
          name="email"
          ref={register({
            required: "You must specify your email",
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <label className="labelStyle">Password</label>
        <input
          className="inputStyle"
          onBlur={(e) => setPasswordlog(e.target.value)}
          name="password"
          type="password"
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          className="inputStyle"
          onClick={handleSubmit(onSubmit)}
          type="submit"
          value="Login"
        />
      </form>
      {errorMessage && (
        <div>
          <p className="text-danger fs-5 text-center mt-3">
            Email or Password Incorrect
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
