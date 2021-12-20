import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import styled, { keyframes } from 'styled-components';

const RouterWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  /* position: absolute; */
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.brown};

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavToggle = styled.ul`
  width: 25%;
  padding: 0;

  text-align: center;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.brown};
  /* display: inline; */
`;

const ToggleHeader = styled.li`
  list-style: none;
  font-size: 1.8rem;
  position: relative;
  z-index: 10;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.green};
    -webkit-text-stroke: 0.5px black;
    /* ${setTreatmentList(true)} */
  }
`;

const ToggleTreatmentHeader = styled.li`
  list-style: none;
  font-size: 1.8rem;
  position: relative;
  z-index: 10;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.green};
    -webkit-text-stroke: 0.5px black;
  }
`;

const ToggleGroup = styled.ul`
  display: ${({ treatmentList, aboutList }) =>
    treatmentList || aboutList ? 'flex' : 'none'};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 0.5s linear;
  transition: 0.9s ease-in-out;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: solid black 3px; */
  padding: 0px;
  font-size: 1.6rem;
  /* background-color: ${({ theme }) => theme.colors.lcream}; */
`;

const ToggleLink = styled.li`
  transition: 0.9s ease-in-out;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const ContactHeader = styled.li`
  list-style: none;
  font-size: 1.8rem;
  position: relative;
  z-index: 10;
`;

const ALink = styled(Link)`
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.brown};
  /* margin: 30px; */
  border: 2px solid red;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.green};
    -webkit-text-stroke: 0.5px black;
  }
`;

const BLink = styled(ScrollLink)`
  background: transparent;
  color: black;
  cursor: pointer;
  font-size: 1.6rem;
  -webkit-text-stroke: 0.75px black;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.green};
    -webkit-text-stroke: 0.5px black;
    text-decoration: underline;
  }
`;

const LinkStyle = styled.a`
  /* margin-left: 15px; */
  background: transparent;
  color: black;
  cursor: pointer;
  font-size: 1.6rem;
  -webkit-text-stroke: 0.75px black;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.green};
    -webkit-text-stroke: 0.5px black;
    text-decoration: underline;
  }
`;

const HiddenLink = styled(ScrollLink)`
  background: transparent;
  cursor: pointer;
  padding: 15px;
  visibility: ${({ home }) => (home ? 'visible' : 'hidden')};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {

    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default function Nav({
  site,
  home,
  toggleTreatments,
  toggleAbout,
  treatmentList,
  aboutList,
  onMouseEnter,
  onMouseLeave,
  handleAboutMouseOver,
  handleTreatmentMouseOver,
}) {
  let page = site.split('/')[3];

  if (!page) {
    return (
      <RouterWrapper>
        <NavToggle>
          <ToggleHeader>
            <HiddenLink to="home" home={home}>
              TOP
            </HiddenLink>
          </ToggleHeader>
        </NavToggle>
        <NavToggle>
          <ToggleHeader
            onClick={toggleTreatments}
            onMouseOver={handleTreatmentMouseOver}
            onMouseLeave={onMouseLeave}
          >
            TREATMENTS
          </ToggleHeader>
          <ToggleGroup
            treatmentList={treatmentList}
            onMouseOver={handleTreatmentMouseOver}
            onMouseLeave={onMouseLeave}
          >
            <ToggleLink onMouseLeave={onMouseLeave}>
              <BLink to="article1" onClick={toggleTreatments}>
                Treatment 1
              </BLink>
            </ToggleLink>
            <ToggleLink>
              <BLink to="article2" onClick={toggleTreatments}>
                Treatment 2
              </BLink>
            </ToggleLink>
            <ToggleLink>
              <BLink to="article3" onClick={toggleTreatments}>
                Treatment 3
              </BLink>
            </ToggleLink>
          </ToggleGroup>
        </NavToggle>
        <NavToggle>
          <ToggleHeader
            onClick={toggleAbout}
            onMouseLeave={onMouseLeave}
            onMouseOver={handleAboutMouseOver}
          >
            ABOUT US
          </ToggleHeader>
          <ToggleGroup
            aboutList={aboutList}
            onClick={toggleAbout}
            onMouseLeave={onMouseLeave}
            onMouseOver={handleAboutMouseOver}
            value="2"
          >
            <ToggleLink>
              <ALink href="/contact">
                <LinkStyle onClick={toggleAbout}>Dr. Keith Dickson</LinkStyle>
              </ALink>
            </ToggleLink>
            <ToggleLink>
              <ALink href="">
                <LinkStyle>Dr. Bruce Dickson</LinkStyle>
              </ALink>
            </ToggleLink>
            <ToggleLink>
              <ALink href="">
                <LinkStyle>About The Clinic</LinkStyle>
              </ALink>
            </ToggleLink>
          </ToggleGroup>
        </NavToggle>
        <NavToggle>
          <ContactHeader>
            <ALink href="/contact">
              <LinkStyle>CONTACT</LinkStyle>
            </ALink>
          </ContactHeader>
        </NavToggle>
      </RouterWrapper>
    );
  } else {
    return (
      <RouterWrapper>
        <ALink href="/">HOME</ALink>
      </RouterWrapper>
    );
  }
}