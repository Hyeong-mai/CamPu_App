import React from "react";
import styled from "styled-components";

const SlideStyle = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; // 추가된 속성
`;

const SlideButton = styled.button`
  min-width: 150px; // 변경된 속성
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 20px;
  border: none;
  background-color: white;
  padding: 0;
  overflow: hidden;
`;
const CarWrap = styled.div`
  width: 100%;
  height: 55%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DeTail = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  justify-content: center;
  flex-direction: column;
  height: 45%;
`;
const Car = styled.img`
  width: 100%;
`;
const Name = styled.h1`
  font-weight: bold;

  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  margin-bottom: 10px;
`;
const Price = styled.h5`
  font-weight: bold;
  color: orange;

  margin: 0;
`;
const Slide = () => {
  return (
    <SlideStyle>
      <SlideButton>
        <CarWrap>
          <Car src="image/lay.png" />
        </CarWrap>
        <DeTail>
          <Name>RAY EV</Name>
          <Price>5,000원</Price>
        </DeTail>
      </SlideButton>
      <SlideButton>
        <CarWrap>
          <Car src="image/niro.png" />
        </CarWrap>
        <DeTail>
          <Name>NIRO EV</Name>
          <Price>5,000원</Price>
        </DeTail>
      </SlideButton>
      <SlideButton>
        <CarWrap>
          <Car src="image/cona.webp" />
        </CarWrap>
        <DeTail>
          <Name>CONA EV</Name>
          <Price>5,000원</Price>
        </DeTail>
      </SlideButton>
    </SlideStyle>
  );
};

export default Slide;
