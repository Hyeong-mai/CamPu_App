import React from "react";
import styled from "styled-components";
const EmptyPageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const Nav = styled.img`
  height: 100%;
  position: relative;
`;

const Footer = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  bottom: 0;
`;
const Div = styled.div`
  width: 95%;
  height: 95%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;
const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: 95%;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40%;
  height: 70%;
  background-color: orange;
  border-radius: 30px;
`;
const Time = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: orange;
  margin: 0;
`;
const Km = styled.p`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin: 0;
  margin-left: 10px;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const Price = styled.p`
  margin: 0px;
  color: gray;
  font-weight: bold;
  margin-top: 10px;
`;
const EmptyPage = () => {
  return (
    <EmptyPageStyle>
      <Footer>
        <Div>
          <Detail>
            <Wrap>
              <Time>20분</Time>
              <Km>8.5Km</Km>
            </Wrap>
            <Price>20,000원</Price>
          </Detail>
          <Button>
            <h2>대여하기</h2>
          </Button>
        </Div>
      </Footer>
      <Nav src="image/Nav.jpg"></Nav>
    </EmptyPageStyle>
  );
};
export default EmptyPage;
