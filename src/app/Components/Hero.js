import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../Source";

function Hero({Ref5,Ref6}) {

  const [links, setSLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          serverUrl+ "/api/v1/admin/get-link"
        );
        setSLinks(response.data[response.data.length - 1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleScroll = async (sectionRef) => {
    // console.log();
    window.scrollTo({
      top: sectionRef.current.offsetTop - 57,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="row m-0 py-5 text-light"
        style={{ background: "rgb(64, 83, 83)", minHeight: "92vh" }}
      >
        <div className="col-12 col-md-12 d-flex justify-content-center align-items-center HeroImg">
          <div className="mt-5">
            <h4 className="text-center">Hello !</h4>

            <h3 className="heading-text-main">
              I'm <span className="my-name">Rajneesh Shukla</span>
              <div className="typewrter-text-main ps-5 mt-4">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full Stack Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Backend Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("MERN Stack Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("React JS Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Node JS Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Android Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                />
              </div>
            </h3>
            <div className="d-flex justify-content-between gap-2 mt-5">
              <a
                target="_blank"
                href={links.github}
              >
                {" "}
                <div className="circle-link">
                  <FaGithub  color="black" size={30} />
                </div>
              </a>
              <a
                target="_blank"
                href={links.linkedin}
              >
                {" "}
                <div className="circle-link">
                  <FaLinkedin  color="#32359c" size={30} />
                </div>
              </a>
              <a
                target="_blank"
                href={links.instagram}
              >
                {" "}
                <div className="circle-link">
                  <GrInstagram color="#782c6f" size={30} />
                </div>
              </a>
              <a
                target="_blank"
                href={links.email}
              >
                {" "}
                <div className="circle-link">
                  <FiMail color="#8c161c" size={30} />
                </div>
              </a>
              <a target="_blank" href={links.whatsapp}>
                {" "}
                <div className="circle-link">
                  <FaWhatsapp color="#1e5730" size={30} />
                </div>
              </a>
              <a target="_blank" href={links.phone}>
                <div className="circle-link">
                  <FaPhone color="#38538f" size={30} />
                </div>
              </a>
            </div>
            <div className="d-flex justify-content-between position-relative hire-btn-group gap-3 mt-5">
              <button onClick={()=>handleScroll(Ref6)} className="text-center mt-4  hireme-btn">HIRE ME</button>
              <button onClick={()=>handleScroll(Ref5)}  className="text-center mt-4  hireme-btn">MY WORKS</button>
            </div>
          </div>
        </div>
        <div  className="col-12 col-md-6 d-flex d-none d-md-flex justify-content-center align-items-center ">
          {/* <img  className="img-fluid"  src={'/my_img.png'} alt="HeroImg img-fluid" /> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
