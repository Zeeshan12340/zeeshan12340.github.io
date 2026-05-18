// Color values live in :root in index.css so CSS, styled-components, and
// inline styles all draw from one palette. This object just maps theme
// keys to those custom properties.
const theme = {
  background: 'var(--bg)',
  color: 'var(--text)',
  accentColor: 'var(--accent)',
  cardBackground: 'var(--card-bg)',
  cardFooterBackground: 'var(--card-footer-bg)',
  cardBorderColor: 'var(--card-border)',
  navbarTheme: {
    linkColor: 'var(--nav-link)',
    linkHoverColor: 'var(--nav-link-hover)',
    linkActiveColor: 'var(--nav-link-active)',
  },
  bsPrimaryVariant: 'dark',
  bsSecondaryVariant: 'light',
};

export default theme;
