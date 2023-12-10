import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: orange;
`;
const Footer = () => {
  return (
    <FooterStyle>
      <h5>Copyright © CamPu</h5>
    </FooterStyle>
  );
};
export default Footer;
