import React from "react";
import { Button, Toolbar } from "./lib";

const App = () => {
  return (
    <>
      <Button>Button</Button>
      <Toolbar user={{ firstName: "User" }}>Button</Toolbar>
    </>
  );
};

export default App;
