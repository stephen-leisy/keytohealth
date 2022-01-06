import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

const Wrapper = styled.main`
  height: 110vh;
  width: 100%;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;

  @media screen and (max-height: 600px) {
    width: 100%;
    height: 190vh;
  }
  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 220vh;
  }

  @media screen and (max-height: 400px) {
    height: 800px;
  }

  /* background-color: ${({ theme }) => theme.colors.lcream}; */
`;

const BackImage = styled.div`
  height: 110vh;
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

  @media screen and (max-width: 414px) {
    background-position: 60% 50%;
    background-attachment: scroll;
    width: 100%;
    height: 190vh;
  }

  @media screen and (max-height: 600px) {
    height: 200vh;
    width: 100%;
  }

  @media screen and (max-height: 400px) {
    height: 800px;
  }
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
    height: 60%;
  }
`;

const WelcomeCard = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  /* background: rgba(255, 209, 173, 0.5); */
  background: rgba(237, 230, 242, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: #003249 3px solid;
  border-radius: 10px;

  @media screen and (max-width: 414px) {
    width: 100%;
    height: 40vh;
    border-top: black 1px solid;
    /* border-bottom: none; */
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
  color: ${({ theme }) => theme.colors.prussianBlue};
  /* -webkit-text-stroke: 0.5px black; */
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const About = styled.p`
  width: 80%;
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
`;

const ContactButton = styled.button`
  height: 60px;
  width: 160px;
  margin-top: 20px;
  font-family: 'Abril Fatface', cursive;
  font-size: 1rem;
  border: ${({ theme }) => theme.colors.mandarin} 5px solid;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.mandarin};

  &:hover {
    cursor: pointer;
    /* color: ${({ theme }) => theme.colors.brown}; */
    color: ${({ theme }) => theme.colors.magnolia};
    background-color: ${({ theme }) => theme.colors.mandarin};
    transition: 0.4s ease-in-out;
    /* font-size: 1.1rem; */
    /* -webkit-text-stroke: 0.75px black; */
  }

  @media screen and (max-height: 500px) {
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
              <Header>Unlock your healths full potential</Header>
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
