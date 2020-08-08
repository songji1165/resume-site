import React from "react";
import Home from "./routes/Home";
import Person from "./data/PersonalData.json";
import ResetStyle from "./styles/resetCss";

function App() {
 

  console.log("App", process.env.REACT_APP_SERVICE_ID);

  return (
    <>
      <ResetStyle />
      <Home person={Person} />
    </>
  );
}

export default App;
