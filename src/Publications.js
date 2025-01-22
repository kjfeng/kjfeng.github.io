import React from 'react';
import { Pub } from './assets/HelperComponents';
import * as dataObjects from './assets/dataObjects.js';

function Publications() {
  // put most recent first
  const cjPapers = [dataObjects.CanvilObj, dataObjects.AIamNotALawyerObj, dataObjects.TeachableFeedExperiencesObj, dataObjects.C2PAProvenanceObj, dataObjects.UXAICommObj, dataObjects.UXCollabObj, dataObjects.UXIMLObj, dataObjects.WhatsappMisinfoObj, dataObjects.CFExpObj];
  const wdPapers = [dataObjects.CaseRepositoriesObj, dataObjects.TeachableAgentsKFAIObj, dataObjects.ShapedWordCloudsObj, dataObjects.HandoffsObj];
  const unreffed = [dataObjects.AdOculosObj];
  const preprints = [dataObjects.CocoaObj, dataObjects.PolicyPrototypingObj];

  return (
    <div className="">
      
      <div className="pub-wrapper">
        <h5>Conference and Journal Papers</h5>
        {cjPapers.map((paperObj, index) => 
        <div>
          <span className='indexer'>c.{cjPapers.length - index}</span>
          <Pub {...paperObj}/>
        </div>
        )}

      </div>

      <div className="pub-wrapper">
        <h5>Workshop and Demo Papers</h5>
        {wdPapers.map((paperObj, index) => 
        <div>
          <span className='indexer'>w.{wdPapers.length - index}</span>
          <Pub {...paperObj}/>
        </div>
        )}

      </div>

      <div className="pub-wrapper">
        <h5>Theses and Non-Refereed Papers</h5>
        {unreffed.map((paperObj, index) => 
        <div>
          <span className='indexer'>n.{unreffed.length - index}</span>
          <Pub {...paperObj}/>
        </div>
        )}

      </div>

      <div className="pub-wrapper">
        <h5>Preprints</h5>
        {preprints.map((paperObj, index) => 
        <div>
          <span className='indexer'>p.{preprints.length - index}</span>
          <Pub {...paperObj}/>
        </div>
        )}

      </div>

      {/*<img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}}/>*/}

    </div>
  );
}

export default Publications;
