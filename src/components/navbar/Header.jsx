import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/media/logo.png";

import { VscSearch } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  // const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Title" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="phone" />
        <Navbar.Collapse id="phone">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="first">Home </Nav.Link>
            <Nav.Link href="#link" className="menu link">
              Pages <i>+</i>
              <div className="drop">
                <ul>
                  <li>About Us</li>
                  <li>Our Team</li>
                  <li>FAQ's</li>
                  <li>Booking </li>
                  <li>Error 404 </li>
                  <li>Login / Register</li>
                </ul>
              </div>
            </Nav.Link>
            <Nav.Link href="#link" className="menu link">
              Services <i>+</i>
              <div className="drop">
                <ul>
                  <li>Service</li>
                  <li>Service detail</li>
                </ul>
              </div>
            </Nav.Link>
            <Nav.Link href="#link" className="menu link">
              Blog <i>+</i>
              <div className="drop">
                <ul>
                  <li>Blog</li>
                  <li>Blog details</li>
                </ul>
              </div>
            </Nav.Link>
            <Nav.Link href="#link" className="link">Contact Us </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="contact">
          <div className="search">
            <VscSearch color="#565acf" size={22} onClick={handleShow} />
          </div>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Search....</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" placeholder="Type to search... " />
              <i>
                <BsSearch color="#1f2278" size={22} />
              </i>
            </Modal.Body>
          </Modal>
          <div className="num">
            <i>
              <FaPhoneAlt color="#565acf" size={18} />
            </i>
            (+01) 999 888 777
          </div>
          <div className="mixContact">
            contact us
            <i>
              <BsChevronRight color="black" size={18} />
            </i>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
