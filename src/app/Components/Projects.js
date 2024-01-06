"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";
import { serverUrl } from "../Source";

function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          serverUrl+"/api/v1/admin/get-project"
        );
        setProjectsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings1 = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 text-light" style={{ background: "rgb(64, 83, 83)" }}>
      <div className="container-xxl">
        <h3 className="text-center pb-5 heading-for-component">Projects</h3>
        <p className="text-center mx-4">
          Innovating the future, one idea at a time. Empowering change through{" "}
          <br />
          creativity. Transforming possibilities into reality. Together, we
          build a better tomorrow.
        </p>
        <Slider {...settings1}>
          {projectsData.map((slide, index) => (
            <div key={index} className="p-0 p-md-4">
              <AnimationOnScroll
                initiallyVisible={false}
                duration={0.4}
                animateIn="animate__fadeInUp"
                offset={50}
                delay={(index + 1) * 200}
              >
                <div className="custom-card">
                  <img
                    src={`http://localhost:5000/${slide.img}`}
                    className="img-blog"
                    alt=""
                  />
                  <h3 className="my-3">{slide.title}</h3>
                  <p>
                    {" "}
                    Technology :{" "}
                    <span style={{ color: "#b8e4f5" }}>{slide.technology}</span>
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
