import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayank Bharkhada</span> {" "}
            from <span className="purple">Keshod, Gujarat, India.</span> {" "}
            I'm an enthusiastic and committed developer with a solid grasp of both frontend and backend technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming isn't about what you know; it's about what you can figure out"
          </p>
          <br />
          <footer className="blockquote-footer">Mayank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
