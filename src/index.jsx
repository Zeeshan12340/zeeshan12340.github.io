import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/themes';

const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <HashRouter>
          <MainApp />
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
