import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../userContext";
import { useNavigate, Link } from "react-router-dom";
import style from "./login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  if (user) {
    navigate("/");
  }

  return (
    <form onSubmit={handleLogin} className={style.login}>
      <h2>Login</h2>
      <input
        placeholder="email@email.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <span>
        no account? <Link to="/register">register</Link>
      </span>
      {error ? <p>something went wrong</p> : null}
    </form>
  );
};

export default Login;
