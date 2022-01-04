import React from 'react';
import { Pub } from './assets/HelperComponents';
import * as dataObjects from './assets/dataObjects.js';

function Publications() {
  return (
    <div className="">
      <div className="pub-wrapper">
        <h5>Conference and Journal Papers</h5>
        <Pub {...dataObjects.WhatsappMisinfoObj}/>
      </div>

      <div className="pub-wrapper">
        <h5>Non-refereed Papers</h5>
          <Pub {...dataObjects.AdOculosObj}/>
          <Pub {...dataObjects.SonorinesObj}/>
      </div>

      {/*<img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>*/}

    </div>
  );
}

export default Publications;
