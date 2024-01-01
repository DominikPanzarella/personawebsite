import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I'm <span className="purple">Dominik Panzarella</span>, a passionate Computer Science student at SUPSI, where I delve into the fascinating world of <span className="purple">algorithms and data structures</span>.
            <br /> With a fervor for problem-solving, I find joy in tackling coding challenges that push the boundaries of my understanding.
            <br />My journey in the realm of technology is driven by a curiosity to unravel the intricacies of computing, and I'm excited to share my experiences and insights on this ever-evolving adventure. 
            <br />Join me as I navigate through the world of code, seeking innovative solutions and embracing the thrill of continuous learning.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
