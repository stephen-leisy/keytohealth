import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const PageWrapper = styled.main`
  height: 90%;
  width: 100%;
`;

const CardWrapper = styled.div`
  padding: 110px;
`;

export default function treatmentOne() {
  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          title={'Treatment One'}
          id={'article1'}
          image={
            'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/01/How-to-Be-Happy_1296x728-header-1024x575.jpg?w=1155&h=1528'
          }
        />
      </CardWrapper>
    </PageWrapper>
  );
}
