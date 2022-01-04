import React from 'react';
import '../main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize, faBook, faCopy } from '@fortawesome/free-solid-svg-icons';

function Bib(props) {
  return (
    <div className="bib-block">
        <pre className="bib-pre">{props.bibtex}</pre>
        <button className="copy-button" onClick={() => navigator.clipboard.writeText(props.bibtex)}><FontAwesomeIcon icon={faCopy} /></button>

    </div>
  );
}

function Details(props) {

  const [showBib, setShowBib] = React.useState(false);
  const toggleBibtex = () => {
    if (showBib) { setShowBib(false); } else setShowBib(true);
  };

  return (
    <div style={{paddingTop: "0"}}>

      {props.paper ? <a href={props.paper} className="showcase-link"><FontAwesomeIcon icon={faFileAlt} /> PDF</a> : null}

      {props.code ? <a href={props.code} className="showcase-link"><FontAwesomeIcon icon={faCode} /> Code</a> : null}

      {props.slides ? <a href={props.slides} className="showcase-link"><FontAwesomeIcon icon={faWindowRestore} /> Slides</a> : null}

      {props.demo ? <a href={props.demo} className="showcase-link"><FontAwesomeIcon icon={faPlay} /> Demo</a> : null}

      {props.video ? <a href={props.video} className="showcase-link"><FontAwesomeIcon icon={faVideo} /> Video</a> : null}

      {props.poster ? <a href={props.poster} className="showcase-link"><FontAwesomeIcon icon={faWindowMaximize} /> Poster</a> : null}

      {props.bibtex ? <button onClick={toggleBibtex} className="showcase-link"><FontAwesomeIcon icon={faBook} /> BibTeX</button> : null}

      {showBib ? <Bib bibtex={props.bibtex}/> : null}


    </div>
  );
}

export default Details;
