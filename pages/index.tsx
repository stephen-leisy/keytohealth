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
        image={
          'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/01/How-to-Be-Happy_1296x728-header-1024x575.jpg?w=1155&h=1528'
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
    </>
  );
}
