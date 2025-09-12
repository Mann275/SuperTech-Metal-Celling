import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const PROJECTS = [
  {
    id: 1,
    title: 'Corporate Headquarters',
    client: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    description: 'Complete ceiling solution for a 10-story corporate headquarters building, featuring linear metal ceilings with acoustic properties.',
    image: '/assets/images/projects/corporate.jpg'
  },
  {
    id: 2,
    title: 'International Airport Terminal',
    client: 'Airport Authority of India',
    location: 'Mumbai, Maharashtra',
    description: 'Custom-designed metal ceilings and exterior louvers for the new international terminal, meeting stringent acoustic and aesthetic requirements.',
    image: '/assets/images/projects/airport.jpg'
  },
  {
    id: 3,
    title: 'Multi-Specialty Hospital',
    client: 'HealthCare Group',
    location: 'Chennai, Tamil Nadu',
    description: 'Antimicrobial metal ceilings and hygienic cubicle systems for a state-of-the-art hospital facility.',
    image: '/assets/images/projects/hospital.jpg'
  }
];

const Projects = () => {
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
              <h1 className="display-4 fw-bold mb-3">Our Projects</h1>
              <p className="lead">Featured implementations of our architectural solutions</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row className="g-4">
          {PROJECTS.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="h5 mb-2">{project.title}</Card.Title>
                    <Card.Subtitle className="text-muted mb-2 small">
                      {project.client} | {project.location}
                    </Card.Subtitle>
                    <Card.Text className="small">{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects;