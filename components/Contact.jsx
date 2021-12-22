import React from 'react';
import styled from 'styled-components';

const ContactHeader = styled.h1`
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};
`;

const SubHeader = styled.h2`
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.brown};
`;

const ContactInfo = styled.p``;

const ContactPhone = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export default function Contact() {
  return (
    <>
      <ContactHeader>Contact Us</ContactHeader>
      <SubHeader>Office Hours</SubHeader>
      <ContactInfo>Mon-Thurs: 8am - 5pm</ContactInfo>
      <ContactInfo>Sat-Sun: Closed</ContactInfo>
      <SubHeader>Contact Info</SubHeader>
      <ContactPhone href="tel:5034346515">Phone: (503) 434-6515</ContactPhone>
      <SubHeader>Address</SubHeader>
      <ContactInfo>119 NE 3rd St</ContactInfo>
      <ContactInfo>McMinnville, OR 97128</ContactInfo>
      <ContactInfo>United States</ContactInfo>
    </>
  );
}
