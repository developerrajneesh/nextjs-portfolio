import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <div className="py-5" style={{ background: "#212529", color: "white" }}>
      <h3 className="text-center pb-4 ">About</h3>
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
        <button className="btn text-light border">DOWNLOAD CV</button>
      </div>
    </div>
    // </div>
  );
}

export default About;
