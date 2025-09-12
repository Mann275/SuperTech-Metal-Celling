import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaTools, FaRecycle, FaUserTie, FaBuilding } from 'react-icons/fa';
import { featuredProjects as mockProjects } from '../data/mockProjects';

// Import images
import aboutImage from '../assets/images/home/about-image.jpg';
import project1 from '../assets/images/projects/project1.jpg';
import project2 from '../assets/images/projects/project2.jpg';
import project3 from '../assets/images/projects/project3.jpg';

// Component imports
import HeroBanner from '../components/home/HeroBanner';
import ProductHighlight from '../components/home/ProductHighlight';
import StatsCounter from '../components/home/StatsCounter';
import TestimonialSlider from '../components/home/TestimonialSlider';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    const timeoutId = setTimeout(() => {
      setFeaturedProjects(mockProjects);
      setLoading(false);
      setError(null);
    }, 1000);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      {/* Hero Banner Section */}
      <HeroBanner />
      
      {/* About Us Section */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="section-title">Driven by Innovation, <span className="text-primary">Built on Excellence</span></h2>
                <p className="lead">SUPERTECH Metal Ceilings specializes in architectural metalwork that transforms spaces with precision engineering and aesthetic appeal.</p>
                <p>With over 25 years of expertise, our state-of-the-art manufacturing facilities in Gujarat, India produce high-quality metal ceilings, louvers, cladding, and more using premium aluminium alloys and galvanized steel.</p>
                <p>Our commitment to innovation, sustainability, and customer satisfaction has made us a trusted name in the industry, serving 25,000+ clients across 100,000+ projects.</p>
                <Button as={Link} to="/about" variant="primary" size="lg" className="mt-3">Discover Our Story</Button>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="about-image-grid">
                  <img src={aboutImage} alt="SUPERTECH facility" className="img-fluid rounded shadow" />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Key Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="section-title">Why Choose <span className="text-primary">SUPERTECH</span></h2>
            <p className="section-subtitle">Our products are designed with key features that ensure quality, safety, and sustainability</p>
          </motion.div>
          
          <Row>
            {[
              { 
                icon: <FaLeaf className="feature-icon text-primary" size={40} />, 
                title: "Antimicrobial & Eco-Friendly", 
                description: "Our products feature antimicrobial properties and are manufactured using sustainable practices for a greener environment." 
              },
              { 
                icon: <FaTools className="feature-icon text-primary" size={40} />, 
                title: "Acoustical Absorption", 
                description: "Engineered for optimal sound absorption, our ceilings create comfortable environments with reduced noise pollution." 
              },
              { 
                icon: <FaRecycle className="feature-icon text-primary" size={40} />, 
                title: "Easy Maintenance", 
                description: "Corrosion-resistant and easy to clean, our products are designed for minimal maintenance and maximum longevity." 
              },
              { 
                icon: <FaUserTie className="feature-icon text-primary" size={40} />, 
                title: "Fire Safety Compliant", 
                description: "All products meet stringent fire safety regulations, providing peace of mind for your infrastructure projects." 
              }
            ].map((feature, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <Card className="feature-card h-100 text-center p-4 border-0 shadow-sm">
                    <div className="mb-3">
                      {feature.icon}
                    </div>
                    <Card.Body>
                      <Card.Title as="h5">{feature.title}</Card.Title>
                      <Card.Text>{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Product Highlights */}
      <section className="products-section py-5">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="section-title">Our Premium <span className="text-primary">Product Range</span></h2>
            <p className="section-subtitle">Discover our comprehensive range of architectural metalwork solutions</p>
          </motion.div>
          
          <ProductHighlight />
        </Container>
      </section>
      
      {/* Stats Counter */}
      <section className="stats-section py-5 bg-primary text-white">
        <Container>
          <StatsCounter 
            stats={[
              { value: "18", label: "Million+ Sq. Meters Covered" },
              { value: "25,000", label: "Clients Served" },
              { value: "100,000", label: "Projects Completed" },
              { value: "500", label: "Top Companies Trust Us" }
            ]}
          />
        </Container>
      </section>
      
      {/* Featured Projects */}
      <section className="projects-section py-5">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>
            <p className="section-subtitle">Showcasing our expertise through successful project implementations</p>
          </motion.div>
          
          <Row>
            {loading ? (
              <Col xs={12} className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading projects...</span>
                </div>
              </Col>
            ) : error ? (
              <Col xs={12} className="text-center py-5">
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </Col>
            ) : featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => (
                <Col lg={4} md={6} className="mb-4" key={project._id || index}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <Card className="project-card border-0 shadow h-100">
                      <div className="project-image-container">
                        <Card.Img variant="top" src={project.images[0] || (index === 0 ? project1 : index === 1 ? project2 : project3)} />
                        <div className="project-overlay">
                          <FaBuilding size={40} />
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text className="text-muted mb-2">Client: {project.client}</Card.Text>
                        <Card.Text className="mb-3">{project.description.substring(0, 100)}...</Card.Text>
                        <Link to={`/projects/${project._id}`} className="btn btn-outline-primary btn-sm">View Project</Link>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))
            ) : (
              <div className="text-center py-5">
                <p>No featured projects available at the moment.</p>
              </div>
            )}
          </Row>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/projects" variant="primary" size="lg">View All Projects</Button>
          </div>
        </Container>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="section-title">What Our <span className="text-primary">Clients Say</span></h2>
            <p className="section-subtitle">Read testimonials from our satisfied clients</p>
          </motion.div>
          
          <TestimonialSlider />
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white text-center">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">Ready to Transform Your Space?</h2>
            <p className="lead mb-4">Let's create something extraordinary together. Contact us for a consultation.</p>
            <Button as={Link} to="/contact" variant="light" size="lg">Get in Touch</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Home;
