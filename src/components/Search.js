import React from "react";
import "../assets/styles/components/Search.css";

/* 
    Componente reutilizable del search
*/

// TODO: Adptar el buscador al diseño de figma
const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input className="input" type="text" placeholder="Buscar..." />
  </section>
);

export default Search;
