import React from 'react';
import './App.css';
import './main.css';
import { Row, Col } from 'react-bootstrap';
import { Route, NavLink, HashRouter, Switch } from 'react-router-dom';
import Latest from './Latest';
import Publications from './Publications';
import Projects from './Projects';
import Misc from './Misc';
import Scroller from './scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Details from './assets/Details.js';
import { AdOculos, WhatsappMisinfo } from './assets/Projects2021.js';
import { ARBlockbot, Rehack, GraphicDesign, Audioscape } from './assets/Projects2020etc.js';

function App() {
  return (

    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>

        <Route path="/projects/adoculos" component={AdOculos}/>
        <Route path="/projects/whatsapp-misinfo" component={WhatsappMisinfo}/>
        <Route path="/projects/arblockbot" component={ARBlockbot}/>
        <Route path="/projects/i-n-t-e-r" component={() => {
            window.location.replace("https://i-n-t-e-r.github.io");
            return null;
          }}/>
        <Route path="/projects/rehack" component={Rehack}/>
        <Route path="/projects/graphic-design" component={GraphicDesign}/>
        <Route path="/projects/audioscape" component={Audioscape}/>

        <div className="App">
          <Col md={12} lg={10}>

            <div style={{marginBottom: "2rem"}}>
              <h1><a href="/">Kevin Feng</a></h1>
              <p><i>— HCI researcher and PhD student</i></p>
            </div>

            <Row style={{paddingBottom: "2rem"}}>
              <Col xs={{span:12, order:2}} md={{span:4, order:1}} >
                <div className="links-wrapper">
                  <img src={ require('./assets/img/me.png').default } alt="Smiling man with cap sitting in a chair, in black and white." className="bio-image" />
                  <span><FontAwesomeIcon icon={faEnvelope} /> kjfeng[AT]uw[DOT]edu</span><br/>
                  <span><a href={ require("./assets/files/cv.pdf").default }><FontAwesomeIcon icon={faFile} /> CV (PDF)</a></span><br/>
                  {/*<span><a href="#"><FontAwesomeIcon icon={faGraduationCap} /> Google Scholar</a></span><br/>*/}
                  <span><a href="https://twitter.com/kjfeng_"><FontAwesomeIcon icon={faTwitter} /> @kjfeng_</a></span>
                </div>

              </Col> 

              <Col xs={{span:12, order:1}} md={{span:8, order:2}} className="bio-wrapper">
                <p>I'm a first-year PhD student in the <a href="https://www.hcde.washington.edu/">Human Centered Design & Engineering</a> department at the University of Washington, currently rotating with <a href="https://faculty.washington.edu/aragon/">Cecilia Aragon</a>. My interests are in human-AI interaction and collaboration, specifically the intersection of user experience and machine learning. I’m motivated by the observation that there is increasing need to collaboratively advance the UX of ML systems as they are deployed into new domains, but key stakeholders are unprepared to do so with current tools and processes. </p>

                <p>I graduated from Princeton University with a B.S.E. in Computer Science and a minor in Visual Arts in 2021. At Princeton, I was affiliated with the <a href="https://citp.princeton.edu/">CITP</a> and worked with <a href="http://aruneshmathur.co.in/">Arunesh Mathur</a> and <a href="https://www.cs.princeton.edu/~arvindn/">Arvind Narayanan</a> on tools to democratize web advertisement research at scale. I also spent some time doing research at the <a href="https://www.media.mit.edu/">MIT Media Lab</a>, University of Chicago’s <a href="https://airlab.cs.uchicago.edu/">AIR Lab</a>, and the <a href="https://ssi.nus.edu.sg/">Smart Systems Institute</a> at the National University of Singapore.</p>
              </Col>
            </Row>

              <div className="nav-wrapper" id="nav">
                <NavLink to="/" exact={true} className="navigator">Latest</NavLink>
                <NavLink to="/publications" className="navigator">Publications</NavLink>
                <NavLink to="/projects" className="navigator">Projects</NavLink>
                <NavLink to="/misc" className="navigator">Misc</NavLink>
              </div>


              <Route exact path="/" component={Latest}/>
              <Route path="/publications" component={Publications}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/misc" component={Misc}/>

            <div className="footer">Designed + built by Kevin Feng, with some inspiration from <a href="https://fredhohman.com/">Fred Hohman</a>.</div>


            </Col>

        </div>
      </Switch>

      <Scroller />

    </HashRouter>
  );
}

export default App;
