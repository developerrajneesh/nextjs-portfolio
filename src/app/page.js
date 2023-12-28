"use client"
// import Hero from "./Components/Hero";
import NavbarHeader from "./Components/NavbarHeader";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import { useRef } from "react";
import ParticleBackground from "./Components/ParticleBackground";
import Hero from "./Components/Hero";

export default function Home() {
  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();
  const Ref4 = useRef();
  const Ref5 = useRef();
  const Ref6 = useRef();
  const Ref7 = useRef(null);

 
  return (
    <>
        <ParticleBackground />
      <NavbarHeader  Ref1={Ref1} Ref2={Ref2} Ref3={Ref3} Ref4={Ref4} Ref5={Ref5} Ref6={Ref6} Ref7={Ref7}/>
      <hr className="m-0 p-0" />
      <section ref={Ref1}>
        <Hero/>
      </section>
      <hr className="m-0 p-0" />
      <section ref={Ref2}>
        <About />
      </section>
      <hr className="m-0 p-0" />
      <section ref={Ref3}>
        <Skills />
      </section>
      <hr className="m-0 p-0" />
      <section ref={Ref4}>
        <Services />
      </section>
      <hr className="m-0 p-0" />
      <section ref={Ref5}>
        <Projects />
      </section>
      <hr className="m-0 p-0" />
      <section ref={Ref6}>
        <ContactUs />
      </section>
      <hr className="m-0 p-0" />
      <section ref={Ref7}>
        <Blogs />
      </section>
      <hr className="m-0 p-0" />
      <Footer />
    </>
  );
}
