/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
// import { CardWrapper } from './CardElements';
import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.colors.green}; */
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-top: black solid 3px; */

  @media screen and (max-width: 414px) {
    width: 100vh;
    height: 180vh;
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

  margin-top: 10px;
`;

const HeaderBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CardHeader = styled.h2`
  height: 7vh;
  font-size: 3rem;
  font-weight: bold;
  /* color: #fff; */

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
`;

const Image = styled.img`
  height: 80%;
  width: 50%;

  @media screen and (max-width: 414px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1200px) {
    height: 80vh;
    width: 80vh;
  }
`;

const Goods = styled.div`
  width: 40%;
  height: 70vh;
  margin-bottom: 40px;
  margin-right: 20px;

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
          <Image src={image}></Image>
        </MeatBorder>
      </Border>
    </CardWrapper>
  );
}
