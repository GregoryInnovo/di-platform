import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  
  const handleSubmit = props => {
    props.history.push('/');
  }
  
  return (
    <Fragment>
      <section class="login">
        <section class="login__container">
          <h2>Inicia Sesión</h2>
          <form class="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              class="input__login"
              type="text"
              placeholder="Correo"
              onChange={handleSubmit}
            />
            <input
              name="password"
              class="input__login"
              type="password"
              placeholder="Contraseña"
              onChange={handleSubmit}
            />
            <button class="button" type="submit">
              Iniciar sesión
            </button>
          </form>
          <Link to="/register">Regístrate</Link>
        </section>
      </section>
    </Fragment>
  );
};

export default Login;
