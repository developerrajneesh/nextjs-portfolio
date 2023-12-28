import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="  pt-1" style={{ background: "#212529", color: "white" }}>
     <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
              <a
                target="_blank"
                href="https://github.com/developerrajneesh/"
              >
                {" "}
                <div className="circle-link-1">
                  <FaGithub  color="black" size={20} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rajneesh-shukla-638a96125/"
              >
                {" "}
                <div className="circle-link-1">
                  <FaLinkedin  color="#32359c" size={20} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/developer.rajneesh/?igsh=MWkyZzFnN2hsNWxhYg%3D%3D"
              >
                {" "}
                <div className="circle-link-1">
                  <GrInstagram color="#782c6f" size={20} />
                </div>
              </a>
              <a
                target="_blank"
                href="mailto:developer.rajneeshshukla@gmail.com"
              >
                {" "}
                <div className="circle-link-1">
                  <FiMail color="#8c161c" size={20} />
                </div>
              </a>
              <a target="_blank" href="https://wa.me/9161422065">
                {" "}
                <div className="circle-link-1">
                  <FaWhatsapp color="#1e5720" size={20} />
                </div>
              </a>
              <a target="_blank" href="tel:+9161422065">
                <div className="circle-link-1">
                  <FaPhone color="#38538f" size={20} />
                </div>
              </a>
            </div>
      <hr className="m-0 mx-4 mt-4" />

      <div className="text-center p-2 bg-drk">
        Copyright ©2023 All rights reserved | Designed by Developer Rajneesh
      </div>
    </div>
  );
}

export default Footer;
