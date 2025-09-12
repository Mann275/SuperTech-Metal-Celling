import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Top Info Bar */}
      <div className="top-bar bg-dark text-white py-2" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1031 }}>
        <Container className="d-flex justify-content-between align-items-center">
          <div className="contact-info">
            <a href="mailto:info@supertechmetal.in" className="text-white me-4">
              <FaEnvelope className="me-1" /> info@supertechmetal.in
            </a>
            <a href="tel:+919999999999" className="text-white">
              <FaPhone className="me-1" /> +91 99999 99999
            </a>
          </div>
          <div className="location-info text-white">
            <small>Corporate Office: Gujarat, India</small>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar 
        expand="lg" 
        bg={isScrolled ? 'white' : 'transparent'} 
        variant={isScrolled ? 'light' : 'dark'}
        fixed="top"
        className={`py-2 transition-all ${isScrolled ? 'scrolled shadow-sm' : 'bg-transparent'}`}
        style={{ top: '40px' }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img 
              src="https://img.logoipsum.com/288.svg"
              alt="SUPERTECH Logo" 
              height="60"
              className="d-inline-block me-2" 
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
              }}
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/excellence">Excellence</Nav.Link>
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
