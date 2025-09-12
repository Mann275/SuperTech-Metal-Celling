import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="page-header py-5"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0'
      }}
    >
      <Container className="text-center text-white">
        <h1 className="display-4 fw-bold mb-3">{title}</h1>
        {subtitle && <p className="lead mb-4">{subtitle}</p>}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="breadcrumb-item active text-white" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </Container>
    </div>
  );
};

export default PageHeader;
