import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  position: fixed;
  margin-top: ${({ top }) => (top ? '0px' : '80px')};
  height: ${({ treatmentList, aboutList }) =>
    treatmentList || aboutList ? '20vh' : '10vh'};

  width: 100%;
  background: ${({ top, theme }) =>
    top ? '#fff' : 'rgba(255, 209, 173, 0.5)'};
  transition: 0.2s ease-in-out;
  border-bottom: 5px solid black;
  border-top: 5px solid black;
  padding-bottom: 0;
  margin-bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 414px) {
    height: ${({ top }) => (top ? '20vh' : '24vh')};
  }

  @media screen and (max-height: 1000px) {
    height: ${({ treatmentList, aboutList }) =>
      treatmentList || aboutList ? '250px' : '100px'};
  }
`;

const Border = styled.div`
  height: 98%;
  width: 100%;
`;

const Logo = styled.li`
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};
  font-size: 2.5rem;
  margin-left: 4%;
  list-style: none;
  position: relative;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    color: ${({ theme }) => theme.colors.green};
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;

    background: transparent;
  }

  @media screen and (max-width: 414px) {
    padding-top: 15px;
  }
`;

const Header = ({ top, toggle, site, home }) => {
  const [treatmentList, setTreatmentList] = useState(false);
  const [aboutList, setAboutList] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleAboutMouseOver = () => {
    setAboutList(true);
    console.log('word up');
  };

  const handleTreatmentMouseOver = () => {
    setTreatmentList(true);
    console.log('eh?');
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setAboutList(false);

      setTreatmentList(false);
    } else {
      setAboutList(false);
      setTreatmentList(false);
    }
  };

  return (
    <ContainerHeader
      top={top}
      treatmentList={treatmentList}
      aboutList={aboutList}
    >
      <Logo>Key To Health</Logo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <Nav
        site={site}
        home={home}
        treatmentList={treatmentList}
        aboutList={aboutList}
        onMouseLeave={onMouseLeave}
        handleAboutMouseOver={handleAboutMouseOver}
        handleTreatmentMouseOver={handleTreatmentMouseOver}
      />
    </ContainerHeader>
  );
};

export default Header;
