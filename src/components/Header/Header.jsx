import React from "react";
import { useAuth } from "../../userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./headerStyle.css";

const Header = () => {
  const user = useAuth();

  return (
    <div className="header">
      <h1>LSPD</h1>
      {user ? <button onClick={() => signOut(auth)}>Logout</button> : null}
    </div>
  );
};

export default Header;
