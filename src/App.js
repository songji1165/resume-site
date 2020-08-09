import React from "react";
import Home from "./routes/Home";
import Person from "./data/PersonalData.json";
import ResetStyle from "./styles/resetCss";

function App() {

  return (
    <>
      <ResetStyle />
      <Home person={Person} />
    </>
  );
}

export default App;
