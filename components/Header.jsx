import Nav from './Nav';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  /* position: ${({ tipTop }) => (tipTop ? 'fixed' : 'absolute')}; */
  position: fixed;
  margin-top: ${({ top }) => (top ? '0px' : '80px')};
  height: ${({ top }) => (top ? '8vh' : '12vh')};
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.cream}; */
  /* background: rgba(255, 209, 173, 0.7); */
  background: ${({ top, theme }) =>
    top ? theme.colors.cream : 'rgba(255, 209, 173, 0.5)'};
  transition: 0.3s ease-in-out;
  border-bottom: 5px solid black;
  border-top: 5px solid black;
  padding-bottom: 0;
  margin-bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: row; */
  z-index: 10;

  @media screen and (max-width: 414px) {
    height: ${({ top }) => (top ? '12vh' : '16vh')};
  }

  /* &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
  } */

  /* @supports (position: sticky) {
    position: fixed;
    top: 0;
    width: 100%;
  } */
`;

const Border = styled.div`
  height: 98%;
  width: 100%;

  /* background-color: ${({ theme }) => theme.colors.cream}; */
  /* background: rgba(255, 209, 173, 0.7); */
`;

const Logo = styled.h2`
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};
  font-size: 2.8rem;
  margin-left: 4%;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;

    background: transparent;
  }

  @media screen and (max-width: 414px) {
    padding-top: ${({ top }) => (top ? '-5px' : '5px')};
  }
`;

const Header = ({ top }) => {
  return (
    <ContainerHeader top={top}>
      <Logo>Key To Health</Logo>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
      <Nav />
    </ContainerHeader>
  );
};

export default Header;

// : React.FunctionComponent<{ top: boolean }>
