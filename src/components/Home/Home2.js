import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Gedi.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="teal"> I? </span>

            </h1>

          
          
        
            <p className="home-about-body">
            
            Senior Web Developer specializing in front end development. 
             Experienced with all stages of the development cycle for dynamic Web projects.
              <br />
              <br />Programming Languages: 
              <i>
                <b className="purple"> Java-Script, Node.js, PHP, OOPS, SQL,MySQL 
                 Frameworks: Vue.js React.js Angular.js </b>
              </i>
              <br />
              <br />
              Proficient in Adobe Creative suite (Photoshop, illustrator) for  web design and graphic editing
 
              <i>
               
                <p>
                Strong Background: in project Management and Creative Design.
                </p>
                 <a href="https://www.linkedin.com/in/Ayanna-Gedi-29a228265/details/honors/"><b className="teal">
                 </b></a> 
              </i>
              <br />
              <br />
              I 'M also interested <b className="teal"> Games </b> and
                 <b className="teal"> listening. </b>
              {/*and
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
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
            <h1>Connect with me</h1>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/InaGedi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Ayanna-Gedi-29a228265/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:dhruv@thegeekly.net"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
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
