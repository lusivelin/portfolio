import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const PersonalWebsite = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="hero">
          <h1>John Doe</h1>
          <h2>Frontend Developer</h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <div className="section">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with expertise in HTML, CSS,
            and JavaScript. I love creating beautiful and user-friendly
            interfaces that enhance the user experience.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1}>
        <div className="section">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default PersonalWebsite;
