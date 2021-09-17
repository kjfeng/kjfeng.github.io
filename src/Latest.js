import React from 'react';
import Showcase from './Showcase.js';
import { Row, Col, CardGroup } from 'react-bootstrap';

function Latest() {
  return (
    <div className="">
      <CardGroup className="showcase-wrapper">
        <Showcase className=".h-100"
          thumbnail={ require('./assets/img/adoculos-cover.png').default }
          title="AdOculos"
          subtitle="Lowering the barrier for web advertisement research at scale with a searchable archive of modern web ads."
          venue="Princeton senior thesis"
          urlext="adoculos"
          paper={ require("./assets/pton-thesis.pdf").default }
          slides={ require("./assets/pton-thesis-slides.pdf").default }
          video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
        />
        <Showcase
          thumbnail={ require('./assets/img/adoculos-cover.png').default }
          title="AdOculos"
          subtitle="Lowering the barrier."
          venue="Princeton senior thesis"
          urlext="adoculos"
          paper={ require("./assets/pton-thesis.pdf").default }
          slides={ require("./assets/pton-thesis-slides.pdf").default }
          video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
        />
        <Showcase
          thumbnail={ require('./assets/img/adoculos-cover.png').default }
          title="AdOculos"
          subtitle="for web advertisement research at scale with a searchable archive of modern web ads."
          venue="Princeton senior thesis"
          urlext="adoculos"
          paper={ require("./assets/pton-thesis.pdf").default }
          slides={ require("./assets/pton-thesis-slides.pdf").default }
          video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
        />
        <Showcase
          thumbnail={ require('./assets/img/adoculos-cover.png').default }
          title="AdOculos"
          subtitle="searchable archive of modern web ads."
          venue="Princeton senior thesis"
          urlext="adoculos"
          paper={ require("./assets/pton-thesis.pdf").default }
          slides={ require("./assets/pton-thesis-slides.pdf").default }
          video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
        />
        <Showcase
          thumbnail={ require('./assets/img/adoculos-cover.png').default }
          title="AdOculos"
          subtitle="web ads."
          venue="Princeton senior thesis"
          urlext="adoculos"
          paper={ require("./assets/pton-thesis.pdf").default }
          slides={ require("./assets/pton-thesis-slides.pdf").default }
          video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
        />
      </CardGroup>




      {/*<img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>*/}
    </div>
  );
}

export default Latest;
