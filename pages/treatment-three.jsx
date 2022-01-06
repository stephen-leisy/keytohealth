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

export default function treatmentThree() {
  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          title={'Treatment Three'}
          id={'article3'}
          image={'http://placekitten.com/300/400'}
        />
      </CardWrapper>
    </PageWrapper>
  );
}
