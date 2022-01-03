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
          image={
            'https://images.theconversation.com/files/423138/original/file-20210924-19-1ryf4ed.jpg?ixlib=rb-1.1.0&rect=8%2C25%2C5742%2C3802&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'
          }
        />
      </CardWrapper>
    </PageWrapper>
  );
}
