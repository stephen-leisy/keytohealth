import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const ToggleLink = styled.li`
  position: absolute;
  margin-top: 30vh;
  z-index: 20;
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
  /* visibility: hidden; */
  list-style: none;
  border: solid black 2px;
  background-color: ${({ theme }) => theme.colors.cream};
`;

const BLink = styled(ScrollLink)`
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  padding: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.lbrown};
    -webkit-text-stroke: 0.5px black;
  }
`;

export default function Dropdown({ menuOpen }) {
  return (
    <>
      <ToggleLink treatmentList={treatmentList} menuOpen={menuOpen}>
        <BLink to="article1">Treatment 1</BLink>
      </ToggleLink>
      <ToggleLink treatmentList={treatmentList}>
        <BLink to="article2">Treatment 2</BLink>
      </ToggleLink>
      <ToggleLink treatmentList={treatmentList}>
        <BLink to="article3">Treatment 3</BLink>
      </ToggleLink>
    </>
  );
}
