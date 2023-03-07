import React, { useState } from "react";
import styled from "styled-components";
import Iconbutton from "./Iconbutton";
import { DIMS, COLORS } from "../shared";

export const NavBarDesktop = ({ children }) => {
  return (
    <ContainerDesktop>
      <DesktopViewPadding>
        <ExpandableWrapperDesktop>
          <Wrapper>{children}</Wrapper>
        </ExpandableWrapperDesktop>
      </DesktopViewPadding>
    </ContainerDesktop>
  );
};

export const NavBarMobile = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const onToggleminimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <ContainerMobile>
      <ExpandableWrapperMobile>
        <ButtonAnchor>
          <Iconbutton
            onClick={onToggleminimized}
            icon={"hamburger"}
          ></Iconbutton>
        </ButtonAnchor>
        <Expandable isMinimized={isMinimized}>{children}</Expandable>
      </ExpandableWrapperMobile>
    </ContainerMobile>
  );
};

const ContainerMobile = styled.div`
  width: 0;
  height: 0;
  max-height: 100vh;
  display: flex;
  align-items: center;
`;
const ContainerDesktop = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
`;
const ExpandableWrapperDesktop = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 0%;
  right: 0%;
  border-radius: ${DIMS.BORDER_RADIUS}px;
`;
const ExpandableWrapperMobile = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  bottom: 25px;
  right: 25px;
  border-radius: ${DIMS.BORDER_RADIUS}px;
`;
const Expandable = styled.div`
  width: ${(props) => (props.isMinimized ? "150px" : "100%")};
  height: ${(props) => (props.isMinimized ? "calc(100vh - 300px)" : "0")};
  padding: 25px;
  padding-bottom: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: ${(props) => (props.isMinimized ? "block" : "none")};
  overflow-y: scroll;
  background-color: ${COLORS.BLUE};
  border-radius: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const DesktopViewPadding = styled.div`
  width: calc(100% - 25px);
  height: calc(100% - 50px);
`;
const ButtonAnchor = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
