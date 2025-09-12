import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import axios from 'axios';

// Components
import PageHeader from '../components/common/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace with actual API endpoint when connected
      await axios.post('/api/contact', formData);
      setFormSubmitted(true);
      setFormError(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError(true);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Our Location",
      content: "Corporate Office, Gujarat, India"
    },
    {
      icon: <FaPhoneAlt className="contact-icon" />,
      title: "Call Us",
      content: "+91 99999 99999"
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: "Email Us",
      content: "info@supertechmetal.in"
    },
    {
      icon: <FaClock className="contact-icon" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div 
        className="hero-section position-relative mb-5" 
        style={{
          backgroundColor: '#1a1a1a', // Dark background as fallback
          backgroundImage: `url(${require('../assets/images/hero/hero-manufacturing.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <div 
          className="overlay position-absolute w-100 h-100" 
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            top: 0,
            left: 0
          }}
        />
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
              <p className="lead">Get in touch with our team for inquiries, quotes, or support</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Contact Info Cards */}
      <section className="contact-info-section py-5">
        <Container>
          <Row>
            {contactInfo.map((item, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="contact-card h-100 text-center p-4 border-0 shadow-sm">
                    <div className="contact-icon-wrapper mb-3 mx-auto bg-primary text-white rounded-circle p-3">
                      {item.icon}
                    </div>
                    <Card.Body>
                      <Card.Title as="h5">{item.title}</Card.Title>
                      <Card.Text>{item.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Contact Form & Map Section */}
      <section className="contact-form-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="contact-form-wrapper bg-white p-4 p-md-5 rounded shadow">
                  <h3 className="mb-4">Send Us a Message</h3>
                  
                  {formSubmitted && (
                    <Alert variant="success" className="mb-4">
                      Thank you for your message! We will get back to you shortly.
                    </Alert>
                  )}
                  
                  {formError && (
                    <Alert variant="danger" className="mb-4">
                      An error occurred while submitting the form. Please try again later.
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Your Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange} 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Your Message *</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                      />
                    </Form.Group>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-100"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="contact-map-wrapper h-100">
                  <div className="map-container rounded shadow overflow-hidden" style={{ height: "100%", minHeight: "400px" }}>
                    {/* Replace with actual Google Maps embed code */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.1195335443!2d72.55400021476878!3d23.13059018489566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cef2cb0b261%3A0x47a8da8cac96220!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1631808822996!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="SUPERTECH Metal Ceilings Location"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Office Locations - Add if multiple locations exist */}
      
      {/* Call to Action Section */}
      <section className="contact-cta-section py-5 bg-primary text-white text-center">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-3">Let's Create Something Extraordinary Together</h2>
            <p className="lead mb-4">Partner with SUPERTECH for innovative architectural metalwork solutions.</p>
            <div className="d-flex justify-content-center">
              <a href="tel:+919999999999" className="btn btn-light btn-lg me-3">
                <FaPhoneAlt className="me-2" /> Call Us
              </a>
              <a href="mailto:info@supertechmetal.in" className="btn btn-outline-light btn-lg">
                <FaEnvelope className="me-2" /> Email Us
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
