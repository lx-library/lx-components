import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const Form = ({ formData }) => {
  const [headline, setHeadline] = useState();
  const [controls, setControls] = useState([]);

  useEffect(() => {
    setHeadline((formData && formData.headline) || null);
    setControls((formData && formData.controls) || []);
  }, []);

  const controlSelector = (control) => {
    const type = (control && control.type) || null;
    const question = (control && control.question) || null;
    switch (type) {
      case "TEXT_INPUT":
        return (
          <ControlWrapper>
            <Label>{question}</Label>
            <Input />
          </ControlWrapper>
        );
      default:
        return null;
    }
  };
  return (
    <Container>
      <H1>{headline}</H1>
      <Padding>
        {controls.map((control, index) => {
          return <div key={index}>{controlSelector(control)}</div>;
        })}
        {/* <ButtonWrapper>
                    <Button>next</Button>
                </ButtonWrapper> */}
      </Padding>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(200, 200, 200);
  margin: auto;
  padding-bottom: 10px;
`;
const H1 = styled.h1`
  width: 100%;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.6);
`;
const Padding = styled.div`
  width: calc(100% - 20px);
  margin: auto;
  padding-bottom: 10px;
  border-radius: 20px;
  border: 1px solid rgba(200, 200, 200);
`;
const ControlWrapper = styled.div`
  width: calc(100% - 100px);
  padding: 20px;
  position: relative;
`;
const Label = styled.div`
  width: 100%;
  padding-bottom: 5px;
`;
const ButtonWrapper = styled.div`
  width: calc(100% - 20px);
  margin: auto;
`;
export default Form;
