import React from 'react';
import HeadInfo from './HeadInfo';
import Header from './Header';
import Welcome from './Hero';
import Footer from './Footer';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <main>
      <HeadInfo />
      <Header />
      {children}
      <Welcome />
      <Footer />
    </main>
  );
};

export default Layout;
