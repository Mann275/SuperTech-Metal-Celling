import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = 'SUPERTECH Metal Ceilings | Premium Architectural Solutions';
  const defaultDescription = 'Leading manufacturer of premium metal ceilings, exterior louvers, cladding, and architectural solutions. Trusted by India\'s top architects and developers.';
  const defaultKeywords = 'metal ceilings India, ceiling contractors, architectural metal solutions, aluminum cladding, sustainable ceilings, exterior louvers, metal ceiling manufacturer, metal ceiling systems, commercial ceiling solutions';

  return (
    <Helmet>
      <title>{title ? `${title} | SUPERTECH Metal Ceilings` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SUPERTECH Metal Ceilings" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;