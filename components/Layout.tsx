import React, { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import HeadInfo from './HeadInfo';
import Header from './Header';
import dynamic from 'next/dynamic';
import Welcome from './Hero';
import Footer from './Footer';
// import Card from './Card';
import ReverseCard from './ReverseCard';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Card = dynamic(() => import('./Card'));

const Page = styled.main`
  height: 100%;
  width: 100%;
  /* border: solid 10px black; */
  margin: 0;
  padding: 0;
`;

const Layout: React.FunctionComponent<{ children: any; site: string }> = ({
  children,
  site,
}) => {
  const [currentScroll, setCurrentScroll] = React.useState(0);
  const [top, setTop] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition(30 /*frames per second*/);
  // const [url, setUrl] = useState('');
  // const [site, setSite] = useState('');

  const scrollHeader = (scrollY) => {
    if (scrollY > 20) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    scrollHeader(scrollY);

    // setSite(url.split('/')[3]);
  }, [scrollY]);

  return (
    <Page>
      <HeadInfo />
      <Header top={top} toggle={toggle} site={site} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      {children}

      <Footer />
    </Page>
  );
};

export default Layout;
