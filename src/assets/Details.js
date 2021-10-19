import React from 'react';
import '../main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Details(props) {

  return (
    <div style={{paddingTop: "0.5rem"}}>

      {props.paper ? <a href={props.paper} className="showcase-link"><FontAwesomeIcon icon={faFileAlt} /> Paper</a> : null}

      {props.code ? <a href={props.code} className="showcase-link"><FontAwesomeIcon icon={faCode} /> Code</a> : null}

      {props.slides ? <a href={props.slides} className="showcase-link"><FontAwesomeIcon icon={faWindowRestore} /> Slides</a> : null}

      {props.demo ? <a href={props.demo} className="showcase-link"><FontAwesomeIcon icon={faPlay} /> Demo</a> : null}

      {props.video ? <a href={props.video} className="showcase-link"><FontAwesomeIcon icon={faVideo} /> Video</a> : null}

      {props.poster ? <a href={props.poster} className="showcase-link"><FontAwesomeIcon icon={faWindowMaximize} /> Poster</a> : null}


    </div>
  );
}

export default Details;
