/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
// import { CardWrapper } from './CardElements';
import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.colors.cream}; */
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-top: black solid 3px; */

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 160vh;
  }
`;

const Border = styled.div`
  height: 80%;
  width: 80%;
  -moz-box-shadow: 0 0 10px #000;
  -webkit-box-shadow: 0 0 10px #000;
  box-shadow: 0 0 10px #000;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10%;
`;

const HeaderBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;

    width: 100%;
  }
`;

const CardHeader = styled.h2`
  height: 7vh;
  width: 100%;
  font-size: 3rem;
  font-weight: bold;

  @media screen and (max-width: 1200px) {
    height: 100%;
    width: 80%;
    padding: 0px;
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
    flex-direction: column-reverse;
  }
`;

const Image = styled.img`
  height: 90%;
  width: 60%;
  margin-bottom: 40px;

  @media screen and (max-width: 1200px) {
    height: 80vh;
    width: 80vh;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 0;
  }
`;

const Goods = styled.div`
  width: 40%;
  height: 70vh;
  margin-bottom: 40px;
  margin-left: 20px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    /* height: 70vh; */
    margin-bottom: 0px;
    margin-left: 0px;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 0;
    margin-right: 0;
    padding-top: 60px;
    height: 50vh;
    width: 80%;
  }
`;

const CardText = styled.p`
  height: 70%;
`;

const ShadowBox = styled.div`
  -moz-box-shadow: 0 0 10px #000;
  -webkit-box-shadow: 0 0 10px #000;
  box-shadow: 0 0 10px #000;

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

export default function Card({ title, id, image }) {
  return (
    // const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    //   threshold: 0.25, // Default is 0
    //   onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
    //     // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

    //     unobserve(); // To stop observing the current target element
    //     observe(); // To re-start observing the current target element
    //   },
    //   onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
    //     // Triggered when the target enters the viewport
    //   },
    //   onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
    //     // Triggered when the target leaves the viewport
    //   },
    //   // More useful options...
    // });

    // return <div ref={observe}>{inView ? "Hello, I am 🤗" : "Bye, I am 😴"}</div>;
    <CardWrapper id={id}>
      <Border>
        <MeatBorder>
          <Image src={image}></Image>
          <Goods>
            <HeaderBorder>
              <CardHeader>{title}</CardHeader>
            </HeaderBorder>
            <CardText></CardText>
          </Goods>
        </MeatBorder>
      </Border>
    </CardWrapper>
  );
}
