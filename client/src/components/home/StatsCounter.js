import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// Note: Need to install additional packages:
// npm install react-countup react-visibility-sensor

const StatsCounter = ({ stats }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setViewPortEntered(true);
    }
  };

  return (
    <Row className="justify-content-center text-center">
      {stats.map((stat, index) => (
        <Col lg={3} md={6} sm={6} className="mb-4 mb-lg-0" key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="stat-item"
          >
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <h2 className="display-4 fw-bold mb-2">
                <CountUp
                  start={0}
                  end={viewPortEntered ? parseFloat(stat.value.replace(/,/g, '')) : 0}
                  duration={2.5}
                  separator=","
                  suffix="+"
                  useEasing={true}
                  useGrouping={true}
                />
              </h2>
            </VisibilitySensor>
            <p className="stat-label m-0 fs-5">{stat.label}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default StatsCounter;
