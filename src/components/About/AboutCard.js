import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings. I am <span className="teal"> Yanna  </span>
            from <span className="teal"> Bangalore, Somalia.</span>
         
            
          </p>
          <ul>
            <li className="about-activity">
             
            </li>
            <li className="about-activity">
             
            </li>
            <li className="about-activity">
              <ImPointRight /> TISBHacks
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."{" "}
          </p>
          <footer className="blockquote-footer">Marie Curie</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
