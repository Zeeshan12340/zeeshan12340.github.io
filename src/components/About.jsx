import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import about from '../constants/about.json';

const styles = {
  introTextContainer: {
    flexDirection: 'column',
    font: 'normal 200 1.2em "Sans Francisco"',
  },
  introImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  imageStyle: {
    width: '200px',
    height: '200px',
    borderRadius: '90%',
    objectFit: 'cover',
    display: 'flex'
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown>{text}</ReactMarkdown>
  );

  useEffect(() => {
    setData(about)
  }, []);

  return (
    <div>
      <Header title={header} />
      <div className="section-content-container" style={{
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col className="mt-4" style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" style={styles.imageStyle} />
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </div>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
