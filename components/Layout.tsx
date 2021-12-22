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
  const [whichPage, setWhichPage] = useState('');
  const [home, setHome] = useState(false);
  const scrollY = useScrollPosition(30 /*frames per second*/);
  // const [url, setUrl] = useState('');
  // const [site, setSite] = useState('');

  let page = site.split('/')[3];

  const scrollHeader = (scrollY) => {
    if (
      scrollY > 20 ||
      whichPage == 'contact' ||
      whichPage == 'treatment-one' ||
      whichPage == 'treatment-two' ||
      whichPage == 'treatment-three' ||
      whichPage == 'dr-bruce-dickson' ||
      whichPage == 'dr-keith-dickson'
    ) {
      setTop(true);
      console.log('truth');
    } else {
      setTop(false);
      console.log('false');
    }
  };

  const showHome = (scrollY) => {
    if (scrollY > 800) {
      setHome(true);
    } else {
      setHome(false);
    }
  };

  // console.log('why: ', home);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    scrollHeader(scrollY);
    showHome(scrollY);
    setWhichPage(page);

    // setSite(url.split('/')[3]);
  });

  return (
    <Page>
      <HeadInfo />
      <Header top={top} toggle={toggle} site={site} home={home} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      {children}

      <Footer />
    </Page>
  );
};

export default Layout;
