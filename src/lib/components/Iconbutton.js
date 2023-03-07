import React from "react";
import styled from "styled-components";

const Iconbutton = ({ onClick, icon }) => {
  return (
    <Container onClick={onClick}>
      <Image src={`./icons/${icon}.png`} />
    </Container>
  );
};

const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Image = styled.img`
  width: 60%;
  height: 60%;
`;

export default Iconbutton;
