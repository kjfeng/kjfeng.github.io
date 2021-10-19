import React, { useEffect } from 'react';
import '../main.css';
import AuthorPile from './AuthorPile';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faCode, faWindowRestore, faPlay, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';


export function ARBlockbot() {
  useEffect(() => {
    if (sessionStorage.getItem("onDetailsPage") === "0") {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      sessionStorage.setItem("onDetailsPage", 1);
    }
  }, []);

  return (
    <div className="page-template col-sm-12 col-md-10 col-lg-9">
      <Helmet title={"ARBlockbot | Kevin Feng"} />

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
