import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Showcase(props) {

  return (

      <Card className="showcase">
        <Link to={`/projects/${props.urlext}`}>
          <Card.Img variant="top" src={props.thumbnail} />
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.subtitle}
            <div className="venue-info">{props.venue}</div>
          </Card.Text>

          <div className="showcase-info">

            {props.urlext ? <Link to={`/projects/${props.urlext}`} className="showcase-link"><FontAwesomeIcon icon={faInfoCircle} /> Info</Link> : null}

            {props.paper ? <a href={props.paper} className="showcase-link"><FontAwesomeIcon icon={faFileAlt} /> PDF</a> : null}

            {props.code ? <a href={props.code} className="showcase-link"><FontAwesomeIcon icon={faCode} /> Code</a> : null}

            {props.slides ? <a href={props.slides} className="showcase-link"><FontAwesomeIcon icon={faWindowRestore} /> Slides</a> : null}

            {props.demo ? <a href={props.demo} className="showcase-link"><FontAwesomeIcon icon={faPlay} /> Demo</a> : null}

            {props.video ? <a href={props.video} className="showcase-link"><FontAwesomeIcon icon={faVideo} /> Video</a> : null}

            {props.doi ? <a href={props.doi} className="showcase-link"><FontAwesomeIcon icon={faBookmark} /> DOI</a> : null}

            {props.poster ? <a href={props.poster} className="showcase-link"><FontAwesomeIcon icon={faWindowMaximize} /> Poster</a> : null}

          </div>

        </Card.Body>

      </Card>


  );
}

export default Showcase;
