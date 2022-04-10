import React, { useEffect } from 'react';
import Showcase from './Showcase.js';

function Latest() {
  useEffect(() => {
    sessionStorage.setItem("onDetailsPage", 0);
  }, []);

  return (
    <div className="showcase-wrapper">
      <Showcase
        thumbnail={ require('./assets/img/adoculos-cover.png').default }
        title="AdOculos"
        subtitle="Lowering the barrier for web advertisement research at scale."
        venue="Princeton CS senior thesis"
        urlext="adoculos"
        paper={ require("./assets/files/pton-thesis.pdf").default }
        slides={ require("./assets/files/pton-thesis-slides.pdf").default }
        video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
      />
      <Showcase
        thumbnail={ require('./assets/img/whatsapp-cover.png').default }
        title="Misinformation on WhatsApp"
        subtitle="Investigating How University Students in the United States Encounter and Deal With Misinformation in Private WhatsApp Chats During COVID-19."
        venue="In submission"
        urlext="whatsapp-misinfo"
      />
      <Showcase
        thumbnail={ require('./assets/img/inter-cover.png').default }
        title="I-n-t-e-r"
        subtitle="Art exhibition exploring themes of time, accumulation, digital space, and more."
        venue="Princeton Visual Arts senior thesis"
        urlext="i-n-t-e-r"
        video="https://vimeo.com/619724609"
      />
      <Showcase
        thumbnail={ require('./assets/img/arbb-cover.png').default }
        title="ARBlockbot"
        subtitle="Augmented reality mobile application for programming and robotics education."
        venue="NUS Computing Innovation & Research Showcase 2020"
        urlext="arblockbot"
        poster={ require("./assets/files/arblockbot-poster.pdf").default }
      />


      {/*<img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>*/}
    </div>
  );
}

export default Latest;
