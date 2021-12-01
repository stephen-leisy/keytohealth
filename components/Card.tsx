/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
// import { CardWrapper } from './CardElements';
import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 140vh;
  }
`;

const Border = styled.div`
  height: 80%;
  width: 80%;

  margin-top: 10%;
`;

const HeaderBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CardHeader = styled.h2`
  height: 7vh;
  font-size: 3rem;
  font-weight: bold;

  /* padding-top: 80px; */
`;

const MeatBorder = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  height: 90%;
  width: 60%;
  margin-bottom: 40px;
`;

const Goods = styled.div`
  width: 40%;
  height: 70vh;
  margin-bottom: 40px;
  margin-left: 20px;
`;

const CardText = styled.p`
  height: 70%;
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
