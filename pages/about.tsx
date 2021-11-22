import styled from 'styled-components';

// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import { myHeader } from './indexElements.jsx';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function About() {
  return (
    <>
      <Title>About page</Title>
    </>
  );
}
