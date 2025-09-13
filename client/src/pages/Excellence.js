import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const Excellence = () => {
  const points = [
    {
      title: 'Quality',
      description: 'Maintaining the highest standards in every product and service we deliver.'
    },
    {
      title: 'R&D',
      description: 'Continuous research and development to create innovative architectural solutions.'
    },
    {
      title: 'Precision Engineering',
      description: 'Utilizing advanced technology for precise and reliable manufacturing.'
    },
    {
      title: 'Project Management',
      description: 'Expert handling of projects from inception to completion.'
    },
    {
      title: 'After-Sales Support',
      description: 'Comprehensive support and service after project completion.'
    },
    {
      title: 'Zero-Waste Practices',
      description: 'Committed to sustainable manufacturing and environmental responsibility.'
    }
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
          marginTop: '63px',
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
              <h1 className="display-4 fw-bold mb-3">Excellence</h1>
              <p className="lead">Our commitment to quality and innovation</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row className="g-4">
          {points.map((point, index) => (
            <Col key={index} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-light rounded-3 h-100"
              >
                <h3 className="h5 mb-3">{point.title}</h3>
                <p className="mb-0 text-muted">{point.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Excellence;
