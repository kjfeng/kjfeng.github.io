import React, { useEffect, useRef } from 'react';
import '../main.css';
import { InfoPage, AuthorPile, autoScroll, FigureFullWidth } from './HelperComponents';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import * as dataObjects from './dataObjects.js';

export function AdOculos() {

  autoScroll();

  return (

    <InfoPage>
    <Helmet title={"AdOculos | Kevin Feng"} />

      <h2>AdOculos</h2>
      <AuthorPile authors={dataObjects.AdOculosObj.authors}/>
      <p className="venue-page">{dataObjects.AdOculosObj.venue}</p>

      <img className="full-width-img" src={ require("./img/adoculos-cover.png").default } alt={"A screenshot of the AdOculos interface."}></img>

      <h3>Abstract</h3>
      <p>Web advertisements are essential to the day-to-day operations on the internet by providing a key channel of revenue to websites that offer content at little to no cost. However, they are also common sources of deception, scams, and privacy violations. Given their significance, ads are of interest to many different groups of experts, including web researchers, communications scholars, and regulators, but their fleeting nature makes them difficult to study systematically and at scale. This thesis presents AdOculos, a technical system comprising a search interface powered by automated visual analysis tools and a continuously updated, large-scale archive of ads crawled from thousands of popular websites. By using the system to uncover novel research questions, dimensions of analysis, and policy recommendations, I demonstrate how AdOculos and its underlying tools enable expanded possibilities in ad research.</p>

      <h3>Details</h3>
      <Details {...dataObjects.AdOculosObj}/>

    </InfoPage>
  );
}

export function WhatsappMisinfo() {

  autoScroll();

  return (
    <InfoPage>
      <Helmet title={"Misinformation on WhatsApp | Kevin Feng"} />

      <h2>Investigating How Users in the United States Encounter and Deal With Misinformation on WhatsApp During COVID-19</h2>
      <AuthorPile authors={dataObjects.WhatsappMisinfoObj.authors}/>
      <p>* denotes equal contribution</p>
      <p className="venue-page">{dataObjects.WhatsappMisinfoObj.venue}</p>

      <h3>Abstract</h3>
      <p>Coming soon!</p>

      <h3>Details</h3>
      <p>Coming soon!</p>

    </InfoPage>
  );
}
