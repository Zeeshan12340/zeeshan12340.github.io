import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Social from './Social';

const styles = {
  nameStyle: {
    font: 'normal 500 3em "Anonymous Pro", sans-serif',
  },
  infoStyle: {
    font: 'normal 200 1.2em "Sans Francisco"',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    background: "linear-gradient(135deg,rgb(30, 30, 45),rgb(32, 32, 60))",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  return (
    <div style={styles.mainContainer}>
      <Fade>
        <h1 style={styles.nameStyle}>Zeeshan1234</h1>
        <br />
        <h2 style={styles.infoStyle}>Motivated Cyber Security Professional focused on low level research and finding bugs.</h2>
        <br />
        <br />
        <Social />
      </Fade>
    </div>
  );
}

export default Home;
