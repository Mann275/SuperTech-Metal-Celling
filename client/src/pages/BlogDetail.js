import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegComment, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaUser, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Components
import PageHeader from '../components/common/PageHeader';
import LoadingSpinner from '../components/common/LoadingSpinner';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    // In a real app, this would be API calls
    setTimeout(() => {
      // Mock post data
      const mockPost = {
        id,
        title: 'Acoustic Solutions for Modern Office Spaces',
        content: `
          <p class="lead">Metal ceiling systems offer a perfect blend of aesthetics and functionality, making them an ideal choice for modern office spaces that require superior acoustic performance.</p>
          
          <p>In today's open-concept office designs, controlling noise levels has become a critical factor in creating productive workspaces. Unwanted noise can significantly reduce concentration, increase stress levels, and decrease overall employee productivity. This article explores how SUPERTECH's metal ceiling solutions address these acoustic challenges while maintaining the aesthetic appeal desired by architects and interior designers.</p>
          
          <h3>Understanding Office Acoustics</h3>
          
          <p>Office acoustics involves managing three key elements:</p>
          
          <ol>
            <li><strong>Sound Absorption</strong> - Reducing echo and reverberation within a space</li>
            <li><strong>Sound Blocking</strong> - Preventing noise transmission between spaces</li>
            <li><strong>Sound Masking</strong> - Adding background sound to reduce distraction from other noises</li>
          </ol>
          
          <p>Metal ceiling systems, particularly perforated panels with acoustic backing, primarily address the first element—sound absorption. When properly designed, these systems can achieve Noise Reduction Coefficient (NRC) ratings of up to 0.90, meaning they absorb 90% of the sound that strikes them.</p>
          
          <h3>Benefits of Metal Ceiling Systems for Acoustic Control</h3>
          
          <p>SUPERTECH's metal ceiling solutions offer several advantages for acoustic management in office environments:</p>
          
          <ul>
            <li><strong>Customizable Perforation Patterns</strong> - Different perforation sizes and patterns can be tailored to target specific sound frequencies</li>
            <li><strong>Acoustic Backing Options</strong> - Various acoustic backing materials can be selected to enhance sound absorption properties</li>
            <li><strong>Integrated Solutions</strong> - Our systems can incorporate lighting, HVAC, and fire safety elements without compromising acoustic performance</li>
            <li><strong>Durability</strong> - Unlike fabric or fiber-based acoustic treatments, metal ceilings maintain their acoustic properties over time and are easy to clean</li>
          </ul>
          
          <blockquote>
            "The acoustic performance of a space is not just about reducing noise—it's about creating an environment where communication is clear and distraction is minimized. This is where thoughtfully designed metal ceiling systems excel."
            <footer>Dr. Ananya Sharma, Acoustic Consultant</footer>
          </blockquote>
          
          <h3>Case Study: Tech Innovation Center</h3>
          
          <p>A recent SUPERTECH project for a major technology company in Bangalore demonstrates the effectiveness of our acoustic solutions. The client's requirements included:</p>
          
          <ul>
            <li>Open collaborative areas requiring minimal echo</li>
            <li>Private meeting spaces with high sound isolation</li>
            <li>Phone booths with superior acoustic control</li>
            <li>A consistent aesthetic throughout diverse functional areas</li>
          </ul>
          
          <p>Our solution involved a combination of linear metal ceilings with 20% perforation in open areas and perforated metal panels with specialized acoustic backing in meeting rooms. Post-installation acoustic testing revealed a 45% reduction in reverberation time in open areas and an STC (Sound Transmission Class) rating of 48 between adjacent meeting rooms—exceeding the client's requirements.</p>
          
          <h3>Design Considerations</h3>
          
          <p>When implementing metal ceiling systems for acoustic control, several factors should be considered:</p>
          
          <ol>
            <li><strong>Room Geometry</strong> - The size and shape of the space affect acoustic behavior</li>
            <li><strong>Surface Materials</strong> - Other surfaces in the room (walls, floors, furniture) also impact acoustics</li>
            <li><strong>Ceiling Height</strong> - Higher ceilings may require additional acoustic treatment</li>
            <li><strong>Functional Requirements</strong> - Different activities require different acoustic solutions</li>
          </ol>
          
          <p>SUPERTECH's engineering team works closely with architects and acoustic consultants to develop holistic solutions that address all these factors, ensuring optimal acoustic performance without compromising design vision.</p>
          
          <h3>Conclusion</h3>
          
          <p>As workplace design continues to evolve, the importance of effective acoustic management remains paramount. Metal ceiling systems offer a sophisticated solution that balances aesthetic requirements with acoustic performance. By investing in quality acoustic treatments like SUPERTECH's metal ceiling systems, organizations can create environments that enhance productivity, improve communication, and contribute to employee well-being.</p>
          
          <p>For more information about our acoustic solutions for office spaces, contact our technical team or visit our showroom to experience the difference firsthand.</p>
        `,
        image: 'https://via.placeholder.com/1200x600',
        date: '2024-06-15',
        author: 'Rajesh Kumar',
        authorPosition: 'Technical Director',
        category: 'technical',
        comments: [
          {
            id: 1,
            name: 'Priya Sharma',
            date: '2024-06-16',
            content: 'This article was extremely helpful. We\'re currently renovating our office space and struggling with noise issues. Will definitely be looking into your perforated ceiling solutions!'
          },
          {
            id: 2,
            name: 'Arjun Mehta',
            date: '2024-06-17',
            content: 'Great insights on the technical aspects of acoustic management. Could you provide more information on how these systems perform in spaces with high ceilings (>4m)?'
          },
          {
            id: 3,
            name: 'Sunita Patel',
            date: '2024-06-18',
            content: 'We installed SUPERTECH metal ceilings in our open office last year and have seen a significant improvement in acoustic comfort. The customized perforation pattern also adds a unique design element to our space.'
          }
        ],
        tags: ['Acoustics', 'Office Design', 'Metal Ceilings', 'Sound Absorption', 'Workplace Productivity']
      };
      
      // Mock recent posts
      const mockRecentPosts = [
        {
          id: '2',
          title: 'Sustainability in Metal Ceiling Manufacturing',
          image: 'https://via.placeholder.com/400x300',
          date: '2024-06-10'
        },
        {
          id: '3',
          title: 'Custom Ceiling Design Trends for 2024',
          image: 'https://via.placeholder.com/400x300',
          date: '2024-05-28'
        },
        {
          id: '4',
          title: 'Fire Safety Standards for Metal Ceiling Systems',
          image: 'https://via.placeholder.com/400x300',
          date: '2024-05-15'
        }
      ];
      
      // Mock categories
      const mockCategories = ['technical', 'design', 'sustainability', 'industry'];
      
      setPost(mockPost);
      setRecentPosts(mockRecentPosts);
      setCategories(mockCategories);
      setLoading(false);
    }, 1000);
  }, [id]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <>
        <PageHeader 
          title="Blog Details" 
          backgroundImage="https://via.placeholder.com/1920x400"
          subtitle="Loading article..."
        />
        <Container className="py-5">
          <LoadingSpinner />
        </Container>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <PageHeader 
          title="Article Not Found" 
          backgroundImage="https://via.placeholder.com/1920x400"
          subtitle="The requested article could not be found"
        />
        <Container className="py-5 text-center">
          <h3>Sorry, we couldn't find the article you're looking for.</h3>
          <Button as={Link} to="/blog" variant="primary" className="mt-3">
            View All Articles
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader 
        title={post.title} 
        backgroundImage="https://via.placeholder.com/1920x400"
        subtitle={`Published on ${formatDate(post.date)}`}
      />
      
      <section className="blog-detail-section py-5">
        <Container>
          <Row>
            {/* Main Content Area */}
            <Col lg={8} className="mb-5 mb-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="blog-featured-image mb-4">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded shadow"
                  />
                </div>
                
                <div className="blog-meta mb-4">
                  <span className="badge bg-primary text-capitalize py-2 px-3 me-2">
                    {post.category}
                  </span>
                  <span className="text-muted me-3">
                    <FaRegCalendarAlt className="me-1" />
                    {formatDate(post.date)}
                  </span>
                  <span className="text-muted">
                    <FaRegComment className="me-1" />
                    {post.comments.length} Comments
                  </span>
                </div>
                
                <div className="author-info d-flex align-items-center mb-4">
                  <div className="author-avatar me-3">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <FaUser size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="author-details">
                    <h6 className="mb-0">{post.author}</h6>
                    <p className="text-muted mb-0">{post.authorPosition}</p>
                  </div>
                </div>
                
                <div className="blog-content mb-5">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                
                {/* Tags */}
                <div className="blog-tags mb-5">
                  <h5 className="mb-3">Tags</h5>
                  <div className="d-flex flex-wrap">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="badge bg-light text-dark py-2 px-3 me-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="blog-share mb-5">
                  <h5 className="mb-3">Share This Article</h5>
                  <div className="social-share">
                    <Button variant="outline-primary" className="me-2 mb-2">
                      <FaFacebookF className="me-2" /> Facebook
                    </Button>
                    <Button variant="outline-info" className="me-2 mb-2">
                      <FaTwitter className="me-2" /> Twitter
                    </Button>
                    <Button variant="outline-primary" className="me-2 mb-2" style={{ backgroundColor: '#0077B5', borderColor: '#0077B5', color: 'white' }}>
                      <FaLinkedinIn className="me-2" /> LinkedIn
                    </Button>
                    <Button variant="outline-danger" className="mb-2">
                      <FaPinterestP className="me-2" /> Pinterest
                    </Button>
                  </div>
                </div>
                
                {/* Comments */}
                <div className="blog-comments mb-5">
                  <h4 className="mb-4">Comments ({post.comments.length})</h4>
                  
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="comment-item mb-4">
                      <Card className="border-0 shadow-sm">
                        <Card.Body className="p-4">
                          <div className="d-flex">
                            <div className="comment-avatar me-3">
                              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                <FaUser size={20} className="text-primary" />
                              </div>
                            </div>
                            <div className="comment-content">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="mb-0">{comment.name}</h5>
                                <span className="text-muted small">{formatDate(comment.date)}</span>
                              </div>
                              <p className="mb-0">{comment.content}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
                
                {/* Comment Form */}
                <div className="comment-form">
                  <h4 className="mb-4">Leave a Comment</h4>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <Form>
                        <Row>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>Name</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <FaUser />
                                </span>
                                <Form.Control 
                                  type="text" 
                                  placeholder="Your Name" 
                                  required 
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <FaEnvelope />
                                </span>
                                <Form.Control 
                                  type="email" 
                                  placeholder="Your Email" 
                                  required 
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-3">
                          <Form.Label>Comment</Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={5} 
                            placeholder="Your Comment" 
                            required 
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Post Comment
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </motion.div>
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
                      {recentPosts.map((recentPost) => (
                        <div key={recentPost.id} className="recent-post d-flex mb-3">
                          <div className="recent-post-image me-3">
                            <img 
                              src={recentPost.image} 
                              alt={recentPost.title}
                              className="img-fluid rounded"
                              width="80"
                              height="60"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="recent-post-info">
                            <h6 className="mb-1">
                              <Link 
                                to={`/blog/${recentPost.id}`}
                                className="text-decoration-none text-dark"
                              >
                                {recentPost.title}
                              </Link>
                            </h6>
                            <small className="text-muted">
                              <FaRegCalendarAlt className="me-1" />
                              {formatDate(recentPost.date)}
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
                            <Link
                              to={`/blog?category=${category}`}
                              className="text-capitalize text-decoration-none"
                            >
                              {category}
                              <span className="badge bg-light text-dark ms-2">
                                {/* In a real app, you would count posts per category */}
                                {Math.floor(Math.random() * 10) + 1}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
                
                {/* Tags */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="sidebar-widget mb-4"
                >
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="widget-title mb-4">Popular Tags</h4>
                      <div className="tags-cloud">
                        {post.tags.map((tag, index) => (
                          <Link
                            key={index}
                            to={`/blog?tag=${tag}`}
                            className="badge bg-light text-dark text-decoration-none py-2 px-3 me-2 mb-2 d-inline-block"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
                
                {/* CTA */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="sidebar-widget"
                >
                  <Card className="border-0 shadow-sm bg-primary text-white">
                    <Card.Body className="p-4 text-center">
                      <h4 className="widget-title mb-3">Need Expert Advice?</h4>
                      <p>Contact our technical team for personalized ceiling solutions.</p>
                      <Button
                        as={Link}
                        to="/contact"
                        variant="light"
                        className="mt-2"
                      >
                        Get In Touch
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Related Articles */}
      <section className="related-articles-section py-5 bg-light">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2>Related <span className="text-primary">Articles</span></h2>
            <p className="lead">Explore more insights on metal ceiling solutions</p>
          </motion.div>
          
          <Row>
            {/* In a real app, these would be filtered based on categories or tags */}
            {recentPosts.map((relatedPost) => (
              <Col lg={4} md={6} className="mb-4" key={relatedPost.id}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <Card className="blog-card h-100 border-0 shadow-sm">
                    <div className="blog-image-container">
                      <Card.Img variant="top" src={relatedPost.image} />
                    </div>
                    <Card.Body>
                      <div className="blog-meta mb-2">
                        <span className="text-muted">
                          <FaRegCalendarAlt className="me-1" />
                          {formatDate(relatedPost.date)}
                        </span>
                      </div>
                      <Card.Title as="h5" className="mb-3">
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className="text-decoration-none text-dark"
                        >
                          {relatedPost.title}
                        </Link>
                      </Card.Title>
                      <Button
                        as={Link}
                        to={`/blog/${relatedPost.id}`}
                        variant="outline-primary"
                        size="sm"
                      >
                        Read Article
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;
