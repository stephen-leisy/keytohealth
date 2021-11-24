import { getMiddlewareManifest } from 'next/dist/client/route-loader';
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
    /* background-color: black; */
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
    green : '#245501'
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
