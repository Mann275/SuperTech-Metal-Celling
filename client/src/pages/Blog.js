import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegComment } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Components
import PageHeader from '../components/common/PageHeader';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Staggered children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    // In a real app, this would be an API call
    const timeoutId = setTimeout(() => {
      const mockPosts = [
        {
          id: '1',
          title: 'Acoustic Solutions for Modern Office Spaces',
          excerpt: 'Discover how metal ceiling systems can provide superior acoustic performance while maintaining aesthetic appeal in contemporary office environments.',
          content: 'Full article content here...',
          date: '2024-06-15',
          author: 'Rajesh Kumar',
          authorPosition: 'Technical Director',
          category: 'technical',
          comments: 8
        },
        {
          id: '2',
          title: 'Sustainability in Metal Ceiling Manufacturing',
          excerpt: 'Learn about SUPERTECH\'s commitment to environmentally responsible manufacturing processes and how our products contribute to green building certifications.',
          content: 'Full article content here...',
          date: '2024-06-10',
          author: 'Priya Singh',
          authorPosition: 'Sustainability Manager',
          category: 'sustainability',
          comments: 5
        },
        {
          id: '3',
          title: 'Custom Ceiling Design Trends for 2024',
          excerpt: 'Explore the latest architectural trends in custom metal ceiling designs and how they\'re transforming interior spaces across various sectors.',
          content: 'Full article content here...',
          date: '2024-05-28',
          author: 'Amit Patel',
          authorPosition: 'Design Consultant',
          category: 'design',
          comments: 12
        }
      ];

      // Extract unique categories
      const extractedCategories = [...new Set(mockPosts.map(post => post.category))];
      
      setPosts(mockPosts);
      setCategories(extractedCategories);
      setRecentPosts(mockPosts.slice(0, 3));
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
              <h1 className="display-4 fw-bold mb-3">Industry Insights & News</h1>
              <p className="lead">Stay informed with the latest trends, innovations, and best practices in metal ceiling systems</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <section className="blog-section py-5">
        <Container>
          <Row>
            {/* Main Content Area */}
            <Col lg={8} className="mb-4 mb-lg-0">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {/* Category Filter */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="category-filter mb-4"
                  >
                    <div className="d-flex flex-wrap align-items-center">
                      <h5 className="me-3 mb-2">Filter by:</h5>
                      <Button 
                        variant={selectedCategory === 'all' ? 'primary' : 'outline-primary'}
                        className="me-2 mb-2"
                        onClick={() => setSelectedCategory('all')}
                      >
                        All
                      </Button>
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                          className="me-2 mb-2 text-capitalize"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Blog Posts */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {filteredPosts.length === 0 ? (
                      <div className="text-center py-5">
                        <h4>No posts found in this category.</h4>
                        <Button 
                          variant="primary" 
                          className="mt-3"
                          onClick={() => setSelectedCategory('all')}
                        >
                          View All Posts
                        </Button>
                      </div>
                    ) : (
                      filteredPosts.map((post) => (
                        <motion.div 
                          key={post.id}
                          variants={fadeInUp}
                          className="mb-5"
                        >
                          <Card className="blog-card border-0 shadow-sm">
                            <Row className="g-0">
                              <Col md={12}>
                                <Card.Body className="p-4">
                                  <div className="blog-meta mb-2">
                                    <span className="text-primary text-capitalize">{post.category}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-muted">
                                      <FaRegCalendarAlt className="me-1" />
                                      {formatDate(post.date)}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span className="text-muted">
                                      <FaRegComment className="me-1" />
                                      {post.comments} Comments
                                    </span>
                                  </div>
                                  <Card.Title as="h3" className="mb-3">
                                    <Link 
                                      to={`/blog/${post.id}`}
                                      className="text-decoration-none text-dark"
                                    >
                                      {post.title}
                                    </Link>
                                  </Card.Title>
                                  <Card.Text className="mb-4">
                                    {post.excerpt}
                                  </Card.Text>
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="author-info">
                                      <p className="mb-0 fw-bold">{post.author}</p>
                                      <small className="text-muted">{post.authorPosition}</small>
                                    </div>
                                    <Button 
                                      as={Link}
                                      to={`/blog/${post.id}`}
                                      variant="outline-primary"
                                    >
                                      Read More
                                    </Button>
                                  </div>
                                </Card.Body>
                              </Col>
                            </Row>
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </motion.div>
                  
                  {/* Pagination - For demonstration only */}
                  {filteredPosts.length > 0 && (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="pagination-wrapper mt-5 d-flex justify-content-center"
                    >
                      <Button variant="outline-secondary" className="me-2" disabled>Previous</Button>
                      <Button variant="primary" className="me-2">1</Button>
                      <Button variant="outline-primary" className="me-2">2</Button>
                      <Button variant="outline-secondary">Next</Button>
                    </motion.div>
                  )}
                </>
              )}
            </Col>
            
            {/* Sidebar */}
            <Col lg={4}>
              <div className="blog-sidebar">
                {/* Search */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="sidebar-widget mb-4"
                >
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="widget-title mb-3">Search</h4>
                      <div className="search-form">
                        <div className="input-group">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search articles..." 
                          />
                          <Button variant="primary">
                            <i className="fas fa-search"></i>
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
                
                {/* Recent Posts */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="sidebar-widget mb-4"
                >
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="widget-title mb-4">Recent Posts</h4>
                      {recentPosts.map((post) => (
                        <div key={post.id} className="recent-post mb-3">
                          <div className="recent-post-info">
                            <h6 className="mb-1">
                              <Link 
                                to={`/blog/${post.id}`}
                                className="text-decoration-none text-dark"
                              >
                                {post.title}
                              </Link>
                            </h6>
                            <small className="text-muted">
                              <FaRegCalendarAlt className="me-1" />
                              {formatDate(post.date)}
                            </small>
                          </div>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </motion.div>
                
                {/* Categories */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="sidebar-widget mb-4"
                >
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="widget-title mb-4">Categories</h4>
                      <ul className="list-unstyled categories-list">
                        {categories.map((category) => (
                          <li key={category} className="mb-2">
                            <Button
                              variant="link"
                              className="text-capitalize p-0 text-decoration-none"
                              onClick={() => setSelectedCategory(category)}
                            >
                              {category}
                              <span className="badge bg-light text-dark ms-2">
                                {posts.filter(post => post.category === category).length}
                              </span>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
                
                {/* Subscribe CTA */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="sidebar-widget"
                >
                  <Card className="border-0 shadow-sm bg-primary text-white">
                    <Card.Body className="p-4">
                      <h4 className="widget-title mb-3">Newsletter</h4>
                      <p>Subscribe to our newsletter to receive the latest updates and industry insights.</p>
                      <div className="subscribe-form mt-4">
                        <div className="input-group mb-3">
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Your email address" 
                            aria-label="Your email address" 
                          />
                        </div>
                        <Button variant="light" className="w-100">
                          Subscribe Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section py-5 bg-light">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="mb-3">Have Questions About Our Products?</h2>
            <p className="lead mb-4">Our technical team is ready to assist you with expert advice and solutions.</p>
            <Button as={Link} to="/contact" variant="primary" size="lg">Contact Our Experts</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
