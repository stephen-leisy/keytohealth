import React from 'react';
import Card from '../components/Card';

export default function treatmentTwo() {
  return (
    <>
      <Card
        title={'Advance Allergy Therapeutics'}
        id={'article2'}
        image={
          'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/exercise_0.jpeg'
        }
        text={
          'AAT or Advanced Allergy Therapeutics offers a highly effective and unique approach to treating several health conditions and symptoms associated with sensitivities and allergies. In fact, AAT is a precision-based therapy that treats the organ system involved in reactive behavior. Albeit this doesnt treat the immune system instead focuses on the relationship between organ systems and symptoms in order to produce long-term and rapid results.'
        }
        moreText={
          'In McMinnville, Advanced Allergy Therapeutics emerges in the 21st century. It is a science with 3000 years old traditional acupuncture principles offering effective treatment of symptoms associated with sensitivities and allergies.'
        }
        textThree={'No avoidance'}
        textFour={'No herbal remedies'}
      />
    </>
  );
}
