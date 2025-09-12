import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductHighlight = () => {
  // Product categories
  const products = [
    {
      id: 1,
      name: 'Metal Ceilings',
      image: 'https://via.placeholder.com/400x300',
      description: 'Wide range, flexible, acoustically efficient, customizable build-to-order solutions.',
      link: '/products?category=Metal Ceilings'
    },
    {
      id: 2,
      name: 'Exterior Louvers',
      image: 'https://via.placeholder.com/400x300',
      description: 'Blend aesthetics with functionality, engineered for durability and weather resistance.',
      link: '/products?category=Exterior Louvers'
    },
    {
      id: 3,
      name: 'Exterior Cladding',
      image: 'https://via.placeholder.com/400x300',
      description: 'Stylish, weather-resistant, energy-efficient cladding solutions for modern buildings.',
      link: '/products?category=Exterior Cladding'
    },
    {
      id: 4,
      name: '"T" Grid Systems',
      image: 'https://via.placeholder.com/400x300',
      description: 'Strong, reliable support structures designed for versatility and ease of installation.',
      link: '/products?category=T Grid Systems'
    },
    {
      id: 5,
      name: 'Raised Floor Systems',
      image: 'https://via.placeholder.com/400x300',
      description: 'Functional flooring for modern infrastructure with easy access and maintenance.',
      link: '/products?category=Raised Floor Systems'
    },
    {
      id: 6,
      name: 'Cubicle Systems',
      image: 'https://via.placeholder.com/400x300',
      description: 'Modern, hygienic, and space-saving solutions for office and bathroom spaces.',
      link: '/products?category=Fasttrak Cubicle Systems'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Row>
      {products.map((product, index) => (
        <Col lg={4} md={6} className="mb-4" key={product.id}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={index}
          >
            <Card className="product-card h-100 border-0 shadow-sm">
              <div className="product-image-container">
                <Card.Img variant="top" src={product.image} />
                <div className="product-overlay">
                  <Link to={product.link} className="stretched-link"></Link>
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title as="h4" className="mb-3">{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={product.link} className="btn btn-outline-primary mt-3">Learn More</Link>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductHighlight;
