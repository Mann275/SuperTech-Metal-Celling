import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: 1,
    name: 'Metal Ceilings',
    image: 'https://via.placeholder.com/600x400?text=Metal+Ceilings',
    fallbackImage: 'https://via.placeholder.com/600x400?text=Metal+Ceilings',
    description: 'State-of-the-art metal ceiling solutions featuring clip-in, lay-in, and linear systems. Available in aluminum and galvanized steel with powder coating finishes. Ideal for airports, hospitals, offices, and commercial spaces. Features include acoustic performance, fire resistance, and easy maintenance.'
  },
  {
    id: 2,
    name: 'Exterior Louvers',
    image: 'https://via.placeholder.com/600x400?text=Exterior+Louvers',
    fallbackImage: 'https://via.placeholder.com/600x400?text=Exterior+Louvers',
    description: 'Premium architectural louvers engineered for both aesthetics and functionality. Made from high-grade aluminum with weather-resistant coating. Provides effective sunshading, ventilation, and visual screening. Custom designs available for building facades and mechanical areas.'
  },
  {
    id: 3,
    name: 'Exterior Cladding',
    image: 'https://via.placeholder.com/600x400?text=Exterior+Cladding',
    fallbackImage: 'https://via.placeholder.com/600x400?text=Exterior+Cladding',
    description: 'High-performance ACP (Aluminum Composite Panel) cladding solutions. Features include fire-resistance, weather-proofing, and thermal insulation. Available in diverse finishes including metallic, solid colors, and wooden textures. Ideal for modern building facades and interior applications.'
  },
  {
    id: 4,
    name: 'T Grid Systems',
    image: 'https://via.placeholder.com/600x400?text=T+Grid+Systems',
    fallbackImage: 'https://via.placeholder.com/600x400?text=T+Grid+Systems',
    description: 'Professional-grade T-Grid ceiling suspension systems manufactured from hot-dipped galvanized steel. Features double-webbed design for superior strength, white powder coating finish, and anti-seismic properties. Compatible with all standard ceiling tiles and perfect for large commercial installations.'
  },
  {
    id: 5,
    name: 'Fasttrak Cubicle Systems',
    image: 'https://via.placeholder.com/600x400?text=Cubicle+Systems',
    fallbackImage: 'https://via.placeholder.com/600x400?text=Cubicle+Systems',
    description: 'Advanced toilet cubicle systems built with premium compact laminates and stainless steel hardware. Features include moisture resistance, anti-bacterial properties, and impact resistance. Available in various colors and finishes with options for customization. Perfect for corporate offices, malls, and commercial washrooms.'
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
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = product.fallbackImage;
                    }}
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