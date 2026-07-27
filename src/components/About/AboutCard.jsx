import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I&apos;m <span className="purple">Mayank Bharkhada</span> from{" "}
            <span className="purple">Gujarat, India</span>.<br /><br />
            <strong>🏡</strong> Giriraj Nagar-2, Keshod, Junagadh, Gujarat – 362220<br />
            <strong>📍</strong> Swastik Society, Navrangpura, Ahmedabad, Gujarat – 380009
            <br /><br />
            I&apos;m a <strong className="purple">Full-Stack Developer</strong> experienced in building scalable web and mobile applications using{" "}
            <strong className="purple">MERN, Next.js, NestJS, and React Native</strong>. Skilled in system design, clean architecture, and SOLID principles, with experience in{" "}
            <strong className="purple">PostgreSQL, MySQL, MongoDB, Supabase</strong>, and AI/LLM integrations using the{" "}
            <strong className="purple">LangChain ecosystem</strong>.
            <br /><br />
            Outside of development, I love to:
          </p>
          <ul>
            {[
              "Read books and tech articles",
              "Explore AI tools and emerging technologies",
              "Join hackathons and developer events",
              "Share knowledge through tech blogs",
              "Delve into Mathematics and Physics",
            ].map((activity, idx) => (
              <li className="about-activity" key={idx}>
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>
          <p style={{ color: "rgb(155 126 172)", marginTop: 15 }}>
            &quot;Programming is less about what you already know and more about your ability to solve problems and create solutions.&quot;
          </p>
          <footer className="blockquote-footer">Mayank Bharkhada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
