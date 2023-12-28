"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Services() {
  const servicesData = [
    "WEB DESIGN",
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "DIGITAL MARKETING",
    "DEV OPS",
    "SOFTWARE TESTING",
  ];

  return (
    <div
      className="text-white"
      style={{ background: "#212529", color: "white" }}
    >
      <div className="container">
        <h3 className="p-5 text-center">Services</h3>
        <p className="text-center mx-4">
          Leading the way with advanced IT solutions, we empower businesses to
          succeed in the digital era.
        </p>

        <div className="row m-0 py-5">
          {servicesData.map((service, index) => (
            <div key={index} className="col-12 col-lg-4">
              <AnimationOnScroll
                initiallyVisible={false}
                duration={0.4}
                animateIn="animate__fadeInUp"
                offset={50}
                delay={(index + 1) * 90}
              >
                <div className="services-card">{service}</div>
              </AnimationOnScroll>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
