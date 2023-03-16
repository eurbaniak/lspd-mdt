import React from "react";
import { useAuth } from "../../userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./headerStyle.css";

const Header = () => {
  const user = useAuth();

  return (
    <div className="header">
      <h1>Police</h1>
      {user.user ? <button onClick={() => signOut(auth)}>Logout</button> : null}
    </div>
  );
};

export default Header;
