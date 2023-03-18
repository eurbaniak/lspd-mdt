import React from "react";
import { useAuth } from "../../userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className={style.header}>
      <h1>Police</h1>
      {user.user ? <a onClick={handleSignOut}>Logout</a> : null}
    </div>
  );
};

export default Header;
