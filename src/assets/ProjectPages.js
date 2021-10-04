import React from 'react';
import '../main.css';
import AuthorPile from './AuthorPile';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

export function AdOculos() {
  let props = {
    "paper": require("./files/pton-thesis.pdf").default,
    "slides": require("./files/pton-thesis-slides.pdf").default,
    "video": "https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663",
  }

  return (
    <div className="page-template col-sm-12 col-md-10 col-lg-9">
      <h2>AdOculos</h2>
      <AuthorPile authors={[
          ["K. J. Kevin Feng", require('./img/people/kjfeng.png')],
          ["Arunesh Mathur", require('./img/people/arunesh.png')],
          ["Arvind Narayanan", require('./img/people/arvind.png')]
        ]}/>
      <p className="venue-page">Princeton CS senior thesis</p>

      <h3>Abstract</h3>
      <p style={{width: "100%"}}>Web advertisements are essential to the day-to-day operations on the internet by providing a key channel of revenue to websites that offer content at little to no cost. However, they are also common sources of deception, scams, and privacy violations. Given their significance, ads are of interest to many different groups of experts, including web researchers, communications scholars, and regulators, but their fleeting nature makes them difficult to study systematically and at scale. This thesis presents AdOculos, a technical system comprising a search interface powered by automated visual analysis tools and a continuously updated, large-scale archive of ads crawled from thousands of popular websites. By using the system to uncover novel research questions, dimensions of analysis, and policy recommendations, I demonstrate how AdOculos and its underlying tools enable expanded possibilities in ad research.</p>

      <h3>Details</h3>
      <Details
        paper={ require("./files/pton-thesis.pdf").default }
        slides={ require("./files/pton-thesis-slides.pdf").default }
        video="https://mediacentral.princeton.edu/media/Lowering+the+Barrier+for+Web+Advertisement+Research+at+Scale%2C+Kai+Ji+%28Kevin%29+Feng%2C+UG+%2721+%282310672%29/1_zbbnuep9/210652663"
      />

    </div>
  );
}

export function WhatsappMisinfo() {
  return (
    <div className="page-template col-sm-12 col-md-10 col-lg-9">
      <h2>Investigating How Users in the United States Encounter and Deal With Misinformation on WhatsApp During COVID-19</h2>
      <AuthorPile authors={[
          ["Oishee Chakrabarti*", require('./img/people/oishee.png')],
          ["K. J. Kevin Feng*", require('./img/people/kjfeng.png')],
          ["Kejing Li*", require('./img/people/mirror.png')],
          ["Kevin Song*", require('./img/people/kevin-song.png')],
          ["Marshini Chetty", require('./img/people/marshini.png')]
        ]}/>
      <p>* denotes equal contribution</p>
      <p className="venue-page">In submission</p>

      <h3>Abstract</h3>
      <p>Coming soon!</p>

      <h3>Details</h3>
      <p>Coming soon!</p>

    </div>
  );
}

export function ARBlockbot() {
  return (
    <div className="page-template col-sm-12 col-md-10 col-lg-9">
      <h2>ARBlockbot</h2>
        <AuthorPile authors={[
            ["K. J. Kevin Feng*", require('./img/people/kjfeng.png')],
            ["Daniel Martin*", require('./img/people/daniel.png')],
            ["Anne Liu", require('./img/people/anne.png')],
            ["Anjali Thatte", require('./img/people/anjali.png')]
          ]}/>
        <p>* denotes equal contribution</p>
        <p className="venue-page">NUS Computing Innovation & Research Showcase 2020</p>

      <h3>Abstract</h3>
      <p>We present ARBlockbot, an educational robotics and programming app for Android and iOS phones + tablets, geared towards primary and middle school students. Robotics education often requires heavy reliance on hardware, which can pose challenges to schools without necessary funding or storage space, or students who live further away from school. Furthermore, hardware setup and debugging is often strenuous, making rapid prototyping difficult. ARBlockbot eliminates the need for a physical robot or any hardware equipment and allows the virtual robot, which can be programmed using coding blocks, to interact with real-world objects and surfaces without the aid of AR markers.</p>

      <h3>Demos</h3>
      <p>To see the robot programmed to move in a straight line and then fall off the edge of a surface, check out <a href="https://player.vimeo.com/video/427620719">this video</a>.</p>
      <p>To see the robot programmed to move in a circle, check out <a href="https://player.vimeo.com/video/427620719">this video</a>.</p>
      <p>To see the robot programmed to move in a looping discorectangle, check out <a href="https://player.vimeo.com/video/444809523">this video</a>.</p>


      <h3>Details</h3>
        <Details
          poster={ require("./files/arblockbot-poster.pdf").default }
        />

    </div>
  );
}


// let content = (
//   <div>
//     <p>This is content for thesis.</p>
//     <p>And here's more content.</p>
//   </div>
//
// );
//
// let info = {
//   "title": "Lowering the Barrier for Webs Advertisement Research at Scale",
//   "description": content
// }
//
// export {info};
