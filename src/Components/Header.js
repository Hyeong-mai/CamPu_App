import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: white;
  color: orange;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Logo = styled.h1`
  margin-left: 20px;
`;
const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // 'map'은 MapPage의 라우트 경로입니다.
  };

  return (
    <HeaderStyle>
      <Logo onClick={goToHome}>CamPu</Logo>
    </HeaderStyle>
  );
};

export default Header;
