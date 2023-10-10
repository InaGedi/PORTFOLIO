import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dashboard from "../../Assets/Projects/Dashboard.png";
import Weatherapp from "../../Assets/Projects/Weatherapp.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import banner from "../../Assets/Projects/banner.png";
import UIDesign from "../../Assets/Projects/UIDesign.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects, </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Dashboard"
              description=" "
              ghLink="https://github.com/InaGedi/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weatherapp}
              isBlog={false}
              title="Weatherapp"
              description=""
              ghLink="https://github.com/InaGedi/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="ecommerce"
              description="
              "
              ghLink="https://github.com/InaGedi/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banner}
              isBlog={true}
              title="banner"
              description=""
              ghLink="https://github.com/InaGedi/"
              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UIDesign}
              isBlog={false}
              title="UIDesign"
              description=""
              // ghLink="not needed here"
               
            />
          </Col> 

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
