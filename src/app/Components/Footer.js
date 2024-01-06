import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../Source";
function Footer() {

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
  return (
    <div className="  pt-1" style={{ background: "#212529", color: "white" }}>
     <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
              <a
                target="_blank"
                href={links.github}
              >
                {" "}
                <div className="circle-link-1">
                  <FaGithub  color="black" size={20} />
                </div>
              </a>
              <a
                target="_blank"
                href={links.linkedin}
              >
                {" "}
                <div className="circle-link-1">
                  <FaLinkedin  color="#32359c" size={20} />
                </div>
              </a>
              <a
                target="_blank"
                href={links.instagram}
              >
                {" "}
                <div className="circle-link-1">
                  <GrInstagram color="#782c6f" size={20} />
                </div>
              </a>
              <a
                target="_blank"
                href={links.email}
              >
                {" "}
                <div className="circle-link-1">
                  <FiMail color="#8c161c" size={20} />
                </div>
              </a>
              <a target="_blank" href={links.whatsapp}>
                {" "}
                <div className="circle-link-1">
                  <FaWhatsapp color="#1e5720" size={20} />
                </div>
              </a>
              <a target="_blank" href={links.phone}>
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
