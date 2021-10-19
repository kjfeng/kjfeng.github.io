import React, { useEffect, useRef } from 'react';
import '../main.css';
import AuthorPile from './AuthorPile';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

export function AdOculos() {
  useEffect(() => {
    if (sessionStorage.getItem("onDetailsPage") === "0") {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      sessionStorage.setItem("onDetailsPage", 1);
    }
  }, []);


  return (

    <div className="page-template col-sm-12 col-md-10 col-lg-9">
    <Helmet title={"AdOculos | Kevin Feng"} />

      <h2>AdOculos</h2>
      <AuthorPile authors={[
          ["K. J. Kevin Feng", require(`./img/people/kjfeng.png`)],
          ["Arunesh Mathur", require('./img/people/arunesh.png')],
          ["Arvind Narayanan", require('./img/people/arvind.png')]
        ]}/>
      <p className="venue-page">Princeton CS senior thesis</p>

      <h3>Abstract</h3>
      <p style={{width: "100%"}}>Web advertisements are essential to the day-to-day operations on the internet by providing a key channel of revenue to websites that offer content at little to no cost. However, they are also common sources of deception, scams, and privacy violations. Given their significance, ads are of interest to many different groups of experts, including web researchers, communications scholars, and regulators, but their fleeting nature makes them difficult to study systematically and at scale. This thesis presents AdOculos, a technical system comprising a search interface powered by automated visual analysis tools and a continuously updated, large-scale archive of ads crawled from thousands of popular websites. By using the system to uncover novel research questions, dimensions of analysis, and policy recommendations, I demonstrate how AdOculos and its underlying tools enable expanded possibilities in ad research.</p>

      <h3>Details</h3>
      <Details
        paper={ require("./files/pton-thesis.pdf").default }
        slides={ require("./files/pton-thesis-slides.pdf").default }
        video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
      />

    </div>
  );
}

export function WhatsappMisinfo() {
  useEffect(() => {
    if (sessionStorage.getItem("onDetailsPage") === "0") {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      sessionStorage.setItem("onDetailsPage", 1);
    }
  }, []);

  return (
    <div className="page-template col-sm-12 col-md-10 col-lg-9">
      <Helmet title={"Misinformation on WhatsApp | Kevin Feng"} />

      <h2>Investigating How Users in the United States Encounter and Deal With Misinformation on WhatsApp During COVID-19</h2>
      <AuthorPile authors={[
          ["Oishee Chakrabarti*", require('./img/people/oishee.png')],
          ["K. J. Kevin Feng*", require('./img/people/kjfeng.png')],
          ["Kejing Li*", require('./img/people/mirror.png')],
          ["Kevin Song*", require('./img/people/kevin-song.png')],
          ["Marshini Chetty", require('./img/people/marshini.png')]
        ]}/>
      <p>* denotes equal contribution</p>
      <p className="venue-page">In submission</p>

      <h3>Abstract</h3>
      <p>Coming soon!</p>

      <h3>Details</h3>
      <p>Coming soon!</p>

    </div>
  );
}
