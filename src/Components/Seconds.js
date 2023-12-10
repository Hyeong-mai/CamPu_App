import React from "react";
import styled from "styled-components";

const SecondsStyle = styled.div`
  width: 90%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;
const ButtonStyle = styled.button`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 20px;
  border: none;
  background-color: white;
`;
const Title = styled.h3`
  color: orange;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`;
const SubTitle = styled.h5`
  color: gray;
  margin: 0;
  float: left;
`;
const Seconds = () => {
  return (
    <SecondsStyle>
      <ButtonStyle>
        <Title>편도로 타기</Title>
        <SubTitle>픽업존 찾기</SubTitle>
      </ButtonStyle>
      <ButtonStyle>
        <Title>편도로 타기</Title>
        <SubTitle>픽업존 찾기</SubTitle>
      </ButtonStyle>
      <ButtonStyle>
        <Title>편도로 타기</Title>
        <SubTitle>픽업존 찾기</SubTitle>
      </ButtonStyle>
    </SecondsStyle>
  );
};

export default Seconds;
