import React from "react";
import LettersWave from "../components/letters-wave/LettersWave";
import Block from "../impress/block/Block";
import Step from "../impress/step";

const About = ({ startX = -4000, startY = 0 }) => (
  <Block id="about">
    <Step id="about-title" x={startX} y={startY} scale={0.04}>
      <h1>
        <LettersWave text="Reactivity in JS" />
      </h1>
    </Step>
  </Block>
);

export default About;
