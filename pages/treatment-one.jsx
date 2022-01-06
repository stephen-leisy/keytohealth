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
          image={'http://placekitten.com/600/500'}
        />
      </CardWrapper>
    </PageWrapper>
  );
}
