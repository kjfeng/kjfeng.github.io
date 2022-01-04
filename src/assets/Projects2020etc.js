import React from 'react';
import '../main.css';
import { DetailsPage, AuthorPile, autoScroll, Figure, VimeoEmbed } from './HelperComponents';
import Details from './Details';
import * as dataObjects from './dataObjects.js';
import { Helmet } from 'react-helmet';
import { Carousel } from 'react-bootstrap';


export function ARBlockbot() {
  autoScroll();

  return (
    <DetailsPage>
      <Helmet title={"ARBlockbot | Kevin Feng"} />

      <h2>ARBlockbot</h2>
        <AuthorPile authors={dataObjects.ARBlockbotObj.authors}/>
        <p>* denotes equal contribution</p>
        <p className="venue-page">{dataObjects.ARBlockbotObj.venue}</p>

        <Figure path="./img/arbb-cover.png" alt="Two phones side by side showing the ARBlockbot app interface. The left shows an AR robot on a real-world surface and the right shows the block programming menu." />

        <h3>Abstract</h3>
        <p>We present ARBlockbot, an educational robotics and programming app for Android and iOS phones + tablets, geared towards primary and middle school students. Robotics education often requires heavy reliance on hardware, which can pose challenges to schools without necessary funding or storage space, or students who live further away from school. Furthermore, hardware setup and debugging is often strenuous, making rapid prototyping difficult. ARBlockbot eliminates the need for a physical robot or any hardware equipment and allows the virtual robot, which can be programmed using coding blocks, to interact with real-world objects and surfaces without the aid of AR markers.</p>

        <h3>Demos</h3>
        <p>To see the robot programmed to move in a straight line and then fall off the edge of a surface, check out <a href="https://player.vimeo.com/video/427620719">this video</a>.</p>
        <p>To see the robot programmed to move in a circle, check out <a href="https://player.vimeo.com/video/427620719">this video</a>.</p>
        <p>To see the robot programmed to move in a looping discorectangle, check out <a href="https://player.vimeo.com/video/444809523">this video</a>.</p>


        <h3>Details</h3>
        <Details{...dataObjects.ARBlockbotObj}/>

    </DetailsPage>
  );
}

export function Rehack() {
  autoScroll();

  return (
    <DetailsPage>
      <Helmet title={"Rehack | Kevin Feng"} />

      <h2>Rehack</h2>
      <p className="venue-page">The inaugural student reverse hackathon</p>

      <Figure path="./img/rehack-cover.png" alt="Banner with a white background and isometric graphics of people conversing around the blue-and-teal gradient Rehack logo." />

      <h3>Introduction</h3>
      <p>I went a few hackathons early on in college and had lots of fun. However, I noticed the following issues with the conventional hackathon model, which I've grouped into 3 main areas:
      </p>

      <p><strong>Lack of interdisciplinary collaboration: </strong>it's not surprising that hackathon attendance is typically dominated by computer science and other technical STEM majors, but the main problem lies in the high barrier of active participation by non-technical students. Since the final product is almost always comprised of code, successful projects are built with heavy code contributions from (hopefuly) all team members. It then naturally follows that those with less technical skills have less capability to fully express their ideas at a hackathon. When I held workshops that took place soon after "hacking time" started, it was easy to see that less technically adept teams struggled to find a solid starting point, even with a fantastic idea, while other teams can just hit the ground running (some even come with pre-prepared code!). Real-world software is best developed through collaboration between diverse stakeholders, technical and non-technical, but that's certainly not what I saw at hackathons.</p>

      <p><strong>Health: </strong>hackathons are, for the most part, not the healthiest events. Hackers are sitting in front of the computer, moving very little, and coding most of the time. For overnight hackathons, staying up late into the night, or even not sleeping at all, to get as much work done on the project as possible is often glorified. It doesn’t help that frequent sponsors for snacks and drinks include Red Bull, Monster, and Awake (caffeine-packed chocolate), among others. Is there a healthier approach we can take that still incorporates a fun learning experience and engagement with technology?</p>

      <p><strong>Process: </strong>hackathons are intended to foster technological innovation. The highest-level, selective hackathons may consistently generate original and well-executed ideas. However, this is not always the case with other hackathons, especially collegiate ones. Many teams struggle to come up with a truly original idea, and/or cannot execute their novel idea due to time or technical constraints and end up copying other existing projects. While remaking something may be a good learning experience, the opportunity for innovation is lost. Additionally from my observations, few teams continue working on their project after a hackathon: so many hackers push hard to write lots of code, only to leave it untouched after the event. It just felt like kind of a pity.</p>

      <h3>A Reverse Hackathon</h3>
      <p>Rehack was born out of the desire bring together students with different backgrounds and experiences to develop creative solutions that would make modern consumer tech products more fair, humane, and socially responsible. Rehack's mission is to empower students to critially examine technology around them and articulate their thoughts by prototyping solutions to the problems they see. I got together a small team of 10, and after a year of hard work, productive conversations, and non-stop fundraising, we launched the first student reverse hackathon.</p>

      <p>There are countless components involved in making Rehack successful both as an organization and as an event, but I want to touch on a particular component that I focused on heavily since the very beginning: the visual identity.</p>

      <h3>Constructing Rehack's Visual Identity</h3>
      <p>I started by reflecting on the intent and goals behind Rehack and where exactly I wanted to take it. I experimented with logomarks, logotypes, and a combination of the two. I also played around with different graphical forms, particularly one of the brain because it embodies two of Rehack's main values (mindfulness and innovation) and is widely recognizable. I also tried to incorporate "reverse" meaningfully, as that was one of Rehack's unique points. The initial work was all done in black and white to make an isolated decision on form. Early efforts can be seen in the initial Illustrator planning document.</p>

      <Figure path="./img/rehack-0.png"/>

      <p>After finalizing the logo's form, I coloured it with a blue-teal gradient in an attempt to convey the mentality change Rehack hopes to establish in student tech events. Since gradients can be difficut to work with graphically, especially when superimposed on top of various backgrounds, I also created monochrome variants of the logo. From the colours of the logo, I derived the colour palette, using 3 colours (including the blue and teal) as primary colours and variations of those as the supplementary colours. I also established four monochrome shades that are handy for grayscale designs and typography.</p>

      <Figure path="./img/rehack-1.png"/>
      <Figure path="./img/rehack-2.png"/>
      <Figure path="./img/rehack-3.png" caption="The Rehack logo and its monochrome variations."/>

      <Figure path="./img/rehack-4.png"/>
      <Figure path="./img/rehack-5.png"/>
      <Figure path="./img/rehack-6.png" caption="Primary, supplementary, and monochrome colours."/>

      <p>For typography, I chose Nunito Sans to typeset the logo as well as to use in all paragraph and body texts. It's a precise geometric sans serif that I thought was lively and friendly but also nods to the logical, rational side of technology. It's also open source so it's accessible to future designers. For our titles and headings, I chose Montserrat, a wider sans serif typeface inspired by old posters and signs in the Montserrat, Buenos Aires. The boldness of the heavier weights packs good punch, while still giving off a benevolent vibe, making it ideal for posters and emphatic web UI. Like Nunito Sans, it is open source.</p>

      <Figure path="./img/rehack-7.png" caption="Nunito Sans sample."/>
      <Figure path="./img/rehack-8.png" caption="Montserrat sample."/>

      <p>With the basic visual identity established, I went on to broaden the graphical language. Since reverse hackathons are a fairly new concept, I decided to created a series of graphics to represent what Rehack was about. I found that isometry gave me a lot of room for scene setting and storytelling; the resulting isometric graphics were used widely in both our print and digital materials. I also put a light mesh of isoceles triangles as an atomic element that can sit in the background, supporting other graphics without demanding much attention itself. The mesh complements the isometric graphics; it provides order and assists with form, but does not constrain.</p>

      <Figure path="./img/rehack-10.png" caption="Isometric graphics."/>
      <Figure path="./img/rehack-cover.png" caption="Google forms header."/>
      <Figure path="./img/rehack-12.png" caption="Socia media banner."/>

      <h3>Execution</h3>
      <p>Below is the homepage of the Rehack website circa fall 2019. You can view the current website at <a href="https://rehack.co">https://rehack.co</a>.</p>

      <Figure path="./img/rehack-13.png"/>

      <p>For posters, the team and I decided to design them such that each poster could function by itself, but becomes more powerful in the presence of other Rehack posters. Unfortunately, we didn't get to print them out on full-bleed printers to save money for other event expenses, but they still made a splash around campus.</p>
      <Figure path="./img/rehack-14.png"/>
      <Figure path="./img/rehack-15.png" width="50%"/>

      <p>We also designed cardstock handbooks for participants as well as name tags, pens, totes, stickers, and more!</p>

      <Figure path="./img/rehack-16.png"/>
      <Figure path="./img/rehack-17.jpg"/>
      <Figure path="./img/rehack-18.png"/>
      <Figure path="./img/rehack-19.jpg" caption="Organizer shirts. Participant shirts were white with blue text."/>
      <Figure path="./img/rehack-20.jpg"/>
      <Figure path="./img/rehack-21.jpg"/>
      <Figure path="./img/rehack-22.jpg"/>
      <Figure path="./img/rehack-team.jpg" caption="The fantastic team 🚀"/>


    </DetailsPage>
  );
}

export function GraphicDesign() {
  autoScroll();
  return (
    <DetailsPage>
      <Helmet title={"Graphic Design | Kevin Feng"} />

      <h2>Various Graphic Design Projects</h2>

        <p className="venue-page">2018 – 2020</p>

        <h3>Experimental Chinese Pinyin Keyboard (2020)</h3>
        <p>When typing Pinyin for Chinese character input, the probability for typing a subsequent letter changes dramatically based on the previous letter(s) typed. Using this observation, I prototyped an experimental iOS Pinyin keyboard that dynamically changes the sizes of keys based on the probability of them being typed. </p>

        <VimeoEmbed vimeoLink="https://player.vimeo.com/video/662198279" />

        <h3>cardi-o (2019)</h3>
        <p>A personal time interface for the Apple Watch that uses only heartbeat to keep track of "time". </p>

        <VimeoEmbed vimeoLink="https://player.vimeo.com/video/662196989" />


        <h3>Princeton University Band Album Cover (2019)</h3>
        <p>Every 4 years, the Princeton University Band releases an album. 2019 was the 100th anniversary of the band, and I got the chance to design the cover of commemorative album with another fellow band member. </p>

        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/album-0.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/album-1.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/album-2.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/album-3.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/album-4.jpg").default } alt={""}
            />
          </Carousel.Item>

        </Carousel>
        <br/>



        <h3>Interstellar Plaque (2019)</h3>
        <p>Redesigning the <a href="https://solarsystem.nasa.gov/resources/706/pioneer-plaque/">Pioneer 10 and 11 plaque</a> for expressive extraterrestrial communication. The final product was laser printed on acrylic.</p>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/plaque-0.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/plaque-1.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/plaque-2.jpg").default } alt={""}
            />
          </Carousel.Item>

        </Carousel>
        <br/>

        <h3>Materialize (2018)</h3>
        <p>Reverse engineering Google's material design into a physical form and exposing some special effects that may not be digitally "natural". Pieces of acrylic were laser cut, assembled alongside cardstock, and captured with a DSLR using natural lighting conditions. Some were directly photographed while others were first projected and then photographed. </p>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-0.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-1.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-2.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-3.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-4.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-5.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-6.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-7.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-8.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-9.jpg").default } alt={""}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ require("./img/materialize-10.jpg").default } alt={""}
            />
          </Carousel.Item>

        </Carousel>
        <br/>



    </DetailsPage>
  );
}
