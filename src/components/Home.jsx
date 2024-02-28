import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import home from '../constants/home.json';
import particlesOptions from "../particles.json";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";

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
  const [data, setData] = useState(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setData(home)
    if (init) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return data ? (
    <div style={styles.mainContainer}>
      {init && <Particles options={particlesOptions}/>}
      <Fade>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
      </Fade>
    </div>
  ) : <FallbackSpinner />;
}

export default Home;
