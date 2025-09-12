import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const About = () => {
  const stats = [
    { number: '25+', text: 'Years Experience' },
    { number: '100K+', text: 'Projects Completed' },
    { number: '18M+', text: 'Sq. Meters Covered' },
    { number: '25K+', text: 'Happy Clients' }
  ];

  return (
    <>
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
              <h1 className="display-4 fw-bold mb-3">Our Story</h1>
              <p className="lead">Transforming Spaces Since 1998</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Story Section */}
              <div className="blog-content mb-5">

                <div className="mb-5">
                  <p className="lead mb-4">
                    With over 25 years of expertise in architectural metalwork solutions, SUPERTECH has grown from a small manufacturing unit to become India's trusted name in premium metal ceilings, louvers, and cladding.
                  </p>

                  <Row className="text-center g-4 mb-4">
                    {stats.map((stat, index) => (
                      <Col sm={6} lg={3} key={index}>
                        <h3 className="h2 text-primary mb-1">{stat.number}</h3>
                        <p className="text-muted small">{stat.text}</p>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Mission Section */}
                <div className="mb-5">
                  <h2 className="h2 mb-4">Our Mission</h2>
                  <p className="mb-3">To deliver innovative, sustainable, and high-quality architectural metalwork solutions that exceed client expectations.</p>
                  <p>We are committed to continuous improvement through R&D, environmentally responsible practices, and building long-term relationships with our stakeholders.</p>
                </div>

                {/* Values Section */}
                <div>
                  <h2 className="h2 mb-4">Core Values</h2>
                  <Row className="g-4">
                    <Col md={6}>
                      <div className="mb-4">
                        <h4 className="h5 text-primary">Excellence</h4>
                        <p>We strive for excellence in everything we do, from design to execution.</p>
                      </div>
                      <div>
                        <h4 className="h5 text-primary">Innovation</h4>
                        <p>We embrace innovative solutions and cutting-edge technologies.</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-4">
                        <h4 className="h5 text-primary">Quality</h4>
                        <p>We maintain the highest quality standards in our products and services.</p>
                      </div>
                      <div>
                        <h4 className="h5 text-primary">Trust</h4>
                        <p>We build lasting relationships based on trust and transparency.</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
