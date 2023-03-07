import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../shared";
import MuiButton from "@mui/material/Button";

const Button = ({
  children = "Button text here",
  onClick,
  type = "PRIMARY",
}) => {
  const [color, setColor] = useState(COLORS.PERSIAN_GREEN);
  useEffect(() => {
    switch (type) {
      case "PRIMARY":
        setColor(COLORS.PERSIAN_GREEN);
        return;
      case "SECONDARY":
        setColor(COLORS.RED);
        return;
      case "ITEM":
        setColor(COLORS.OFF_WHITE);
      default:
        setColor(COLORS.PERSIAN_GREEN);
        return;
    }
  }, []);
  return (
    <Container onClick={onClick} color={color}>
      {children}
    </Container>
  );
};
//  {/* <Container  >{children}</Container> */}
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.color};
  color: ${COLORS.OFF_WHITE};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  border-radius: 15px;
  cursor: pointer;
`;

export default Button;
