import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./particles.json";

const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const darkMode = useDarkMode(true);
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
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          {init && <Particles options={particlesOptions}/>}
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
