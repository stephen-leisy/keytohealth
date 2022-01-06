import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const PageWrapper = styled.main`
  height: 90%;
  width: 100%;
`;

const CardWrapper = styled.div`
  padding-top: 110px;
`;

export default function treatmentTwo() {
  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          title={'Advance Allergy Therapeutics'}
          id={'article2'}
          image={'http://placekitten.com/300/400'}
          text={
            'AAT or Advanced Allergy Therapeutics offers a highly effective and unique approach to treating several health conditions and symptoms associated with sensitivities and allergies. In fact, AAT is a precision-based therapy that treats the organ system involved in reactive behavior. Albeit this doesnt treat the immune system instead focuses on the relationship between organ systems and symptoms in order to produce long-term and rapid results.'
          }
          moreText={
            'In McMinnville, Advanced Allergy Therapeutics emerges in the 21st century. It is a science with 3000 years old traditional acupuncture principles offering effective treatment of symptoms associated with sensitivities and allergies.'
          }
          textThree={'No avoidance'}
          textFour={'No herbal remedies'}
        />
      </CardWrapper>
    </PageWrapper>
  );
}
