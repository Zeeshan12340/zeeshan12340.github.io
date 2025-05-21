import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Social from './Social';
import particlesOptions from "../particles.json";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const styles = {
  nameStyle: {
    fontSize: '3em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};


function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <div style={styles.mainContainer}>
      {init && <Particles options={particlesOptions} />}
      <Fade>
        <h1 style={styles.nameStyle}>Zeeshan1234</h1>
        <Social />
      </Fade>
    </div>
  );
}

export default Home;
