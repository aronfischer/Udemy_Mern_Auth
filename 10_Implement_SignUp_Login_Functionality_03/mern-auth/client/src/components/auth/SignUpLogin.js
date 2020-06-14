import React, { useState, useEffect, useRef } from "react";

import "../../styles/auth.css";

const SignUpLogin = (props) => {
  const { start, displayAuth } = props;

  const node = useRef();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [styles, setStyles] = useState({
    login: { left: "50px" },
    signUp: { left: "400px" },
    btn: { left: "0" },
  });

  useEffect(() => {
    if (start === "login") {
      changeToLogin();
    } else if (start === "signUp") {
      changeToSignUp();
    }

    // Add and remove eventlistener for outside click
    document.addEventListener("mousedown", handOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handOutsideClick);
    };
  }, []);

  const handOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      // Handle inside click
      return;
    } else {
      // Handle outside click
      displayAuth(null);
    }
  };

  const changeToLogin = () => {
    setStyles({
      login: { left: "50px" },
      signUp: { left: "400px" },
      btn: { left: "0" },
    });
  };

  const changeToSignUp = () => {
    setStyles({
      login: { left: "-400px" },
      signUp: { left: "50px" },
      btn: { left: "110px" },
    });
  };

  const handleChange = (name) => (event) => {
    if (name === "username") {
      setValues({ ...values, username: event.target.value });
    } else if (name === "email") {
      setValues({ ...values, email: event.target.value });
    } else if (name === "password") {
      setValues({ ...values, password: event.target.value });
    }
  };

  return (
    <div>
      <SignUpLoginForm
        styles={styles}
        values={values}
        changeToSignUp={changeToSignUp}
        changeToLogin={changeToLogin}
        handleChange={handleChange}
        node={node}
      />
    </div>
  );
};

const SignUpLoginForm = (props) => {
  const { login, signUp, btn } = props.styles;
  const { username, email, password } = props.values;
  const { changeToLogin, changeToSignUp, handleChange, node } = props;

  return (
    <div className="af-form-wrapper">
      <div className="af-form-box" ref={node}>
        <div className="af-button-box">
          <div id="af-btn" style={btn}></div>
          <button
            type="button"
            className="af-toggle-btn"
            onClick={changeToLogin}
          >
            Login
          </button>
          <button
            type="button"
            className="af-toggle-btn"
            onClick={changeToSignUp}
          >
            Sign up
          </button>
        </div>

        <form id="af-login-form" className="af-input-group" style={login}>
          <div className="af-input-wrapper">
            <input
              type="email"
              className="af-input-field"
              value={email}
              onChange={handleChange("email")}
            />
            <label>Email</label>
          </div>
          <div className="af-input-wrapper">
            <input
              type="password"
              className="af-input-field"
              value={password}
              onChange={handleChange("password")}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="af-submit-btn">
            Login
          </button>
          <button type="button" className="af-forgot-password-btn">
            Forgot your password?
          </button>
        </form>

        <form id="af-sign-up-form" className="af-input-group" style={signUp}>
          <div className="af-input-wrapper">
            <input
              type="text"
              className="af-input-field"
              value={username}
              onChange={handleChange("username")}
            />
            <label>Name</label>
          </div>
          <div className="af-input-wrapper">
            <input
              type="email"
              className="af-input-field"
              value={email}
              onChange={handleChange("email")}
            />
            <label>Email</label>
          </div>
          <div className="af-input-wrapper">
            <input
              type="password"
              className="af-input-field"
              value={password}
              onChange={handleChange("password")}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="af-submit-btn">
            Sign up
          </button>
          <button type="button" className="af-forgot-password-btn">
            Forgot your password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpLogin;
