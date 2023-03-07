import React from "react";
import styled from "styled-components";
import { COLORS, DIMS } from "../shared";

const TABS_HEIGHT = (DIMS && DIMS.TABS_HEIGHT) || null;

const Toolbar = ({ user }) => {
  return (
    <Container>
      <Padding>{user ? <H1>Hi {user.firstName}!</H1> : null}</Padding>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${TABS_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Padding = styled.div`
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  display: flex;
  align-items: center;
  position: relative;
`;
const H1 = styled.h1`
  color: ${COLORS.DARK};
  text-transform: capitalize;
`;

export default Toolbar;
