import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";
import logo from "../assets/static/img/LogoPage.svg";
import userIcon from "../assets/static/img/LogoPage.svg";

const Header = () => {
  return (
    <header class="header">
      <Link to="/">
        <img class="header__img" src={logo} alt="Imagen page" />
      </Link>

      <div class="header__nav">
        <div class="header__nav--profile">
          <img src={userIcon} alt="Imagen de Perfil" />

          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/#">12</a>
          </li>

          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
