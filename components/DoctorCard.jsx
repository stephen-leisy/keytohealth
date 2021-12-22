import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 1000px;
  width: 100%;

  /* background-color: ${({ theme }) => theme.colors.cream}; */
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* @media screen and (max-height: 500px) {
    height: 200vh;
  } */
  @media screen and (max-width: 950px) {
    height: 1600px;
  }

  @media screen and (max-width: 414px) {
    /* height: 800px; */
    width: 100vh;
  }
`;

const ShadowBox = styled.div`
  -moz-box-shadow: 0 0 10px #000;
  -webkit-box-shadow: 0 0 10px #000;
  box-shadow: 0 0 10px #000;
  margin-top: 100px;
  width: 850px;

  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
  }

  @media screen and (max-width: 414px) {
    width: 90%;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  /* border: solid black 2px; */

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const DocPhoto = styled.img`
  height: 400px;
  width: 400px;
`;

const DocBio = styled.div`
  height: 400px;
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;

const DocResume = styled.div`
  height: 250px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media screen and (max-width: 950px) {
    width: 400px;
    height: 400px;

    padding: 0px;
  }
`;

const DocHeader = styled.h2`
  font-family: 'Abril Fatface', cursive;
`;

const Text = styled.p``;

export default function DoctorCard({ doctorName, bio, resume, image }) {
  return (
    <CardWrapper>
      <ShadowBox>
        <TopContainer>
          <DocPhoto src={image}></DocPhoto>
          <DocBio>
            <DocHeader>{doctorName}</DocHeader>
            <Text>{bio}</Text>
          </DocBio>
        </TopContainer>
        <DocResume>
          <Text>{resume}</Text>
        </DocResume>
      </ShadowBox>
    </CardWrapper>
  );
}
