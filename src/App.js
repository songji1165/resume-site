import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./data/PersonalData.json";

// import logo from './logo.svg';
// import './App.css';

function App() {
  const personData = Person;
  console.log(personData[0]);
  console.log(personData[0].Contacts);
  return (
    <HashRouter>
      <Header navi={personData[0].Contacts}/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Footer />
    </HashRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
