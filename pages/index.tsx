import React, { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import Welcome from '../components/Hero';
import Card from '../components/Card';
import ReverseCard from '../components/ReverseCard';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const [currentScroll, setCurrentScroll] = React.useState(0);
  const [top, setTop] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollY = useScrollPosition(30 /*frames per second*/);

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
  }, [scrollY]);
  return (
    <>
      <Welcome />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Card
        title={'Advance Allergy Therapeutics'}
        id={'article1'}
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
      <ReverseCard
        title={'Treatment Two'}
        id={'article2'}
        image={'http://placekitten.com/300/400'}
      />
      <Card
        title={'Treatment Three'}
        id={'article3'}
        image={'http://placekitten.com/300/400'}
        text={''}
        moreText={''}
        textThree={''}
        textFour={''}
      />
    </>
  );
}
