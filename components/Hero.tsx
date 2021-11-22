import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 50px;
  color: orange;
  background-color: green;
`;

export default function Welcome() {
  return (
    <div>
      <Header>Key To Health</Header>
    </div>
  );
}
