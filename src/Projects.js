import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './main.css';
import { Project } from './assets/HelperComponents'


function Projects() {
  useEffect(() => {
    sessionStorage.setItem("onDetailsPage", 0);
  }, []);
  return (

    <div>
      <h5>Research</h5>
      <Project
        name="COVID-19 Misinformation on WhatsApp"
        urlext="whatsapp-misinfo"
        year="2021"
      />
      <Project
        name="AdOculos"
        urlext="adoculos"
        year="2021"
      />
      <Project
        name="iRadiate3D"
        weblink="https://cutecenter.nus.edu.sg/projects/iradiate-3d.html"
        year="2020"
      />
      <Project
        name="Sonorines Sound Recovery"
        weblink="https://humanities.princeton.edu/2017/03/22/saving-the-sonorine-an-early-20th-century-form-of-voice-mail/"
        year="2020"
      />

    <br/>

      <h5>Everything Else</h5>
      <span>Graphic design, fun code, academic course projects, and more.</span>
      <Project
        name="I-n-t-e-r"
        weblink="https://i-n-t-e-r.github.io/"
        year="2021"
      />
      <Project
        name="ARBlockBot"
        urlext="arblockbot"
        year="2020"
      />
      <Project
        name="Various graphic design projects"
        urlext="graphic-design"
        year="2018 – 2020"
      />
      <Project
        name="Rehack"
        urlext="rehack"
        year="2019"
      />
      <Project
        name="Social Login Visualizer"
        weblink="https://egr277.github.io/social-login-visualizer/"
        year="2019"
      />

      <br/>
      <div>
        <img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>
      </div>

    </div>





  );
}

export default Projects;
