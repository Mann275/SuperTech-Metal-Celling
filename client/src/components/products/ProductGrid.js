import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Import product images
import metalCeilings from '../../assets/images/products/Metal Ceilings.jpg';
import exteriorLouvers from '../../assets/images/products/Exterior Louvers.jpg';
import exteriorCladding from '../../assets/images/products/Exterior Cladding.jpg';
import tGridSystems from '../../assets/images/products/T Grid Systems.jpg';
import fasttrakCubicle from '../../assets/images/products/Fasttrak Cubicle Systems.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: 'Metal Ceilings',
    image: metalCeilings,
    description: 'State-of-the-art metal ceiling solutions featuring clip-in, lay-in, and linear systems.'
  },
  {
    id: 2,
    name: 'Exterior Louvers',
    image: exteriorLouvers,
    description: 'Premium architectural louvers engineered for both aesthetics and performance.'
  },
  {
    id: 3,
    name: 'Exterior Cladding',
    image: exteriorCladding,
    description: 'High-performance ACP (Aluminum Composite Panel) cladding solutions with diverse finishes.'
  },
  {
    id: 4,
    name: 'T Grid Systems',
    image: tGridSystems,
    description: 'Professional-grade T-Grid ceiling suspension systems manufactured from hot-dipped galvanized steel.'
  },
  {
    id: 5,
    name: 'Fasttrak Cubicle Systems',
    image: fasttrakCubicle,
    description: 'Advanced toilet cubicle systems built with premium compact laminates and stainless steel hardware.'
  }
];

const ProductGrid = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {PRODUCTS.map((product) => (
          <Col key={product.id} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
            >
              <Card className="product-card h-100 shadow-sm">
                <div className="product-image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="product-overlay">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="btn btn-light rounded-pill px-4"
                    >
                      Learn More
                    </motion.div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="h4 mb-3">{product.name}</Card.Title>
                  <Card.Text className="text-muted">{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;