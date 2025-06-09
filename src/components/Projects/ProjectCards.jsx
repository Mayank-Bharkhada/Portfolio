import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text-justify">
            {props.description}
          </Card.Text>
        </div>
        <div className="mt-3">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="w-100 mb-2 d-flex align-items-center justify-content-center"
            >
              <BsGithub className="me-2" />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="w-100 d-flex align-items-center justify-content-center"
            >
              <CgWebsite className="me-2" />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
