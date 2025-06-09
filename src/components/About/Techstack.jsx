import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPostgresql,
  DiDocker,
  DiAws,
} from "react-icons/di";
import {
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiRedis,
  SiMysql,
} from "react-icons/si";

const techIcons = [
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <DiPostgresql />, name: "PostgreSQL" },
  { icon: <DiDocker />, name: "Docker" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <DiAws />, name: "AWS" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map(({ icon, name }, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${name}`}>{name}</Tooltip>}
          >
            <span>{icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
