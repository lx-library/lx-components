import React from "react";
import styled from "styled-components";

const Tabs = ({ data = [], updateIsActive, onLogout }) => {
  return (
    <Container>
      <Outline>
        {data.map((item, index) => {
          return (
            <Tab
              key={index}
              isActive={item.isActive}
              onClick={() => updateIsActive(index)}
            >
              {item.label}
            </Tab>
          );
        })}
        <LogoutButton onClick={onLogout}>logout</LogoutButton>
      </Outline>
    </Container>
  );
};
const Container = styled.div`
  padding: 10px;
  height: 72px;
`;
const Tab = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  background-color: ${(props) =>
    props.isActive ? "#0BC9CD" : "rgba(255,255,255, .2)"};
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 10px;
`;
const Outline = styled.div`
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #9cc4b2;
`;
const LogoutButton = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  background-color: #ef233c;
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 10px;
  position: absolute;
  right: 10px;
`;

export default Tabs;
