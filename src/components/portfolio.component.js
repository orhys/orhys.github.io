import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Emoji from "react-emoji-render";

export default class PortFolio extends Component {
  render() {
    return (
      <Container fluid="sm">
        <div>
          <h3>orhys brown</h3>
          <Emoji
            text="I am a Full Stack Web Developer :man::skin-tone-5:&#8205;:laptop: based in New York City :statue_of_liberty:. I am passionate about creating beautiful
        web experiences with an eye :eyes: for precise minimalist design and the sensitivity to create compelling user interaction. At the age of 14 I began
        creating webpages in Microsoft FrontPage :page_with_curl: circa 1999, needless to say, I have been doing this for a long time."
          />
        </div>

        <div>
          <h3>skills</h3>
          <Emoji
            text="I don't know it all :person_shrugging::skin-tone-5: but with aspiration and determination, there is nothing I cannot accomplish.
            My frontend and backend knowledge includes HTML, CSS, JavaScript, and Node.js. I use a variety of Frontend Frameworks,
            Angular JQUERY, REACT, and Vue. On the backend, I use Frameworks, ASP.NET, Babel and Express, GraphQL, and Webpack.
            To complete a stack I use MySQL, MongoDB, and Firebase databases."
          />
        </div>

        <div>
          <h3>portfolio</h3>
          <Emoji text="Babler: FERN Stack application, a twitter clone. Styled in Bootstrap and utilizes JWT User Authentication." />
          <br />
          <Emoji text="ExcerTrack: MERN Stack application, a daily exercise log book. Styled in Bootstrap." />
          <br />
          <Emoji text="PARKSpot: FERN Stack appliation, used to reserve parking spots. Styled in Bootstrap" />
          <br />
          <Emoji text="Memories: MERN Stack application, a facebook clone, Styled in Bootstrap" />
        </div>
        <h3>contact</h3>
        <Emoji text="Email :email: " />
        <a href="mailto:o@orhys.com">o@orhys.com</a>
        <br />
        <Emoji text="Resume :link: " />
        <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:dfcdf35c-1c7f-48d0-8429-ea32465678cc">
          orhys-brown-resume.pdf
        </a>
        <br />
        <Emoji text="Linked:up: " />
        <a href="https://linkedin.com/in/orhys">linkedin.com/in/orhys</a>
        <br />
        <Emoji text="GitHub: " />
        <a href="https://github.com/orhys">github.com/orhys</a>
      </Container>
    );
  }
}
