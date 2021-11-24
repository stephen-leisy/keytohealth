import Nav from './Nav';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  position: fixed;
  margin-top: 40px;
  height: 10vh;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.cream}; */
  background: rgba(255, 209, 173, 0.7);
  border-bottom: 5px solid black;
  border-top: 5px solid black;
  padding-bottom: 0;
  margin-bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: row; */
  z-index: 10;
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
  font-size: 3rem;
  margin-left: 4%;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;

    background: transparent;
  }
`;

export default function Header() {
  return (
    <ContainerHeader>
      <Logo>Key To Health</Logo>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
      <Nav />
    </ContainerHeader>
  );
}
