import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav, Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaDownload, FaCheck } from 'react-icons/fa';
import axios from 'axios';

// Components
import PageHeader from '../components/common/PageHeader';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        // In a real app, fetch from API
        // const res = await axios.get(`/api/products/${id}`);
        // setProduct(res.data);
        
        // For demo, we'll use a mock product
        setTimeout(() => {
          setProduct({
            _id: id,
            name: 'Linear Metal Ceiling',
            category: 'Metal Ceilings',
            description: 'Premium linear metal ceiling panels with excellent acoustic properties, designed for modern spaces requiring both aesthetic appeal and functionality. Our linear metal ceilings are perfect for commercial, institutional, and high-end residential applications.',
            features: [
              'Exceptional sound absorption (NRC up to 0.9)',
              'Fire resistant (Class A rated)',
              'Easy maintenance and cleaning',
              'Corrosion resistant',
              'Custom color options',
              'Antimicrobial properties',
              'Durable and long-lasting'
            ],
            specifications: {
              'Material': 'Aluminium Alloy (AA 8011 / AA 3003 / AA 3105)',
              'Thickness': '0.5mm - 0.7mm',
              'Panel Width': '84mm, 100mm, 150mm (custom available)',
              'Panel Length': 'Up to 6000mm',
              'Finish': 'Powder Coated / Anodized',
              'Colors Available': 'RAL & Custom Colors',
              'Weight': '3.5kg - 5.5kg per sq. meter',
              'Fire Rating': 'Class A as per ASTM E84'
            },
            materialOptions: [
              'Aluminium Alloy AA 8011',
              'Aluminium Alloy AA 3003',
              'Aluminium Alloy AA 3105',
              'Galvanized Steel (IS-14246-1995)'
            ],
            applications: [
              'Corporate Offices',
              'Airports & Transportation Hubs',
              'Hospitals & Healthcare Facilities',
              'Educational Institutions',
              'Retail Spaces',
              'Hospitality Venues',
              'Government Buildings'
            ],
            images: [
              'https://via.placeholder.com/800x600',
              'https://via.placeholder.com/800x600',
              'https://via.placeholder.com/800x600',
              'https://via.placeholder.com/800x600'
            ],
            brochureUrl: '#'
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching product detail:', error);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <>
        <PageHeader 
          title="Product Details" 
          backgroundImage="https://via.placeholder.com/1920x400"
          subtitle="Loading product information..."
        />
        <Container className="py-5">
          <LoadingSpinner />
        </Container>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <PageHeader 
          title="Product Not Found" 
          backgroundImage="https://via.placeholder.com/1920x400"
          subtitle="The requested product could not be found"
        />
        <Container className="py-5 text-center">
          <h3>Sorry, we couldn't find the product you're looking for.</h3>
          <Button href="/products" variant="primary" className="mt-3">
            View All Products
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader 
        title={product.name} 
        backgroundImage="https://via.placeholder.com/1920x400"
        subtitle={`Category: ${product.category}`}
      />
      
      <section className="product-detail-section py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="product-gallery">
                <div className="main-image mb-3">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="img-fluid rounded shadow"
                  />
                </div>
                <Row>
                  {product.images.slice(1, 4).map((image, index) => (
                    <Col md={4} key={index} className="mb-3">
                      <img 
                        src={image} 
                        alt={`${product.name} - Image ${index + 2}`} 
                        className="img-fluid rounded shadow"
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="lead mb-4">{product.description}</p>
                
                <h4 className="mt-4 mb-3">Key Features</h4>
                <ul className="feature-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <FaCheck className="text-success me-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  <Button 
                    href={product.brochureUrl} 
                    variant="primary" 
                    className="me-3"
                  >
                    <FaDownload className="me-2" /> Download Brochure
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outline-primary"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          
          <div className="product-tabs mt-5">
            <Tab.Container defaultActiveKey="specifications">
              <Nav variant="tabs" className="mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="specifications">Specifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="materials">Material Options</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="applications">Applications</Nav.Link>
                </Nav.Item>
              </Nav>
              
              <Tab.Content>
                <Tab.Pane eventKey="specifications">
                  <Table striped bordered hover responsive>
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={index}>
                          <td width="30%" className="fw-bold">{key}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab.Pane>
                
                <Tab.Pane eventKey="materials">
                  <h4 className="mb-3">Available Material Options</h4>
                  <ul className="material-list">
                    {product.materialOptions.map((material, index) => (
                      <li key={index} className="mb-2">
                        <FaCheck className="text-success me-2" />
                        {material}
                      </li>
                    ))}
                  </ul>
                </Tab.Pane>
                
                <Tab.Pane eventKey="applications">
                  <h4 className="mb-3">Ideal Applications</h4>
                  <Row>
                    {product.applications.map((application, index) => (
                      <Col md={4} className="mb-3" key={index}>
                        <div className="application-item p-3 bg-light rounded">
                          {application}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>
      
      {/* Related Products section could be added here */}
    </>
  );
};

export default ProductDetail;
