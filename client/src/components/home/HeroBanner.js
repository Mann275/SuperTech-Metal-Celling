import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  // Background overlay is now handled by inline styles

  return (
    <section className="hero-section" style={{ marginBottom: 0, paddingBottom: 0 }}>
      <div 
        className="hero-image position-relative" 
        style={{
          backgroundColor: '#1a1a1a', // Dark background as fallback
          backgroundImage: `url(${require('../../assets/images/hero/hero-manufacturing.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'calc(100vh - 32px)',
          marginTop: '32px',
          padding: 0,
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
        <Container className="h-100 d-flex align-items-center position-relative">
          <Row className="justify-content-center text-center">
            <Col lg={10} className="text-white">
              <div>
                <motion.h1 
                  className="display-2 fw-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Driven by Innovation, Built on Excellence
                </motion.h1>
                <motion.p 
                  className="lead mb-5 fs-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Transform your spaces with our premium ceiling solutions
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button 
                    as={Link} 
                    to="/products" 
                    variant="primary" 
                    size="lg" 
                    className="rounded-pill px-5 py-3 hero-cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Solutions
                  </Button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
