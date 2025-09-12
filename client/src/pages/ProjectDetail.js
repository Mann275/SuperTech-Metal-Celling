import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Card, Button, Tab, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaRuler, FaBuilding, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

// Components
import PageHeader from '../components/common/PageHeader';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        // In a real app, fetch from API
        // const res = await axios.get(`/api/projects/${id}`);
        // setProject(res.data);
        
        // For demo, we'll use a mock project
        setTimeout(() => {
          setProject({
            _id: id,
            title: 'Corporate Headquarters',
            client: 'TechCorp India',
            location: 'Bangalore, Karnataka',
            description: 'Complete ceiling solution for a 10-story corporate headquarters building, featuring linear metal ceilings with acoustic properties and energy-efficient design. The project involved custom design elements to match the architect\'s vision while maintaining functional requirements for acoustics and accessibility.',
            category: 'Corporate',
            products: ['Linear Metal Ceiling', 'T Grid Systems', 'Exterior Louvers'],
            area: 25000,
            areaUnit: 'sq. meter',
            completionDate: '2024-06-15',
            images: [
              'https://via.placeholder.com/800x600',
              'https://via.placeholder.com/800x600',
              'https://via.placeholder.com/800x600',
              'https://via.placeholder.com/800x600'
            ],
            featured: true,
            challenges: [
              'Complex architectural design requiring custom ceiling patterns',
              'Tight timeline for completion before company relocation',
              'Need for superior acoustic performance in meeting rooms and open areas',
              'Coordinating installation with other ongoing interior works'
            ],
            solutions: [
              'Designed custom linear metal ceiling panels to match architectural vision',
              'Implemented phased installation approach to meet timeline',
              'Used acoustic-optimized perforated panels with NRC rating of 0.85',
              'Created detailed installation schedule coordinated with other trades'
            ],
            testimonial: {
              quote: 'SUPERTECH delivered an exceptional ceiling solution that perfectly balances aesthetics with functionality.',
              author: 'Rajesh Kumar',
              position: 'Facilities Director, TechCorp India'
            },
            relatedProjects: ['2', '5']
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching project detail:', error);
        setLoading(false);
      }
    };

    fetchProjectDetail();
  }, [id]);

  if (loading) {
    return (
      <>
        <PageHeader 
          title="Project Details" 
          backgroundImage="https://via.placeholder.com/1920x400"
          subtitle="Loading project information..."
        />
        <Container className="py-5">
          <LoadingSpinner />
        </Container>
      </>
    );
  }

  if (!project) {
    return (
      <>
        <PageHeader 
          title="Project Not Found" 
          backgroundImage="https://via.placeholder.com/1920x400"
          subtitle="The requested project could not be found"
        />
        <Container className="py-5 text-center">
          <h3>Sorry, we couldn't find the project you're looking for.</h3>
          <Button as={Link} to="/projects" variant="primary" className="mt-3">
            View All Projects
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader 
        title={project.title} 
        backgroundImage="https://via.placeholder.com/1920x400"
        subtitle={`Client: ${project.client} | Location: ${project.location}`}
      />
      
      <section className="project-detail-section py-5">
        <Container>
          {/* Project Overview */}
          <Row className="mb-5">
            <Col lg={8} className="mb-4 mb-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="project-gallery">
                  <div className="main-image mb-3">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="img-fluid rounded shadow"
                    />
                  </div>
                  <Row>
                    {project.images.slice(1, 4).map((image, index) => (
                      <Col md={4} key={index} className="mb-3">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 2}`} 
                          className="img-fluid rounded shadow"
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="project-info-card border-0 shadow-sm">
                  <Card.Header className="bg-primary text-white py-3">
                    <h4 className="m-0">Project Information</h4>
                  </Card.Header>
                  <Card.Body>
                    <ul className="project-info-list list-unstyled">
                      <li className="mb-3 d-flex">
                        <FaBuilding className="text-primary me-3 mt-1" size={20} />
                        <div>
                          <strong>Client</strong>
                          <p className="mb-0">{project.client}</p>
                        </div>
                      </li>
                      <li className="mb-3 d-flex">
                        <FaMapMarkerAlt className="text-primary me-3 mt-1" size={20} />
                        <div>
                          <strong>Location</strong>
                          <p className="mb-0">{project.location}</p>
                        </div>
                      </li>
                      <li className="mb-3 d-flex">
                        <FaCalendarAlt className="text-primary me-3 mt-1" size={20} />
                        <div>
                          <strong>Completion Date</strong>
                          <p className="mb-0">{new Date(project.completionDate).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</p>
                        </div>
                      </li>
                      <li className="mb-3 d-flex">
                        <FaRuler className="text-primary me-3 mt-1" size={20} />
                        <div>
                          <strong>Project Area</strong>
                          <p className="mb-0">{project.area.toLocaleString()} {project.areaUnit}</p>
                        </div>
                      </li>
                      <li className="mb-3">
                        <strong>Category</strong>
                        <p className="mb-0">
                          <Badge bg="primary" className="py-2 px-3">{project.category}</Badge>
                        </p>
                      </li>
                      <li>
                        <strong>Products Used</strong>
                        <div className="mt-2">
                          {project.products.map((product, index) => (
                            <Badge 
                              bg="light" 
                              text="dark" 
                              className="me-2 mb-2 py-2 px-3" 
                              key={index}
                            >
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
                
                <div className="mt-4 d-grid">
                  <Button as={Link} to="/contact" variant="primary" size="lg">
                    Discuss Your Project
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
          
          {/* Project Details Tabs */}
          <div className="project-details-tabs mt-5">
            <Tab.Container defaultActiveKey="overview">
              <Nav variant="tabs" className="mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="overview">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="challenges">Challenges & Solutions</Nav.Link>
                </Nav.Item>
                {project.testimonial && (
                  <Nav.Item>
                    <Nav.Link eventKey="testimonial">Client Testimonial</Nav.Link>
                  </Nav.Item>
                )}
              </Nav>
              
              <Tab.Content>
                <Tab.Pane eventKey="overview">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <h3 className="mb-4">Project Overview</h3>
                    <p className="lead">{project.description}</p>
                    <p>At SUPERTECH Metal Ceilings, we worked closely with the client's team and architects to design and implement a comprehensive ceiling solution that met both aesthetic and functional requirements. The project involved careful planning, precise execution, and attention to detail at every stage.</p>
                    <p>Our team provided end-to-end support, from initial design consultation and material selection to installation and final inspection, ensuring that every aspect of the project met our high standards of quality and the client's expectations.</p>
                  </motion.div>
                </Tab.Pane>
                
                <Tab.Pane eventKey="challenges">
                  <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <div className="challenges-section">
                          <h3 className="mb-4">
                            <FaChartLine className="text-primary me-2" /> Project Challenges
                          </h3>
                          <ul className="challenges-list">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="mb-3">{challenge}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </Col>
                    
                    <Col md={6}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <div className="solutions-section">
                          <h3 className="mb-4">
                            <FaLightbulb className="text-primary me-2" /> Our Solutions
                          </h3>
                          <ul className="solutions-list">
                            {project.solutions.map((solution, index) => (
                              <li key={index} className="mb-3">{solution}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </Col>
                  </Row>
                </Tab.Pane>
                
                {project.testimonial && (
                  <Tab.Pane eventKey="testimonial">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <div className="testimonial-section text-center py-4">
                        <div className="testimonial-quote mb-4">
                          <i className="fas fa-quote-left fa-3x text-primary mb-3"></i>
                          <p className="lead font-italic mb-4">"{project.testimonial.quote}"</p>
                        </div>
                        <div className="testimonial-author">
                          <h5 className="mb-1">{project.testimonial.author}</h5>
                          <p className="text-muted">{project.testimonial.position}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Tab.Pane>
                )}
              </Tab.Content>
            </Tab.Container>
          </div>
          
          {/* Related Projects */}
          {project.relatedProjects && project.relatedProjects.length > 0 && (
            <div className="related-projects mt-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-4"
              >
                <h3 className="section-title">Related <span className="text-primary">Projects</span></h3>
              </motion.div>
              
              <Row>
                {/* In a real app, you would fetch related projects based on IDs */}
                <Col lg={6} className="mb-4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <Card className="project-card h-100 border-0 shadow-sm">
                      <div className="project-image-container">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
                        <div className="project-overlay">
                          <Link to={`/projects/2`} className="stretched-link"></Link>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>International Airport Terminal</Card.Title>
                        <Card.Text>Custom-designed metal ceilings and exterior louvers for the new international terminal.</Card.Text>
                        <Link to={`/projects/2`} className="btn btn-outline-primary btn-sm">View Project</Link>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
                
                <Col lg={6} className="mb-4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <Card className="project-card h-100 border-0 shadow-sm">
                      <div className="project-image-container">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
                        <div className="project-overlay">
                          <Link to={`/projects/5`} className="stretched-link"></Link>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>Shopping Mall & Entertainment Center</Card.Title>
                        <Card.Text>Comprehensive ceiling and flooring solutions for a multi-level shopping complex.</Card.Text>
                        <Link to={`/projects/5`} className="btn btn-outline-primary btn-sm">View Project</Link>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section py-5 bg-light text-center">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-3">Inspired by Our Work?</h2>
            <p className="lead mb-4">Partner with SUPERTECH for your next architectural project.</p>
            <Button as={Link} to="/contact" variant="primary" size="lg">Contact Us Today</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetail;
