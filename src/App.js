import React from 'react';
import './App.css';
import './main.css';
import { Row, Col } from 'react-bootstrap';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Latest from "./Latest";
import Publications from "./Publications";
import Projects from "./Projects";
import Misc from "./Misc";
import Scroller from "./scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">


    <Col md={12} lg={10}>
      <div style={{marginBottom: "2rem"}}>
        <h1><a href="/">Kevin Feng</a></h1>
        <p><i>— HCI researcher and PhD student</i></p>
      </div>

      <Row style={{paddingBottom: "2rem"}}>
        <Col xs={{span:12, order:2}} md={{span:4, order:1}} >
          <div className="links-wrapper">
            <img src={ require('./assets/img/me.png').default } alt="Smiling man with cap sitting in a chair, in black and white." style={{width: "100%", paddingBottom: "1rem"}}/>
            <span><FontAwesomeIcon icon={faEnvelope} /> kjfeng[AT]uw[DOT]edu</span><br/>
            <span><a href={ require("./assets/cv.pdf").default }><FontAwesomeIcon icon={faFile} /> CV (PDF)</a></span><br/>
            {/*<span><a href="#"><FontAwesomeIcon icon={faGraduationCap} /> Google Scholar</a></span><br/>*/}
            <span><a href="https://twitter.com/kjfeng_"><FontAwesomeIcon icon={faTwitter} /> @kjfeng_</a></span>
          </div>

        </Col>
        <Col xs={{span:12, order:1}} md={{span:8, order:2}} style={{paddingBottom: "1rem"}}>
          <p>I'm a first-year Ph.D. student in the <a href="https://www.hcde.washington.edu/">Human Centered Design & Engineering</a> department at the University of Washington, currently rotating with <a href="https://www.hcde.washington.edu/mcdonald">David W. McDonald</a>. My interests are in human-AI interaction, specifically the intersection of user experience and machine learning. I’m motivated by the observation that there is increasing need to understand and evaluate UX of ML systems as they are deployed into new domains, but key stakeholders are unprepared to do so with current tools and processes. </p>

          <p>I graduated from Princeton University with a B.S.E. in Computer Science and a minor in Visual Arts in 2021. At Princeton, I was affiliated with the <a href="https://citp.princeton.edu/">CITP</a> and worked with <a href="http://aruneshmathur.co.in/">Arunesh Mathur</a> and <a href="https://www.cs.princeton.edu/~arvindn/">Arvind Narayanan</a> on tools to democratize web advertisement research at scale. I also spent some time doing research at the <a href="https://www.media.mit.edu/">MIT Media Lab</a>, University of Chicago’s <a href="https://airlab.cs.uchicago.edu/">AIR Lab</a>, and the <a href="https://ssi.nus.edu.sg/">Smart Systems Institute</a> at the National University of Singapore.</p>
        </Col>
      </Row>


      <BrowserRouter>
        <div className="nav-wrapper">
          <NavLink to="/" exact={true} className="navigator">Latest</NavLink>
          <NavLink to="/publications" className="navigator">Publications</NavLink>
          <NavLink to="/projects" className="navigator">Projects</NavLink>
          <NavLink to="/misc" className="navigator">Misc</NavLink>
        </div>

        <div className="content">
          <Route exact path="/" component={Latest}/>
          <Route path="/publications" component={Publications}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/misc" component={Misc}/>
        </div>

      </BrowserRouter>

      {/*<div className="header-nav">
        <div className="row">
          <div className="col-md-12 col-lg-8" style={{paddingLeft: "2rem"}}>
            <h1><a href="/">Kevin Feng</a></h1>
            <h6 style={{fontStyle: "italic", paddingBottom: "1rem"}}>-- CS student, creative technologist</h6>
          </div>

          <div className="col-md-12 col-lg-4 nav-links" style={{paddingLeft: "2rem"}}>
            <h6>
              <a href="/about">↳ About</a><br/>
              <a href="/readings">↳ Readings</a><br/>
              <a href="https://medium.com/kevin-feng-blog">↳ Blog</a><br/>
            </h6>
            <h6 style={{paddingTop: "0.5rem"}}>
              <a className="resume-link" href="k_feng_RESUME.pdf" target="_blank">Resume</a>
            </h6>
          </div>
        </div>
      </div>*/}


      {/*<div className="col-md-12 col-lg-6 intro">
        <p>I'm a student at Princeton University thinking about technological interfaces and different ways people can interact with them to arrive at new conclusions. I aspire to use code, design, data, and new ideas to make people's communities at least marginally nicer to be in.</p>
      </div>*/}

      </Col>

      <Scroller />


    </div>
  );
}

export default App;
