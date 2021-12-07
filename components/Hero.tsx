import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

const Wrapper = styled.main`
  height: 100%;
  width: 100vw;
  padding: 0;
  margin: 0;

  /* background-color: ${({ theme }) => theme.colors.lcream}; */
`;

const BackImage = styled.div`
  height: 100vh;
  width: 100vw;
  display: block;
  background-image: url(${'https://www.patriciagreencellars.com/assets/client/Image/AndersonFamily/AndersonFamilyVineyard.png'});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  /* position: absolute; */
  z-index: 1;

  @media screen and (max-height: 600px) {
    width: 100vh;
    height: 190vh;
  }

  @media screen and (max-width: 414px) {
    background-position: 60% 50%;
    background-attachment: scroll;
    width: 100vw;
    height: 190vh;
  }

  /* @media screen and (max-height: 600px) {
    height: 200vh;
    width: 100vh;
  } ; */
`;

const CardPlaceing = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 414px) {
    align-items: flex-end;
  }
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

  @media screen and (max-height: 600px) {
    width: 100vh;
    height: 80vh;
  }

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 90vh;
  }

  /* @media screen and (max-height: 900px) {
    width: 110vh;
    height: 50vh;
  } */
`;

const Header = styled.h2`
  width: 90%;
  font-size: 2rem;
  font-family: 'Abril Fatface', cursive;
  color: ${({ theme }) => theme.colors.green};
  margin: 0;
  display: flex;
  justify-content: center;
`;

const About = styled.p`
  width: 80%;
  font-size: 1.6rem;
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ContactButton = styled.button`
  height: 60px;
  width: 160px;
  margin-top: 20px;
  font-family: 'Abril Fatface', cursive;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.green};

  background-color: ${({ theme }) => theme.colors.cream};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brown};
    -webkit-text-stroke: 0.75px black;
  }
`;

export default function Welcome() {
  const router = useRouter();
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
              <ContactButton onClick={() => router.push('/contact')}>
                CONTACT US
              </ContactButton>
            </WelcomeCard>
          </FadeIn>
        </CardPlaceing>
      </BackImage>
    </Wrapper>
  );
}
