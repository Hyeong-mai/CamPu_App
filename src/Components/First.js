import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FirstStyle = styled.div`
  width: 90%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
`;
const ButtonStyle = styled.button`
  width: 47%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  justify-content: center;
  border-radius: 20px;
  border: none;
  background-color: orange;
  border-radius: 20px;
  border: none;
`;
const Button2Style = styled.button`
  flex-direction: column;
  width: 47%;
  padding: 10px;
  height: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: orange;
  border-radius: 20px;
  border: none;
`;
const Title = styled.h2`
  color: white;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`;
const SubTitle = styled.h5`
  color: white;
  margin: 0;
`;

const First = () => {
  const navigate = useNavigate();

  const goToMapPage = () => {
    navigate("/map"); // 'map'은 MapPage의 라우트 경로입니다.
  };

  return (
    <FirstStyle>
      <ButtonStyle onClick={goToMapPage}>
        <Title>가지러 가기</Title>
        <SubTitle>가까운 픽업존 찾기</SubTitle>
      </ButtonStyle>
      <Button2Style>
        <Title>여기로 부루기</Title>
        <SubTitle>가까운 픽업존 찾기</SubTitle>
      </Button2Style>
    </FirstStyle>
  );
};

export default First;
