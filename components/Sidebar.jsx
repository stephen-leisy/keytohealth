import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export const SidebarLimits = styled.main`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #f8f0e3;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  overflow-x: visible;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  background: transparent;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};
`;

export const SidebarWrapper = styled.div`
  background-color: #f8f0e3;
`;

export const SidebarMenu = styled.ul`
  background-color: #f8f0e3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(ScrollLink)`
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

export const SocialLink = styled.button`
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

export default function Sidebar({ isOpen, toggle }) {
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
            <SidebarLink to="/contact" onClick={toggle}>
              CONTACT
            </SidebarLink>
            <SidebarLink to="home" onClick={toggle}>
              HOME
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarLimits>
    </>
  );
}
