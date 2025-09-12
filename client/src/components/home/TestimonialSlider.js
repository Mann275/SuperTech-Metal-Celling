import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      text: "SUPERTECH Metal Ceilings delivered exceptional quality products for our corporate office. Their metal ceiling solutions have transformed our workspace, providing both aesthetic appeal and functional benefits.",
      author: "Rajesh Patel",
      position: "Facilities Manager, TechCorp India",
    },
    {
      id: 2,
      text: "We've worked with SUPERTECH on multiple projects, and their dedication to precision and innovation is remarkable. Their sustainable approach to manufacturing aligns perfectly with our corporate values.",
      author: "Krish Kavathia",
      position: "Project Director, BuildRight Construction",
    },
    {
      id: 3,
      text: "The acoustic performance of SUPERTECH's metal ceiling systems has significantly improved the environment in our conference halls. Their team provided excellent support throughout the project lifecycle.",
      author: "Anil Verma",
      position: "CEO, InfraTech Solutions",
    }
  ];

  return (
    <Carousel
      indicators={false}
      interval={5000}
      className="testimonial-carousel"
    >
      {testimonials.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <Card className="testimonial-card border-0 shadow mx-auto" style={{ maxWidth: '800px' }}>
            <Card.Body className="p-5 text-center">
              <FaQuoteLeft size={40} className="text-primary mb-4" />
              <Card.Text className="lead mb-5">"{testimonial.text}"</Card.Text>
              <div className="testimonial-author">
                <h5 className="mb-1">{testimonial.author}</h5>
                <p className="text-muted">{testimonial.position}</p>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
