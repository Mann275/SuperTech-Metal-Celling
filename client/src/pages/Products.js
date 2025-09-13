import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const PRODUCTS = [
  {
    id: 1,
    name: 'Metal Ceilings',
    image: 'https://placehold.co/800x600/e9ecef/495057?text=Metal+Ceilings',
    description: 'State-of-the-art metal ceiling solutions featuring clip-in, lay-in, and linear systems.'
  },
  {
    id: 2,
    name: 'Exterior Louvers',
    image: 'https://placehold.co/800x600/e9ecef/495057?text=Exterior+Louvers',
    description: 'Premium architectural louvers engineered for both aesthetics and performance.'
  },
  {
    id: 3,
    name: 'Exterior Cladding',
    image: 'https://placehold.co/800x600/e9ecef/495057?text=Exterior+Cladding',
    description: 'High-performance ACP (Aluminum Composite Panel) cladding solutions with diverse finishes.'
  },
  {
    id: 4,
    name: 'T Grid Systems',
    image: 'https://placehold.co/800x600/e9ecef/495057?text=T+Grid+Systems',
    description: 'Professional-grade T-Grid ceiling suspension systems manufactured from hot-dipped galvanized steel.'
  },
  {
    id: 5,
    name: 'Raised Floor Systems',
    image: 'https://placehold.co/800x600/e9ecef/495057?text=Raised+Floor+Systems',
    description: 'Advanced raised floor solutions for modern office spaces with flexible cable management.'
  },
  {
    id: 6,
    name: 'Fasttrak Cubicle Systems',
    image: 'https://placehold.co/800x600/e9ecef/495057?text=Fasttrak+Cubicle+Systems',
    description: 'Advanced toilet cubicle systems built with premium compact laminates and stainless steel hardware.'
  }
];

const Products = () => {

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
              <h1 className="display-4 fw-bold mb-3">Our Products</h1>
              <p className="lead">Discover our comprehensive range of premium architectural solutions</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container className="py-4 py-md-5">
        <Row className="g-4">
          {PRODUCTS.map((product) => (
            <Col key={product.id} sm={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
              >
                <Card className="product-card border-0 shadow-sm h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="h4 mb-3">{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
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

export default Products;
