import React, { Fragment } from "react";
import "./NotFound.css";

/* 
  Container para mostrar el diseño de la página Not Found
*/

//FIXME: Arreglar contenido del h2 y p de forma vertical/cascada/columna
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
