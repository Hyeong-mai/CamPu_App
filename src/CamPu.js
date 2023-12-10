import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import MainButton from "./Components/MainButton";
import Slide from "./Components/Slide";
import Footer from "./Components/Footer";
import MainPage from "./Pages/MainPage";
import MapPage from "./Pages/MapPage";
import EmptyPage from "./Pages/EmptyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CamPuStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgba(242, 244, 245);
`;
const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CamPu = () => {
  return (
    <Router>
      <CamPuStyle>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/empty" element={<EmptyPage />} />
          </Routes>
        </Content>
      </CamPuStyle>
    </Router>
  );
};
export default CamPu;
