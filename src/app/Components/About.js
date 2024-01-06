import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { serverUrl } from "../Source";

function About() {
  const [resumesData, setresumesData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          serverUrl + "/api/v1/admin/get-resume-leatest"
        );
        setresumesData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    // Replace the URL with your actual file URL
    const fileUrl = `${serverUrl}/${resumesData.resume}`;

    // Create a hidden link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank"; // Open the link in a new tab
    link.download = "Rajneesh_Resume.pdf"; // Specify the file name for download
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <div className="py-5" style={{ background: "#212529", color: "white" }}>
      <h3 className="text-center pb-4 heading-for-component">About</h3>
      <p className="text-center mx-4">
        Passionate learner, creative problem solver, and tech enthusiast.
        Striving for growth and making a positive impact.
      </p>
      <AnimationOnScroll
        initiallyVisible={false}
        duration={0.4}
        animateIn="animate__fadeInUp"
        offset={50}
        className="icon-flex"
        delay={150}
      >
        <div className="row m-auto about-card mt-5 ">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="img-div">
              <img
                class="framed"
                style={{ maxHeight: "300px" }}
                src="/my_img.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6  d-flex justify-content-center align-items-center pt-4 google-font">
            <div className="">
              <p>Name: Rajneesh Shukla</p>
              <p>Address: Mohali, Chandigarh</p>
              <p>Phone: +91 9161422065</p>
              <p>Education: MCA (pursuing)</p>
              <p>Date of birth: July 18, 2002</p>
              <p>Email: rajneeshshukla606@gmail.com</p>
            </div>

            {/* <p className="text-center  p-5">
      I am a Software Engineer with industry experience building websites and web application. I specialise in JavaScript and have professional experience working with React js, Next js,Angular,Node js, Redux, MongoDB. I also have experience working with Bootstrap, Material UI, Formik, Core UI, Axios, Auth0 Nodemailer etc.
      </p> */}
          </div>
        </div>
      </AnimationOnScroll>
      <h3 className="text-center mt-5">
        <span>50+</span> Project complete
      </h3>
      <div className="d-flex mt-3 justify-content-center ">
        <button onClick={handleDownload} className="btn text-light border">
          DOWNLOAD CV
        </button>
      </div>
    </div>
    // </div>
  );
}

export default About;
