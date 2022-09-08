import React from "react";
import "./MenuStyle.css";
import { menuOptions } from "./menuOptions";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {menuOptions.map(({ id, name, path }) => (
        <Link key={id} className="link" to={path || "/"}>
          <div className="option">{name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
