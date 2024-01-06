"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsWhatsapp, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { serverUrl } from "../Source";
function ContactUs() {


  const [links, setSLinks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    msg: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          serverUrl+"/api/v1/admin/get-link"
        );
        setSLinks(response.data[response.data.length - 1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(serverUrl+"/api/v1/admin/create-contact", formData);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        msg: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div
      className="text-white py-5"
      style={{ background: "#212529", color: "white" }}
    >
     <div className="container">
     <h3 className="pb-5 text-center heading-for-component">Contact Me</h3>
      <p className="text-center mx-4">
        Connecting possibilities, one message at a time. Reach out and let's
        create <br />
        something extraordinary together. Your vision, our expertise – let's
        make it happen! Contact us now for a brighter future
      </p>

      <div className="row m-0 mt-5">
        <div className="col-6 col-md-3 " data-aos="fade-right">
          <AnimationOnScroll
            initiallyVisible={false}
            duration={0.4}
            animateIn="animate__fadeInLeft"
            offset={50}
            className="icon-flex"
            delay={1 * 200}
          >
            <a target="_blank" href={links.email}>
            <div className="contact-circle">
              <MdEmail size={40} />
            </div></a>
            <h3>Email</h3>
          </AnimationOnScroll>
        </div>
        <div className="col-6 col-md-3 ">
          <AnimationOnScroll
            initiallyVisible={false}
            duration={0.4}
            animateIn="animate__fadeInLeft"
            offset={50}
            className="icon-flex"
            delay={1 * 50}
          >
            <a target="_blank" href={links.phone}>
            <div className="contact-circle">
              <BsFillTelephoneFill size={40} />
            </div>
            </a>
            <h3>Phone</h3>
          </AnimationOnScroll>
        </div>
        <div className="col-6 col-md-3 icon-flex" data-aos="fade-left">
          <AnimationOnScroll
            initiallyVisible={false}
            duration={0.4}
            animateIn="animate__fadeInRight"
            offset={50}
            className="icon-flex"
            delay={1 * 50}
          ><a target="_blank" href={links.linkedin}>

            <div className="contact-circle">
              <BsLinkedin size={40} />
            </div>
          </a>
            <h3>LinkedIn</h3>
          </AnimationOnScroll>
        </div>
        <div className="col-6 col-md-3 icon-flex" data-aos="fade-left">
          <AnimationOnScroll
            initiallyVisible={false}
            duration={0.4}
            animateIn="animate__fadeInRight"
            offset={50}
            className="icon-flex"
            delay={1 * 200}
          >
            <a target="_blank" href={links.whatsapp}>
            <div className="contact-circle">
              <BsWhatsapp size={40} />
            </div>
            </a>
            <h3>WhatsApp</h3>
          </AnimationOnScroll>
        </div>
      </div>

      <div className="container">

      <form className="py-3 p-md-5" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control-custom "
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="number"
              className="form-control-custom mt-2"
              placeholder="Your Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              className="form-control-custom mt-2"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="form-control-custom mt-2"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="msg"
              className="form-control-custom mt-2"
              placeholder="Message"
              value={formData.msg}
              onChange={handleChange}
              cols="15"
              rows="5"
            ></textarea>
            <div className="text-center">
              <button type="submit" className="text-center mt-4 hireme-btn">
                SEND MESSAGE
              </button>
            </div>
          </form>
        {/* <div className="row m-0 mt-5">
          <div className="col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center contact-img-card">
            <img
              src={"https://rajneesh.site/assets/aboutImg-963c9de8.png"}
              className="img-fluid"
              height={"450px"}
              alt="AboutImg"
            />
          </div>
          <div className="col-12 col-md-6 bg-light ">
            <form className="py-3 p-md-5">
              <input
                type="text"
                className="form-control-custom "
                placeholder="Your Name"
                name="name"
              />
              <input
                type="number"
                className="form-control-custom mt-2"
                placeholder="Your Number"
                name="number"
              />
              <input
                type="email"
                className="form-control-custom mt-2"
                placeholder="Your Email"
                name="email"
                required
              />
              <input
                type="text"
                className="form-control-custom mt-2"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                name="Masssge"
                className="form-control-custom mt-2"
                placeholder="Message"
                id=""
                cols="15"
                rows="5"
              ></textarea>
              <button type="submit" className="mt-5 btn hireme-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div> */}
      </div>
     </div>
    </div>
  );
}

export default ContactUs;
