import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I'm a <b className="purple">Full-Stack Developer</b> with solid experience in web and mobile app development using{" "}
              <b className="purple">JavaScript, TypeScript, Node.js, React.js, and PHP</b>.
              <br />
              <br />
              I have expertise in{" "}
              <b className="purple">
                React Native, Express.js, Nest.js, Next.js, and the MERN stack
              </b>
              , building robust applications and REST APIs.
              <br />
              <br />
              Skilled in leveraging cloud platforms like{" "}
              <b className="purple">AWS</b> and <b className="purple">Firebase</b>, and proficient with both{" "}
              <b className="purple">SQL</b> and <b className="purple">NoSQL</b> databases.
              <br />
              <br />
              Known for strong problem-solving abilities and delivering maintainable, scalable code.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mayank-Bharkhada"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mayank-bharkhada-61b1a5257"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
