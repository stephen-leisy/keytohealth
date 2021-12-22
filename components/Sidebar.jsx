import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const SidebarLimits = styled.main`
  position: fixed;
  z-index: 999;
  width: 50vw;
  height: 100%;
  background-color: #f8f0e3;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  overflow-x: visible;
  border-left: solid black 5px;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  background: transparent;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};
`;

const SidebarWrapper = styled.div`
  background-color: #f8f0e3;
`;

const SidebarMenu = styled.ul`
  background-color: #f8f0e3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f0e3;
  font-size: 3rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};

  -webkit-text-stroke: 2px black;

  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    -webkit-text-stroke: 1.7px black;
    /* color: ${({ theme }) => theme.colors.cream}; */

    text-decoration: underline;
  }
`;

const SocialLink = styled.button`
  color: #cf7968;
  font-size: 1.8rem;
  font-style: bold;
  padding-top: 20px;

  &:hover {
    color: gold;
    transition: all 0.2s ease-in-out;
    transform: scale(1.4);
  }
`;

const LinkStyle = styled.a`
  /* margin-left: 15px; */
  background: transparent;
  color: black;
  cursor: pointer;
  font-size: 2rem;
  -webkit-text-stroke: 0.75px black;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.green};
    -webkit-text-stroke: 0.5px black;
    text-decoration: underline;
  }
`;

const NextLink = styled(Link)``;

export default function Sidebar({ isOpen, toggle }) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(document.URL);
  }, []);

  let site = url.split('/')[3];

  if (!site) {
    return (
      <>
        <SidebarLimits isOpen={isOpen} onClick={toggle}>
          <Icon onCLick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <NextLink href="/treatment-one" onClick={toggle}>
                <LinkStyle>TREATMENT ONE</LinkStyle>
              </NextLink>
              <NextLink href="/treatment-two" onClick={toggle}>
                <LinkStyle>TREATMENT TWO</LinkStyle>
              </NextLink>
              <NextLink href="/treatment-three" onClick={toggle}>
                <LinkStyle>TREATMENT THREE</LinkStyle>
              </NextLink>
              <NextLink href="/contact" onClick={toggle}>
                <LinkStyle>DR. BRUCE DICKSON</LinkStyle>
              </NextLink>
              <NextLink href="/contact" onClick={toggle}>
                <LinkStyle>DR. KEITH DICKSON</LinkStyle>
              </NextLink>
              <NextLink href="/contact" onClick={toggle}>
                <LinkStyle>ABOUT THE CLINIC</LinkStyle>
              </NextLink>
              <NextLink href="/contact" onClick={toggle}>
                <LinkStyle>CONTACT</LinkStyle>
              </NextLink>
              <NextLink href="/" onClick={toggle}>
                <LinkStyle>HOME</LinkStyle>
              </NextLink>
            </SidebarMenu>
          </SidebarWrapper>
        </SidebarLimits>
      </>
    );
  }
  return (
    <>
      <SidebarLimits isOpen={isOpen} onClick={toggle}>
        <Icon onCLick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="article1" onClick={toggle}>
              THING 1
            </SidebarLink>
            <SidebarLink to="article2" onClick={toggle}>
              THING 2
            </SidebarLink>
            <SidebarLink to="article3" onClick={toggle}>
              THING 3
            </SidebarLink>
            <NextLink href="/contact" onClick={toggle}>
              CONTACT
            </NextLink>
            <NextLink href="/" onClick={toggle}>
              HOME
            </NextLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarLimits>
    </>
  );
}
