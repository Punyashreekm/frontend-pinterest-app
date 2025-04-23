import "./authPage.css";
import Image from "../../componets/image/image";
import { useState } from "react";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" />
        <h1>{isRegister ? "create an account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="register">
            <div className="formGroup">
              <label htmlFor="userName">userName</label>
              <input type="userName" placeholder="userName" required name="userName" id="userName" />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input type="displayName" placeholder=" Name" required name="displayName" id="displayName" />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="email" required name="email" id="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="password" required name="password" id="password" />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="loginForm">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="email" required name="email" id="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="password" required name="password" id="password" />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
