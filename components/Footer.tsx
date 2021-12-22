import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';

const FooterWrapper = styled.div`
  background-color: #000;
  height: 20vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 140vh;
  }
`;

const FooterSocial = styled.div`
  font-size: 3rem;
  font-weight: bold;
  padding-top: 0px;
  color: ${({ theme }) => theme.colors.cream};

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-left: 40px;
  }
`;

const FooterContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
  }
`;

const ContactInfo = styled.p`
  padding: 10px;
  color: #fff;
`;

const ContactPhone = styled.a`
  color: #fff;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterSocial>Key To Health</FooterSocial>
      <FooterContact>
        <ContactInfo>Mon-Thurs: 8am-5pm</ContactInfo>
        <ContactPhone href="tel:5034346515">Phone: (503) 434-6515</ContactPhone>
        <ContactInfo>119 NE 3rd St McMinnville, OR 97128</ContactInfo>
      </FooterContact>
    </FooterWrapper>
  );
}
