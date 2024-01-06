"use client";
import React, { useEffect, useState } from "react";
import AnimationOnScroll from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import axios from "axios";
import { serverUrl } from "../Source";

function Skills() {


  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          serverUrl+"/api/v1/admin/get-skill"
        );
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

console.log(skills);
  return (
    <>
      <div
        className="py-5 text-light"
        style={{ background: "rgb(64, 83, 83)" }}
      >
        <h3 className="text-center pb-5 heading-for-component">Skills</h3>
        <p className="text-center mx-4">
          Dynamic and accomplished professional with a diverse skill set.
          Resourceful <br />
          problem solver, committed to driving efficiency and delivering
          exceptional results in various projects
        </p>

        <div className="skills-wrapper p-3">
        {skills.map((item, index) => (
       <AnimationOnScroll
       initiallyVisible={false}
       duration={0.4}
       animateIn="animate__fadeInUp"
       offset={50}
       delay={(index+1) * 90}
     >
          <div
            style={{ backgroundColor: item.backgroundColor }}
            className="label-tag text-dark"
          >
            {item.skill}
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
