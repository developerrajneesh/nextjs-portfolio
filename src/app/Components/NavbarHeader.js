"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Offcanvas from "react-bootstrap/Offcanvas";
function NavbarHeader({ Ref1, Ref2, Ref3, Ref4, Ref5, Ref6, Ref7 }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = async (sectionRef) => {
    // console.log();
    window.scrollTo({
      top: sectionRef.current.offsetTop - 57,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className="sticky-top shadow"
        style={{ background: "#212529", color: "white" }}
      >
        <Container fluid>
          <Navbar.Brand
            className="text-light"
            style={{ cursor: "pointer" }}
            onClick={() => handleScroll(Ref1)}
          >
            Rajneesh Shukla
          </Navbar.Brand>

          <Navbar.Collapse id="navbarScroll4">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex">
              <Nav className="me-auto my-2 my-lg-0 ">
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref1)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref2)}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref3)}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref4)}
                >
                  Service
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref5)}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref6)}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => handleScroll(Ref7)}
                >
                  Blogs
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
          <div className="bar" onClick={handleShow}>
            <FaBars />
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        style={{
          background: "#212529",
          color: "white",
          maxWidth: "200px",
          padding: "30px",
        }}
        show={show}
        onHide={handleClose}
        placement={"end"}
      >
        <div className="circle-close bar-1" onClick={handleClose}>
          <RxCross1 />
        </div>
        <Nav.Link
          className="text-light m-2 mt-5"
          onClick={() => {
            handleClose(), handleScroll(Ref1);
          }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          className="text-light m-2 "
          onClick={() => {
            handleClose(), handleScroll(Ref2);
          }}
        >
          About
        </Nav.Link>
        <Nav.Link
          className="text-light m-2"
          onClick={() => {
            handleClose(), handleScroll(Ref3);
          }}
        >
          Skills
        </Nav.Link>

        <Nav.Link
          className="text-light m-2"
          onClick={() => {
            handleClose(), handleScroll(Ref4);
          }}
        >
          Service
        </Nav.Link>
        <Nav.Link
          className="text-light m-2"
          onClick={() => {
            handleClose(), handleScroll(Ref5);
          }}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          className="text-light m-2"
          onClick={() => {
            handleClose(), handleScroll(Ref6);
          }}
        >
          Contect
        </Nav.Link>
        <Nav.Link
          className="text-light m-2"
          onClick={() => {
            handleClose(), handleScroll(Ref7);
          }}
        >
          Blogs
        </Nav.Link>
      </Offcanvas>
    </>
  );
}

export default NavbarHeader;
