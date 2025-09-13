import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/Header.css';
import logo from '../../assets/STlogo.png';

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
      <div className="top-bar bg-dark text-white py-1">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="contact-info d-flex align-items-center gap-3">
              <a href="mailto:info@supertechmetal.in" className="text-white text-decoration-none">
                <FaEnvelope className="me-1" />
                <span className="d-none d-sm-inline">info@supertechmetal.in</span>
                <span className="d-inline d-sm-none">Email</span>
              </a>
              <span className="d-none d-sm-inline">|</span>
              <a href="tel:+91 9833670163" className="text-white text-decoration-none">
                <FaPhone className="me-1" />
                <span className="d-none d-sm-inline">+91 98336 70163</span>
                <span className="d-inline d-sm-none">Call</span>
              </a>
            </div>
            <div className="location-info text-white text-center text-md-end">
              <small>Corporate Office: Mumbai, India</small>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar 
        expand="lg" 
        fixed="top"
        variant={isScrolled ? 'light' : 'dark'}
        className={`${isScrolled ? 'scrolled' : ''}`}
        style={{ 
          top: '32px',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          zIndex: 1032,
          padding: 0
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img 
              src={logo}
              alt="SUPERTECH Logo" 
              height="50"
              className="d-inline-block me-2" 
              style={{
                filter: isScrolled ? 'none' : 'none'
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
