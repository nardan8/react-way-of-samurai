import React from "react";
import mylogo from "../images/my-logo.png";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={mylogo} alt="My logo" />
    </header>
  );
};

export default Header;
