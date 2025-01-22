import React, { useEffect } from 'react';
import './main.css';
import { Project } from './assets/HelperComponents'


function Projects() {
  useEffect(() => {
    sessionStorage.setItem("onDetailsPage", 0);
  }, []);
  return (

    <div>
      <h5>Research</h5>
      <Project
        name="Cocoa for Human-Agent Collaboration"
        urlext="cocoa"
        year="2025"
      />
      <Project
        name="Policy Prototyping for LLMs"
        urlext="policy-prototyping-llms"
        year="2024"
      />
      <Project
        name="Responsible AI-Generated Legal Advice"
        urlext="ai-am-not-a-lawyer"
        year="2024"
      />
      <Project
        name="Designerly Adaptation of LLMs"
        urlext="canvil"
        year="2024"
      />
      <Project
        name="Teachable Social Media Feed Experiences"
        urlext="teachable-feed-experiences"
        year="2024"
      />
      <Project
        name="Case-Based Reasoning for AI Alignment"
        urlext="case-repositories"
        year="2023"
      />
      <Project
        name="Provenance on Social Media"
        urlext="provenance-social-media"
        year="2023"
      />
      <Project
        name="Communicating AI as a UX Design Material"
        urlext="ai-ux-communication"
        year="2023"
      />
      <Project
        name="Understanding UX Collaboration"
        urlext="ux-collaboration"
        year="2023"
      />
       <Project
        name="Interactive Machine Learning in UX Practice"
        urlext="ux-iml"
        year="2023"
      />
      <Project
        name="Shaped Word Clouds"
        urlext="shaped-wordclouds"
        year="2022"
      />
      <Project
        name="From Handoffs to Co-Creation"
        urlext="handoffs-cocreation"
        year="2022"
      />
      <Project
        name="Counterfactual Explanations in Everyday Recommendations"
        urlext="counterfactuals"
        year="2022"
      />
      <Project
        name="COVID-19 Misinformation on WhatsApp"
        urlext="whatsapp-misinfo"
        year="2022"
      />
      <Project
        name="AdOculos"
        urlext="adoculos"
        year="2021"
      />
      <Project
        name="iRadiate3D"
        weblink="https://cutecenter.nus.edu.sg/projects/iradiate-3d.html"
        year="2020"
      />

    <br/>

      <div style={{marginBottom: "0.5rem"}}>
        <span style={{fontSize: "24px"}}>Everything Else</span> 
        <span style={{color: "#888", fontStyle: "italic"}}> (graphic design, fun code, academic course projects, and more.)</span>
      </div>
      
      <Project
        name="I-n-t-e-r"
        weblink="https://i-n-t-e-r.github.io/"
        year="2021"
      />
      <Project
        name="Sans Times Sans"
        urlext="sans-times-sans"
        year="2021"
      />
      <Project
        name="ARBlockBot"
        urlext="arblockbot"
        year="2020"
      />
      <Project
        name="Various graphic design projects"
        urlext="graphic-design"
        year="2018 – 2020"
      />
      <Project
        name="Rehack"
        urlext="rehack"
        year="2019"
      />
      <Project
        name="Audioscape"
        urlext="audioscape"
        year="2019"
      />
      <Project
        name="Social Login Visualizer"
        weblink="https://egr277.github.io/social-login-visualizer/"
        year="2019"
      />

      {/* <br/>
      <div>
        <img src={ require('./assets/img/construction.gif').default } style={{maxWidth: 500}} alt={""}/>
      </div> */}

    </div>





  );
}

export default Projects;
