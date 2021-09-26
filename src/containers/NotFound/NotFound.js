import React, { Fragment } from "react";
import "./NotFound.css";

const NotFound = () => (
  <Fragment>
    <section className="container__error">
      <section className="container__error--details">
        <h2>Error 404</h2>
        <p>Página no encontrada</p>
      </section>
    </section>
  </Fragment>
);

export default NotFound;
