import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 140vh;
  }
`;

const FooterHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  padding-top: 0px;
  color: ${({ theme }) => theme.colors.cream};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterHeader>Footer</FooterHeader>
    </FooterWrapper>
  );
}
