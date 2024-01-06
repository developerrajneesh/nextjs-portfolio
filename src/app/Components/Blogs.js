"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";
import { serverUrl } from "../Source";
function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(serverUrl + "/api/v1/admin/get-blog");
        setBlogs(response.data);
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
  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return (
    <div className="py-5 text-light" style={{ background: "rgb(64, 83, 83)" }}>
      <div className="container-xxl">
        <h3 className=" text-center pb-5 heading-for-component">Blogs</h3>
        <p className="text-center mx-4">
          Innovating the future, one idea at a time. Empowering change through{" "}
          <br />
          creativity. Transforming possibilities into reality. Together, we
          build a better tomorrow.
        </p>

        <Slider {...settings1}>
          {blogs.map((item, index) => (
            <div key={index} className="p-0 p-md-4">
              <AnimationOnScroll
                initiallyVisible={false}
                duration={0.4}
                animateIn="animate__fadeInUp"
                offset={50}
                delay={(index + 1) * 200}
              >
                <div className="custom-card custom-card-blog">
                  <img
                    src={`${serverUrl}/${item.img}`}
                    className="img-blog"
                    alt="img-blog"
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="my-3 blog-title">{item.author}</p>
                    <p className="my-3">{formatDate(item.createdAt)}</p>
                  </div>
                  <h3 className=" blog-title">{`${item.title}`}</h3>{" "}
                  <div
                    className="text-blog"
                    style={{ color: "white" }}
                    dangerouslySetInnerHTML={{ __html: item.contant }}
                  ></div>
                </div>
              </AnimationOnScroll>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Blogs;
