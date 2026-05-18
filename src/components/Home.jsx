import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Social from './Social';
import about from '../constants/about.json';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <Fade triggerOnce>
          <img className="hero__avatar" src={about.imageSource} alt="Zeeshan" />
          <h1 className="hero__name">Zeeshan1234</h1>
          <div className="hero__about">
            <ReactMarkdown>{about.about}</ReactMarkdown>
          </div>
          <div className="hero__cta">
            <Link className="accent-btn accent-btn--solid" to="/projects">
              View Projects
            </Link>
            <Link className="accent-btn" to="/blog">
              Read the Blog
            </Link>
          </div>
          <Social />
        </Fade>
      </section>
    </div>
  );
}

export default Home;
