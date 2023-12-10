import React from "react";
import styled from "styled-components";
import First from "./First";
import Seconds from "./Seconds";

const MainButtonStyle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MainButton = () => {
  return (
    <MainButtonStyle>
      <First />
      <Seconds />
    </MainButtonStyle>
  );
};

export default MainButton;
