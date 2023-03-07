import React from "react";
import styled from "styled-components";
import { COLORS } from "../shared";
const Input = ({ value, onChange }) => {
  return (
    <Container>
      <InputHTML onChange={onChange} value={value}></InputHTML>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;
const InputHTML = styled.input`
  width: calc(100% - 8px - 10px);
  height: 70px;
  border: 3px solid rgb(200, 200, 200);
  padding-left: 10px;
  color: ${COLORS.DARK};
  font-size: 50px;
  :focus {
    outline: none;
    border: 3px solid ${COLORS.BLUE};
  }
  border-radius: 15px;
`;

export default Input;
