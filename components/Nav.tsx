import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const RouterWrapper = styled.div`
  width: 60%;
  display: flex;

  justify-content: flex-end;
  margin-right: 4%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const RouterLinks = styled.ul`
  text-decoration: none;
  justify-content: flex-start;
  list-style: none;

  color: ${({ theme }) => theme.colors.brown};
`;

const RouterLink = styled.li`
  text-decoration: none;
  /* justify-content: flex-start; */
  color: ${({ theme }) => theme.colors.brown};
  font-size: 2rem;
  font-family: 'Abril Fatface', cursive;
`;

const ALink = styled(Link)`
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.brown};

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.lbrown};
    -webkit-text-stroke: 0.5px black;
  }
`;

const BLink = styled(ScrollLink)`
  background: transparent;
  cursor: pointer;
  padding: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.lbrown};
    -webkit-text-stroke: 0.5px black;
  }
`;

export default function Nav() {
  return (
    <RouterWrapper>
      <RouterLinks>
        <RouterLink>
          <BLink to="home">HOME</BLink>
          <BLink to="article1">THING 1</BLink>
          <BLink to="article2">THING 2</BLink>
          <BLink to="article3">THING 3</BLink>
          {/* <ALink href="/about">ABOUT</ALink> */}
        </RouterLink>
      </RouterLinks>
    </RouterWrapper>
  );
}
