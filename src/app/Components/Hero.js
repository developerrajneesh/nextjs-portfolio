import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Hero() {
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
                href="https://github.com/developerrajneesh/"
              >
                {" "}
                <div className="circle-link">
                  <FaGithub  color="black" size={30} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rajneesh-shukla-638a96125/"
              >
                {" "}
                <div className="circle-link">
                  <FaLinkedin  color="#32359c" size={30} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/developer.rajneesh/?igsh=MWkyZzFnN2hsNWxhYg%3D%3D"
              >
                {" "}
                <div className="circle-link">
                  <GrInstagram color="#782c6f" size={30} />
                </div>
              </a>
              <a
                target="_blank"
                href="mailto:developer.rajneeshshukla@gmail.com"
              >
                {" "}
                <div className="circle-link">
                  <FiMail color="#8c161c" size={30} />
                </div>
              </a>
              <a target="_blank" href="https://wa.me/9161422065">
                {" "}
                <div className="circle-link">
                  <FaWhatsapp color="#1e5730" size={30} />
                </div>
              </a>
              <a target="_blank" href="tel:+9161422065">
                <div className="circle-link">
                  <FaPhone color="#38538f" size={30} />
                </div>
              </a>
            </div>
            <div className="d-flex justify-content-between position-relative hire-btn-group gap-3 mt-5">
              <button className="text-center mt-4  hireme-btn">HIRE ME</button>
              <button className="text-center mt-4  hireme-btn">MY WORKS</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex d-none d-md-flex justify-content-center align-items-center ">
          {/* <img  className="img-fluid"  src={'/my_img.png'} alt="HeroImg img-fluid" /> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
