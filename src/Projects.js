import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './main.css';


function Projects() {
  useEffect(() => {
    sessionStorage.setItem("onDetailsPage", 0);
  }, []);
  return (
    /*<p className="">
      <Link to={'/projects/adoculos'}>AdOculos</Link><br/>
      <Link to={'/projects/whatsapp-misinfo'}>Misinfo on WhatsApp</Link>
    </p>*/

    <div>
      <img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>
    </div>


  );
}

export default Projects;
