import React from 'react';
import './App.css';
import './main.css';
import { Row, Col } from 'react-bootstrap';
import { Route, NavLink, HashRouter, Switch } from 'react-router-dom';
import Highlights from './Highlights';
import Publications from './Publications';
import Projects from './Projects';
import Misc from './Misc';
import Scroller from './scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { Cocoa } from './assets/Projects2025.js';
import { Canvil, TeachableFeedExperiences, PolicyPrototypingLLMs, AIamNotALawyer } from './assets/Projects2024.js';
import { UXIML, UXCollab, C2PAProvenance, UXAIComm, CaseRepositories } from './assets/Projects2023.js';
import { CFExp, Handoffs, ShapedWordClouds, WhatsappMisinfo } from './assets/Projects2022.js';
import { AdOculos, SansTimesSans } from './assets/Projects2021.js';
import { ARBlockbot, Rehack, GraphicDesign, Audioscape } from './assets/Projects2020etc.js';

function App() {
  return (

    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/projects/cocoa" component={Cocoa}/>
        <Route path="/projects/policy-prototyping-llms" component={PolicyPrototypingLLMs}/>
        <Route path="/projects/ai-am-not-a-lawyer" component={AIamNotALawyer}/>
        <Route path="/projects/canvil" component={Canvil}/>
        <Route path="/projects/teachable-feed-experiences" component={TeachableFeedExperiences}/>
        <Route path="/projects/case-repositories" component={CaseRepositories}/>
        <Route path="/projects/provenance-social-media" component={C2PAProvenance}/>
        <Route path="/projects/ai-ux-communication" component={UXAIComm}/>
        <Route path="/projects/ux-collaboration" component={UXCollab}/>
        <Route path="/projects/ux-iml" component={UXIML}/>
        <Route path="/projects/shaped-wordclouds" component={ShapedWordClouds}/>
        <Route path="/projects/shaped-wordclouds" component={ShapedWordClouds}/>
        <Route path="/projects/handoffs-cocreation" component={Handoffs}/>
        <Route path="/projects/counterfactuals" component={CFExp}/>
        <Route path="/projects/adoculos" component={AdOculos}/>
        <Route path="/projects/whatsapp-misinfo" component={WhatsappMisinfo}/>
        <Route path="/projects/arblockbot" component={ARBlockbot}/>
        <Route path="/projects/i-n-t-e-r" component={() => {
            window.location.replace("https://i-n-t-e-r.github.io");
            return null;
          }}/>
        <Route path="/projects/sans-times-sans" component={SansTimesSans}/>
        <Route path="/projects/rehack" component={Rehack}/>
        <Route path="/projects/graphic-design" component={GraphicDesign}/>
        <Route path="/projects/audioscape" component={Audioscape}/>

        <div className="App">
          <Col md={12} lg={10} className="mainCol">

            <div style={{marginBottom: "2rem"}}>
              <h1><a href="/">Kevin Feng</a></h1>
              <p><i>— HCI researcher and PhD student</i></p>
            </div>

            <Row style={{paddingBottom: "2rem"}}>
              <Col xs={{span:12, order:2}} md={{span:6, order:1}} lg={{span:4, order:1}}>
                <div className="links-wrapper">
                  <img src={ require('./assets/img/me.png').default } alt="Smiling Asian man with cap sitting in a chair, in black and white." className="bio-image" />
                  <div className="links-block">

                    <div style={{display: "flex"}}>
                      <div className="icon-wrapper"><span className="bio-icon"><FontAwesomeIcon icon={faEnvelope} /></span></div>
                      <div>kjfeng[AT]uw[DOT]edu</div>
                    </div>
                    <div style={{display: "flex"}}>
                      <div className="icon-wrapper"><span className="bio-icon"><FontAwesomeIcon icon={faFile} /></span></div>
                      <div><a href={ require("./assets/files/cv.pdf").default }>CV (PDF)</a></div>
                    </div>
                    <div style={{display: "flex"}}>
                      <div className="icon-wrapper"><span className="bio-icon"><FontAwesomeIcon icon={faGraduationCap} /></span></div>
                      <div><a href="https://scholar.google.com/citations?user=CNrJuz8AAAAJ&hl=en">Google Scholar</a></div>
                    </div>
                    <div style={{display: "flex"}}>
                      <div className="icon-wrapper"><span className="bio-icon"><FontAwesomeIcon icon={faTwitter} /></span></div>
                      <div><a href="https://twitter.com/kjfeng_">@kjfeng_</a></div>
                    </div>
                    <div style={{display: "flex"}}>
                      <div className="icon-wrapper"><span className="bio-icon"><FontAwesomeIcon icon={faMastodon} /></span></div>
                      <div><a href="https://hci.social/@kjfeng">@kjfeng@hci.social</a></div>
                    </div>
                    
                  </div>
                  
                </div>

              </Col>

              <Col xs={{span:12, order:1}} md={{span:6, order:2}} lg={{span:8, order:2}} className="bio-wrapper">
                <p>I'm a fourth-year PhD student in the <a href="https://www.hcde.washington.edu/">Human Centered Design & Engineering</a> department at the University of Washington, fortunate to be co-advised by <a href='https://www.hcde.washington.edu/mcdonald'>David W. McDonald</a> (HCDE) and <a href='https://homes.cs.washington.edu/~axz/'>Amy X. Zhang</a> (CSE). My interests are in social computing and human-AI interaction. I draw from methods in human-centered design to create new processes and interactive tools for driving the sociotechnical advancement of AI, particularly frontier AI systems. I'm especially interested in engaging stakeholders whose expertise has traditionally been excluded from AI development; this includes user experience designers, attorneys, and mental health clinicians. My work is supported by an <a href="https://openai.com/index/democratic-inputs-to-ai/">OpenAI Democratic Inputs to AI</a> grant (2023) and a <a href="https://new.expo.uw.edu/expo/scholarships/herbold">UW Herbold Fellowship</a> (2022).</p>

                <p>Previously, I interned with the <a href="https://www.semanticscholar.org/">Semantic Scholar</a> team at the <a href="https://allenai.org/">Allen Institute for AI</a> (Ai2), working on interactive interfaces for AI agents, and with the <a href="https://www.microsoft.com/en-us/research/theme/fate/">FATE group</a> at Microsoft Research, building design tools to support designers in improving AI-powered user experiences. Before coming to UW, I graduated from Princeton University with a B.S.E. in Computer Science and a minor in Visual Arts, where I was advised by <a href="https://www.cs.princeton.edu/~arvindn/">Arvind Narayanan</a> in <a href="https://citp.princeton.edu/">Princeton CITP</a>. </p>
              </Col>
            </Row>

              <div className="nav-wrapper" id="nav">
                <NavLink to="/" exact={true} className="navigator">Highlights</NavLink>
                <NavLink to="/publications" className="navigator">Publications</NavLink>
                <NavLink to="/projects" className="navigator">Projects</NavLink>
                <NavLink to="/misc" className="navigator">Misc</NavLink>
              </div>

              <Route exact path="/" component={Highlights}/>
              <Route path="/publications" component={Publications}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/misc" component={Misc}/>


            </Col>

        </div>
      </Switch>

      <Scroller />

    </HashRouter>
  );
}

export default App;
