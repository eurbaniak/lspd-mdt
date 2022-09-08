import React from "react";
import "./MenuStyle.css";
import { menuOptions } from "./menuOptions";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {menuOptions.map(({ id, name, path }) => (
        <div key={id} className="option">
          <Link to={path || "/"}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
