import React from 'react';
import HeadInfo from './HeadInfo';
import Header from './Header';
import Welcome from './Hero';
import Footer from './Footer';
import Card from './Card';
import ReverseCard from './ReverseCard';
import styled from 'styled-components';

const Page = styled.main`
  height: 100%;
  width: 100%;
  /* border: solid 10px black; */
  margin: 0;
  padding: 0;
`;

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <Page>
      <HeadInfo />
      <Header />
      <Welcome />
      {children}

      <Card
        title={'Treatment One'}
        id={'article1'}
        image={
          'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/01/How-to-Be-Happy_1296x728-header-1024x575.jpg?w=1155&h=1528'
        }
      />
      <ReverseCard
        title={'Treatment Two'}
        id={'article2'}
        image={
          'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/exercise_0.jpeg'
        }
      />
      <Card
        title={'Treatment Three'}
        id={'article3'}
        image={
          'https://images.theconversation.com/files/423138/original/file-20210924-19-1ryf4ed.jpg?ixlib=rb-1.1.0&rect=8%2C25%2C5742%2C3802&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'
        }
      />
      <Footer />
    </Page>
  );
};

export default Layout;
