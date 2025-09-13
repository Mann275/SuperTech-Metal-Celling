import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaFacebook, 
  FaTwitter,
  FaInstagram,
  FaUser
} from 'react-icons/fa';
import logo from '../../assets/STlogo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <Container className="py-5">
        <Row>
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <img 
              src={logo} 
              alt="SUPERTECH Metal Ceilings" 
              className="mb-4" 
              style={{ height: '60px', width: 'auto' }}
            />
            <p>SUPERTECH Metal Ceilings specializes in architectural metalwork, ceilings, louvers, cladding, cubicles, and flooring systems, backed by 25 years of expertise.</p>
            <div className="d-flex social-links mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
          
          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-white text-decoration-none">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/excellence" className="text-white text-decoration-none">Excellence</Link>
              </li>
              <li className="mb-2">
                <Link to="/projects" className="text-white text-decoration-none">Projects</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-white text-decoration-none">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </Col>
          
          {/* Products */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Our Products</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products?category=Metal Ceilings" className="text-white text-decoration-none">Metal Ceilings</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?category=Exterior Louvers" className="text-white text-decoration-none">Exterior Louvers</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?category=Exterior Cladding" className="text-white text-decoration-none">Exterior Cladding</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?category=T Grid Systems" className="text-white text-decoration-none">T Grid Systems</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?category=Raised Floor Systems" className="text-white text-decoration-none">Raised Floor Systems</Link>
              </li>
              <li>
                <Link to="/products?category=Fasttrak Cubicle Systems" className="text-white text-decoration-none">Fasttrak Cubicle Systems</Link>
              </li>
            </ul>
          </Col>
          
          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex">
                <FaMapMarkerAlt size={20} className="me-2 mt-1" />
                <p className="m-0">202, Shree Krishna Commercial Center, 6, Udyog Nagar, Opp. Raheja Solitaire, S. V. Road, Goregaon (West), Mumbai, India - 400104.</p>
              </li>
              <li className="mb-3 d-flex">
                <FaEnvelope size={20} className="me-2 mt-1" />
                <a href="mailto:info@supertechmetal.in" className="text-white text-decoration-none">info@supertechmetal.in</a>
              </li>
              <li className="mb-3 d-flex">
                <FaPhone size={20} className="me-2 mt-1" />
                <a href="tel:+919833670163" className="text-white text-decoration-none">+91 98336 70163</a>
              </li>
              <li className="d-flex">
                <FaUser size={20} className="me-2 mt-1" />
                <p className="m-0">Viral Sheth</p>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
      
      {/* Copyright */}
      <div className="bg-primary py-3 text-center">
        <Container>
          <p className="m-0">&copy; {new Date().getFullYear()} SUPERTECH Metal Ceilings. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
