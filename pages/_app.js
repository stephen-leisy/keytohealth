import { getMiddlewareManifest } from 'next/dist/client/route-loader';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/Layout.tsx';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-color: #f5f5f5;
  }
`;

const theme = {
  colors: {
    purple: '#7209b7',
    pink: '#f72585',
    blue: '#4cc9f0',
    offwhite: '#fefae0',
    brown: '#da7e37',
    lbrown: '#eda268',
    cream: '#ffd1ad',
    lcream: '#ffdcc2',
    green: '#245501',
    gold: '#D4AF37'
  },
};

export default function App({ Component, pageProps }) {
  const [site, setSite] = useState('');

  useEffect((site) => {
    setSite(document.URL);
  });
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Layout site={site}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
