/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
// import { CardWrapper } from './CardElements';
import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.colors.green}; */
  background-color: ${({ theme }) => theme.colors.magnolia};
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-top: black solid 3px; */
  @media screen and (max-width: 1200px) {
    height: 130vh;
  }

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 140vh;
  }
`;

const Border = styled.div`
  height: 90%;
  width: 90%;
  -moz-box-shadow: 0 0 10px #000;
  -webkit-box-shadow: 0 0 10px #000;
  box-shadow: 0 0 10px #000;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;

const HeaderBorder = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

const CardHeader = styled.h2`
  height: 7vh;
  width: 100%;
  font-size: 5vh;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mandarin};
  -webkit-text-stroke: 0.75px black;

  text-align: right;

  @media screen and (max-width: 1200px) {
    height: 100%;
    width: 80%;
    padding: 0px;
    text-align: center;
  }

  /* padding-top: 80px; */
`;

const MeatBorder = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  /* @media screen and (max-width: 414px) {
    height: 200vh;
  } */
`;

const ImageWrapper = styled.div`
  /* margin: 0 auto; */
  height: 80%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  background-size: cover;
  -moz-box-shadow: 0 0 10px #000;
  -webkit-box-shadow: 0 0 10px #000;
  box-shadow: 0 0 10px #000;
  /* margin-bottom: 40px; */

  @media screen and (max-width: 1200px) {
    /* height: 80vh;
    width: 80vh; */
  }

  @media screen and (max-width: 1000px) {
    /* height: 160%;
    width: 100%; */
  }

  /* @media screen and (max-width: 550px) {
    height: 50vh;
    width: 50vh;
  } */

  @media screen and (max-width: 414px) {
    max-width: 80vh;
  }
`;

const Goods = styled.div`
  width: 40%;
  height: 70vh;
  /* margin-top: 30px; */
  margin-left: 30px;
  margin-right: 15px;

  @media screen and (max-width: 1200px) {
    width: 90%;
    /* height: 70vh; */
    margin-bottom: 0px;
    margin-left: 0px;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 0;
    margin-right: 0;
    /* padding-top: 60px; */
    height: 100%;
    width: 80%;
  }
`;

const CardText = styled.p`
  font-size: 2vh;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

export default function Card({ title, id, image }) {
  return (
    <CardWrapper id={id}>
      <Border>
        <MeatBorder>
          <Goods>
            <HeaderBorder>
              <CardHeader>{title}</CardHeader>
            </HeaderBorder>
            <CardText></CardText>
          </Goods>
          <ImageWrapper>
            <Image src={image}></Image>
          </ImageWrapper>
        </MeatBorder>
      </Border>
    </CardWrapper>
  );
}
