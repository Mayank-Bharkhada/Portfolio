import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGithub,
  SiJira,
  SiBitbucket,
  SiGitlab,
  SiClickup,
  SiAsana,
  SiNpm,
  SiYarn,
  SiMicrosoftteams,
  SiNotion,
} from "react-icons/si";

// List all tools in order of priority (most used/important first)
const tools = [
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiGitlab />, name: "GitLab" },
  { icon: <SiNpm />, name: "NPM" },
  { icon: <SiYarn />, name: "Yarn" },
  { icon: <SiBitbucket />, name: "Bitbucket" },
  { icon: <SiJira />, name: "Jira" },
  { icon: <SiClickup />, name: "ClickUp" },
  { icon: <SiAsana />, name: "Asana" },
  { icon: <SiNotion />, name: "Notion" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiMicrosoftteams />, name: "Microsoft Teams" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${tool.name}`}>{tool.name}</Tooltip>}
          >
            <span>{tool.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
