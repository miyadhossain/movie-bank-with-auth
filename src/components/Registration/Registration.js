import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Registration.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = () => {
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Password", JSON.stringify(password));
  };

  return (
    <div>
      <Navbar></Navbar>
      <form className="formStyle">
        <h3>Create an account</h3>
        <label className="labelStyle">Name</label>
        <input
          className="inputStyle"
          type="text"
          id="name"
          name="name"
          ref={register({
            required: "You must specify your name",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <label className="labelStyle">Username or Email</label>
        <input
          className="inputStyle"
          onBlur={(e) => setEmail(e.target.value)}
          name="email"
          ref={register({
            required: "You must specify your email",
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <label className="labelStyle">Password</label>
        <input
          className="inputStyle"
          onBlur={(e) => setPassword(e.target.value)}
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

        <label className="labelStyle">Phone No.</label>
        <input
          className="inputStyle"
          name="phone"
          type="text"
          ref={register({
            required: "You must type Phone No.",
          })}
        />
        <label className="labelStyle">Profession</label>
        <select ref={register}>
          <option>Web Developer</option>
          <option>Software Engineer</option>
          <option>QA Engineer</option>
        </select>
        <input
          className="inputStyle"
          onClick={handleSubmit(onSubmit)}
          type="submit"
          value="Create account"
        />
        <Link to="/login" className="accountLink">
          Login?
        </Link>
      </form>
    </div>
  );
};

export default Registration;
