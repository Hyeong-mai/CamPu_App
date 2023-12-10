import styled from "styled-components";
import Map from "../Components/Map";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative; // 추가된 속성
`;
const PopUp = styled.div`
  width: 100%;
  height: 88%;
  position: absolute;
  z-index: 1;
  bottom: 0; // 상단에 위치
  left: 50%; // 컨테이너의 중앙에 위치
  transform: translate(-50%);
  background-color: white;
  box-shadow: 1px 0px 2px 2px rgba(0, 0, 0, 0.2);
`;
const CloseButton = styled.button`
  color: orange;
  font-weight: bold;
  width: 50px;
  height: 10%;
  font-size: 20px;
  border: none;
  background-color: white;
`;
const SearchBox = styled.div`
  border-radius: 20px;
  width: 80%;
  height: 8%;
  background-color: white;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 10px; // 상단에 위치
  left: 50%; // 컨테이너의 중앙에 위치
  transform: translateX(-50%); // X축으로 50%만큼 이동
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  color: rgba(180, 180, 180);
`;
const List = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
const Item = styled.button`
  width: 100%;
  background-color: black;
  min-height: 150px;
  margin-top: 10px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 0.0005px solid rgba(240, 240, 240);
  padding: 0;
`;
const CarImg = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Car = styled.img`
  width: 100%;
`;
const Detail = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  padding-left: 30px;
`;
const SmallText = styled.div`
  margin-top: 10px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background-color: rgba(245, 245, 245);
  color: gray;
  font-size: 10px;
`;
const CarName = styled.p`
  font-weight: bold;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  color: black;
  width: 50px;
  height: 20px;
  background-color: rgba(230, 230, 230);
`;
const Price = styled.h2`
  color: orange;
`;
const MapPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToMapPage = () => {
    navigate("/empty"); // 'map'은 MapPage의 라우트 경로입니다.
  };
  return (
    <MapContainer>
      <Map setOpen={setOpen} />
      <SearchBox>
        <h5>검색어를 입력해주세요</h5>
      </SearchBox>
      {open ? (
        <PopUp>
          <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
          <List>
            <Item onClick={goToMapPage}>
              <CarImg>
                <Car src="image/niro.png" />
                <SmallText>220 ~ 240원/km</SmallText>
              </CarImg>
              <Detail>
                <CarName>NIRO EV</CarName>
                <Box>편도 가능</Box>
                <Price>20,000원</Price>
              </Detail>
            </Item>
            <Item>
              <CarImg>
                <Car src="image/cona.webp" />
                <SmallText>220 ~ 240원/km</SmallText>
              </CarImg>
              <Detail>
                <CarName>CONA EV</CarName>
                <Box>편도 가능</Box>
                <Price>15,000원</Price>
              </Detail>
            </Item>
            <Item>
              <CarImg>
                <Car src="image/lay.png" />
                <SmallText>220 ~ 240원/km</SmallText>
              </CarImg>
              <Detail>
                <CarName>RAY EV</CarName>
                <Box>편도 가능</Box>
                <Price>10,000원</Price>
              </Detail>
            </Item>
          </List>
        </PopUp>
      ) : null}
    </MapContainer>
  );
};

export default MapPage;
