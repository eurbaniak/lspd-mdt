import React from "react";
import { useAuth } from "../../userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./header.module.scss";

const Header = () => {
  const user = useAuth();

  return (
    <div className={style.header}>
      <h1>Police</h1>
      {user.user ? <a onClick={() => signOut(auth)}>Logout</a> : null}
    </div>
  );
};

export default Header;
