import styled from 'styled-components';

const Main = styled.main`
  height: 110vh;
  width: 100%;
  background-color: #f5f5f5;

  @media screen and (max-width: 1280px) {
    height: 200vh;
  }
`;

const ContactTopSpace = styled.div`
  /* margin-top: 150px; */
  height: 10%;
  width: 100%;
`;

const ContactWrapper = styled.div`
  height: 90%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const ContactSectionWrapper = styled.div`
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;

const ContactContentLeft = styled.div`
  margin-top: 20px;
  height: 90%;
  width: 40%;
  display: flex;
  margin-left: 30px;

  justify-content: center;
  align-items: center;
`;

const ContactContentRight = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ContactHeader = styled.h1`
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};
`;

const SubHeader = styled.h2`
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.brown};
`;

const ContactInfo = styled.p``;

const MapWrapper = styled.div`
  /* padding-top: 40px; */
  border: 6px black solid;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const contact = () => {
  return (
    <Main>
      <ContactTopSpace></ContactTopSpace>
      <ContactWrapper>
        <ContactSectionWrapper>
          <ContactContentLeft>
            <MapWrapper>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.862874368643!2d-123.20074524908615!3d45.21011027899621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549548ddc025ac4b%3A0x8464c7695af0c6dd!2s119%20NE%203rd%20St%2C%20McMinnville%2C%20OR%2097128!5e0!3m2!1sen!2sus!4v1640117300088!5m2!1sen!2sus"
                width="600"
                height="450"
                // style="border:0"
                // allowfullscreen=""
                loading="lazy"
              ></iframe>
            </MapWrapper>
          </ContactContentLeft>
          <ContactContentRight>
            <ContactHeader>Schedule an Appointment</ContactHeader>
            <SubHeader>Office Hours</SubHeader>
            <ContactInfo>Mon-Thurs: 8am - 5pm</ContactInfo>
            <ContactInfo>Sat-Sun: Closed</ContactInfo>
            <SubHeader>Contact Info</SubHeader>
            <ContactInfo>Phone: (503) 434-6515</ContactInfo>
            <SubHeader>Address</SubHeader>
            <ContactInfo>119 NE 3rd St</ContactInfo>
            <ContactInfo>McMinnville, OR 97128</ContactInfo>
            <ContactInfo>United States</ContactInfo>
          </ContactContentRight>
        </ContactSectionWrapper>
      </ContactWrapper>
    </Main>
  );
};

export default contact;
