import React from 'react';
import '../main.css';
import { Row } from 'react-bootstrap';

function AuthorPile(props) {

  return (
    <Row className="authorpile" sm={1} md={2}>
      {props.authors.map((author, index) =>
        <div className="author-block">
          <div className="circle-pic" style={{backgroundImage: `url(${author[1].default})`}}></div>
          <h6 className="author-name">{author[0]}</h6>
        </div>
      )}

    </Row>
  );
}

export default AuthorPile;
