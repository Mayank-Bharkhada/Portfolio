import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import destinova from "../../Assets/Projects/destinova.png";
import hseuav from "../../Assets/Projects/hseuav.png";
import whereness from "../../Assets/Projects/whereness.png";
import coolriots from "../../Assets/Projects/coolriots.png";
import voiceping from "../../Assets/Projects/voiceping.png";
import myeasydrop from "../../Assets/Projects/myeasydrop.png";
import driftsense from "../../Assets/Projects/driftsense.png";
import minta from "../../Assets/Projects/minta.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whereness}
              title="Whereness"
              description="Whereness is a platform for creating and sharing immersive 360° and 2D virtual environments, used in architecture, education, culture, and virtual exhibitions."
              demoLink="https://hello.whereness.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coolriots}
              title="CoolRiot AI"
              description="CoolRiot AI is a platform for building AI-powered websites and 3D communication apps with multi-channel support (voice, WhatsApp, Facebook). I built fast, dynamic sites using Next.js and Opcode, optimizing performance and smart customer engagement."
              demoLink="https://coolriots.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voiceping}
              isBlog={false}
              title="Voice-ping"
              description="Voice-ping breaks language barriers in real-time meetings by instantly translating 45 languages, including tech terms. It offers all-in-one tools like a text editor and whiteboard, integrates with Zoom and Teams, and lets you share a QR code for multi-language events—no app needed. Unite global teams easily with unlimited meetings, file sharing, and productivity features."
              demoLink="https://voice-ping.com/en"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destinova}
              isBlog={false}
              title="Destinovaailabs"
              description="Developed an AI chatbot that enhances customer engagement with real-time, personalized conversations using natural language understanding and integrates with CRM systems to improve support accuracy and reduce ticket volume."
              demoLink=" https://aibot.destinovaailabs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myeasydrop}
              isBlog={false}
              title="Myeasydrop"
              description="Porter-style luggage delivery app (mobile & web) with real-time tracking, booking, delivery updates, and smooth, intuitive UI backed by efficient backend integration."
              demoLink="https://www.myeasydrop.ca/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hseuav}
              isBlog={false}
              title="HSE-UAV Shopify Store"
              description="Developed a fully customized Shopify e-commerce store for HSE-UAV, focused on precision agriculture drone solutions. The project involved creating responsive, high-performance storefronts and customizing Shopify Liquid templates to meet unique business requirements."
              demoLink="https://hse-uav.myshopify.com/"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driftsense}
              isBlog={false}
              title="DriftSense"
              description="Drift Sense is a platform for real-time environmental monitoring, analyzing data with advanced sensors for agriculture, forestry, and urban planning. Features include real-time visualization, automated alerts, and predictive analytics."
              demoLink="https://drift-sense.com/"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minta}
              isBlog={false}
              title="Minta"
              description="Minta is an AI-powered platform that automates video marketing and social media content creation. It integrates with Shopify, Facebook, Instagram, TikTok, and Pinterest, offering real-time analytics, AI-generated captions, and editing tools like filters, stickers, and text overlays to boost engagement and efficiency."
              demoLink="https://www.minta.ai/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
