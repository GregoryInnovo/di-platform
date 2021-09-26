import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import videoGallery from "../../assets/static/video/gallery.mp4";
import videoProject from "../../assets/static/video/vidprueba.mp4";
import "./Home.css";

/* 

  Container que muestra la página principal:
  -. Muestra la experiencia multimedia a la izq
  -. Muestra los poryectos D I a la der


*/
const Home = () => {
  return (
    <Fragment>
      {/* <Search /> */}
      {/* <!-- Main content --> */}
      <main>
        {/* <!-- Multimedia experience --> */}
        <section>
          <video
            className="o-experience-container"
            loop
            muted
            // autoPlay={true}
            preload="auto"
          >
            <source src={videoGallery} type="video/mp4" />
          </video>
          <Link to="/login"  className="home-btn type3">
            <button className="o-btn-home">Experiencia Multimedia</button>
          </Link>
        </section>

        {/* <!-- All projects --> */}
        <section>
          <video
            className="o-projects-container"
            loop
            muted
            // autoPlay={true}
            preload="auto"
          >
            <source src={videoProject} type="video/mp4" />
          </video>

          <Link to="/login" className="home-btn type3">
            <button className="o-btn-home">Ver todos los proyectos</button>
          </Link>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
