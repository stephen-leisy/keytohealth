import { getMiddlewareManifest } from 'next/dist/client/route-loader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/Layout.tsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    small: 'green',
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
