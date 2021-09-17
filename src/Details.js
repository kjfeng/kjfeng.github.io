import React from 'react';
import './main.css';
import './App.css';
import { Row, Col } from 'react-bootstrap';

function Details() {
  return (
    <div className="Details">
      <Col md={12} lg={10}>
        <h2>Title g0es here</h2>
        <p>Images and supporting details0</p>
          <p>I'm a first-year PhD student in the <a href="https://www.hcde.washington.edu/">Human Centered Design & Engineering</a> department at the University of Washington, currently rotating with <a href="https://www.hcde.washington.edu/mcdonald">David W. McDonald</a>. My interests are in human-AI interaction, specifically the intersection of user experience and machine learning. I’m motivated by the observation that there is increasing need to understand and evaluate UX of ML systems as they are deployed into new domains, but key stakeholders are unprepared to do so with current tools and processes. </p>
        <h3>Materials</h3>

      </Col>


    </div>
  );
}

export default Details;
