import React, { Fragment } from "react";
import "./ProjectDetail.css";

/* 
  Container para mostrar un proyecto
*/

const ProjectDetail = () => (
  <Fragment>
    <section className="container__project">
      {/* 3D or img content */}
      <section className="container__project--design">
        <div class="sketchfab-embed-wrapper">
          {" "}
          <iframe
            title="Ionic Greek Column"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/4eca519f2da54a7c989ce5416c8bbe85/embed"
          >
            {" "}
          </iframe>{" "}
          <p className="o-style-sketchFab-1">
            {" "}
            <a
              href="https://sketchfab.com/3d-models/ionic-greek-column-4eca519f2da54a7c989ce5416c8bbe85?utm_medium=embed&utm_campaign=share-popup&utm_content=4eca519f2da54a7c989ce5416c8bbe85"
              target="_blank"
              className="o-style-sketchFab-2"
            >
              {" "}
              Ionic Greek Column{" "}
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/RPR3DModels?utm_medium=embed&utm_campaign=share-popup&utm_content=4eca519f2da54a7c989ce5416c8bbe85"
              target="_blank"
              className="o-style-sketchFab-2"
            >
              {" "}
              RPR3DModels{" "}
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4eca519f2da54a7c989ce5416c8bbe85"
              target="_blank"
              className="o-style-sketchFab-2"
            >
              Sketchfab
            </a>
          </p>
        </div>
      </section>
      {/* Intro content*/}
      <section className="container__project--intro">
        <p className="container__project--intro__title">
          Diseño industrial UAO en acción
        </p>
        <p className="container__project--intro__course">
          Nombre de la asignatura
        </p>
        <p>Pensamiento creativo</p>
      </section>
      <section className="container__project--name">
        <p className="container__project--name__title">ESTUDIANTE (S):</p>
        <p>Alejandro Solarte Loaiza</p>
      </section>

      <section className="container__project--description">
        <p className="container__project--description__title">
          Descripción del proyecto:
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod
          tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor
          incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt
          ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore
          et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore
          magna aliqua.eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </section>

      {/* <aside className="container__project--content">
        <section>
          <p>Videos</p>
        </section>

        <p>imganes:</p>
        <section></section>
      </aside> */}

      {/* <section className="container__project--comments">
        <p>Comentaries:</p>
      </section> */}
    </section>
  </Fragment>
);

export default ProjectDetail;
