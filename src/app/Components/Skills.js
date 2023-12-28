"use client";
import React, { useEffect, useState } from "react";
import AnimationOnScroll from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Skills() {
  const skillsData = [
    { name: "HTML", backgroundColor: "#b30000" },
    { name: "CSS", backgroundColor: "#039BE5" },
    { name: "Sass", backgroundColor: "#F06292" },
    { name: "JavaScript", backgroundColor: "#FFD600" },
    { name: "React", backgroundColor: "#80DEEA" },
    { name: "Redux", backgroundColor: "#8057C2" },
    { name: "Node.js", backgroundColor: "#77B65C" },
    { name: "EXPRESS JS", backgroundColor: "#d4cccb" },
    { name: "MongoDB", backgroundColor: "#4EA94B" },
    { name: "SQL", backgroundColor: "#f29011" },
    { name: "Git", backgroundColor: "#E84D31" },
    { name: "BOOTSTRAP", backgroundColor: "#563d7c" },
    { name: "MATERIAL UI", backgroundColor: "#11cdf2" },
    { name: "TYPE SCRIPT", backgroundColor: "#2F74C0" },
    { name: "ANGULAR", backgroundColor: "#BD002E" },
    { name: "VUE JS", backgroundColor: "#3FB27F" },
    { name: "NEXT JS", backgroundColor: "#45ce05" },
    { name: "REACT NATIVE", backgroundColor: "#61DBFB" },
  ];

  return (
    <>
      <div
        className="py-5 text-light"
        style={{ background: "rgb(64, 83, 83)" }}
      >
        <h3 className="text-center pb-5">Skills</h3>
        <p className="text-center mx-4">
          Dynamic and accomplished professional with a diverse skill set.
          Resourceful <br />
          problem solver, committed to driving efficiency and delivering
          exceptional results in various projects
        </p>

        <div className="skills-wrapper p-3">
        {skillsData.map((skill, index) => (
       <AnimationOnScroll
       initiallyVisible={false}
       duration={0.4}
       animateIn="animate__fadeInUp"
       offset={50}
       delay={(index+1) * 90}
     >
          <div
            style={{ backgroundColor: skill.backgroundColor }}
            className="label-tag text-dark"
          >
            {skill.name}
          </div>
        </AnimationOnScroll>
      ))}
        </div>
        {/* <div className="row m-0">
        <div className="col-12 col-md-6 mt-4">
          <h4>HTML</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>CSS</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>BOOTSTRAP</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>MATERIAL UI</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>TAILWIND</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>JAVA SCRIPT</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>TYPE SCRIPT</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>REACT JS</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>ANGULAR</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>NEXT JS</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>REACT NATIVE</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <h4>NODE JS</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <h4>EXPRESS JS</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <h4>MONGO DB</h4>
          <div className="progress">
            <div className="progress-bar color-1" style={{ width: "90%" }}>
              <span>90%</span>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default Skills;
