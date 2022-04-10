import React from 'react';
import '../main.css';
import { AuthorPile, Figure, InfoPage } from './HelperComponents';
import Details from './Details';
import * as dataObjects from './dataObjects.js';

export function AdOculos() {

  return (

    <InfoPage helmetExt="AdOculos">

      <h2>AdOculos</h2>
      <AuthorPile authors={dataObjects.AdOculosObj.authors}/>
      <p className="venue-page">{dataObjects.AdOculosObj.venue}</p>

      <Figure path="./img/adoculos-cover.png" alt="A screenshot of the AdOculos interface." />


      <h3>Abstract</h3>
      <p>Web advertisements are essential to the day-to-day operations on the internet by providing a key channel of revenue to websites that offer content at little to no cost. However, they are also common sources of deception, scams, and privacy violations. Given their significance, ads are of interest to many different groups of experts, including web researchers, communications scholars, and regulators, but their fleeting nature makes them difficult to study systematically and at scale. This thesis presents AdOculos, a technical system comprising a search interface powered by automated visual analysis tools and a continuously updated, large-scale archive of ads crawled from thousands of popular websites. By using the system to uncover novel research questions, dimensions of analysis, and policy recommendations, I demonstrate how AdOculos and its underlying tools enable expanded possibilities in ad research.</p>

      <h3>Details</h3>
      <Details {...dataObjects.AdOculosObj}/>

    </InfoPage>
  );
}

export function WhatsappMisinfo() {

  return (
    <InfoPage helmetExt="Misinformation on WhatsApp">

      <h2>{dataObjects.WhatsappMisinfoObj.title}</h2>
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
