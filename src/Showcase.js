import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo } from '@fortawesome/free-solid-svg-icons';

function Showcase(props) {
  return (
    <div className="">
      <Card className="showcase">
        <a href="#">
          <Card.Img variant="top" src={props.thumbnail} />
        </a>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.subtitle}
            <div className="venue-info">{props.venue}</div>
          </Card.Text>
          <div className="showcase-info">

            {props.details ? <a href={props.details} className="showcase-link"><FontAwesomeIcon icon={faInfoCircle} /> Details</a> : null}

            {props.paper ? <a href={props.paper} className="showcase-link"><FontAwesomeIcon icon={faFileAlt} /> Paper</a> : null}

            {props.code ? <a href={props.code} className="showcase-link"><FontAwesomeIcon icon={faCode} /> Code</a> : null}

            {props.slides ? <a href={props.slides} className="showcase-link"><FontAwesomeIcon icon={faWindowRestore} /> Slides</a> : null}

            {props.demo ? <a href={props.demo} className="showcase-link"><FontAwesomeIcon icon={faPlay} /> Demo</a> : null}

            {props.video ? <a href={props.video} className="showcase-link"><FontAwesomeIcon icon={faVideo} /> Video</a> : null}

            {/*<a href={props.details} className="showcase-link"><FontAwesomeIcon icon={faInfoCircle} /> Details</a>
            <a href={props.paper} className="showcase-link"><FontAwesomeIcon icon={faFileAlt} /> Paper</a>
            <a href={props.code} className="showcase-link"><FontAwesomeIcon icon={faCode} /> Code</a>
            <a href={props.slides} className="showcase-link"><FontAwesomeIcon icon={faWindowRestore} /> Slides</a>
            <a href={props.demo} className="showcase-link"><FontAwesomeIcon icon={faPlay} /> Demo</a>*/}
          </div>



          {/*<Card.Link className="showcase-link" href="#">
            <FontAwesomeIcon icon={faInfoCircle} /> Details
          </Card.Link>
          <Card.Link className="showcase-link" href="#">
            <FontAwesomeIcon icon={faFileAlt} /> Paper
          </Card.Link>
          <Card.Link className="showcase-link" href="#">
            <FontAwesomeIcon icon={faCode} /> Code
          </Card.Link>
          <Card.Link className="showcase-link" href="#">
            <FontAwesomeIcon icon={faWindowRestore} /> Slides
          </Card.Link>
          <Card.Link className="showcase-link" href="#">
            <FontAwesomeIcon icon={faPlay} /> Demo
          </Card.Link>*/}
        </Card.Body>
      </Card>

    </div>
  );
}

export default Showcase;
