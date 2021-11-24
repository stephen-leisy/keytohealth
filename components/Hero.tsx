import React from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  /* background-color: ${({ theme }) => theme.colors.lcream}; */
`;

const BackImage = styled.div`
  height: 100vh;
  width: 100%;
  display: block;
  background-image: url(${'https://www.patriciagreencellars.com/assets/client/Image/AndersonFamily/AndersonFamilyVineyard.png'});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  /* position: absolute; */
  z-index: 1;
`;

const CardPlaceing = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeCard = styled.div`
  width: 80vh;
  height: 40vh;
  position: relative;
  background: rgba(255, 209, 173, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: black 1px solid;
`;

const Header = styled.h2`
  width: 90%;
  font-size: 2.6rem;
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};
  margin: 0;
  display: flex;
  justify-content: center;
`;

const About = styled.p`
  width: 80%;
  font-size: 1.8rem;
  margin: 0;

  display: flex;
  justify-content: center;
`;

const ContactButton = styled.button`
  height: 60px;
  width: 160px;
  margin-top: 20px;
  font-family: 'Abril Fatface', cursive;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.green};

  background-color: ${({ theme }) => theme.colors.cream};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brown};
    -webkit-text-stroke: 0.75px black;
  }
`;

export default function Welcome() {
  return (
    <Wrapper id={'home'}>
      <BackImage>
        <CardPlaceing>
          <FadeIn transitionDuration={2000}>
            <WelcomeCard>
              <Header>DR. DICKSON - KEY TO HEALTH</Header>
              <About>
                Offering non-invasive, natural therapies based on traditional,
                time tested methods blended with the most recent medical
                research.
              </About>
              <ContactButton>CONTACT US</ContactButton>
            </WelcomeCard>
          </FadeIn>
        </CardPlaceing>
      </BackImage>
    </Wrapper>
  );
}
