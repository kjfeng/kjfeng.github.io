import React from 'react';
import Showcase from './Showcase.js';

function Latest() {
  return (
    <div className="">
      {/*<Showcase
        thumbnail={ require('./assets/img/adoculos-cover.png').default }
        title="AdOculos"
        subtitle="Lowering the barrier for web advertisement research at scale with a searchable archive of modern web ads."
        venue="Princeton senior thesis"
        details="https://kjfeng.me"
        paper={ require("./assets/pton-thesis.pdf").default }
        slides={ require("./assets/pton-thesis-slides.pdf").default }
        video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
      />*/}
      <img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>
    </div>
  );
}

export default Latest;
