import React from 'react';
import HeadInfo from '../components/HeadInfo';
import Header from '../components/Header';
import Welcome from '../components/Hero.jsx';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <main>
      <HeadInfo />
      <Header />
      {children}
      <Welcome />
      <Footer />
    </main>
  );
}
