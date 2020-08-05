import React, {createRef} from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Person from "./data/PersonalData.json";
import ResetStyle from "./styles/resetCss";

// import logo from './logo.svg';
// import './App.css';

function App() {
 
  const sections = [
    {
      name : "HOME",
      ref : createRef() 
    },
    {
      name : "TECH",
      ref : createRef()
    },
    {
      name : "CAREERS",
      ref : createRef()
    },
    {
      name : "PROJECT",
      ref : createRef()
    },
    {
      name : "CONTACT",
      ref : createRef()
    }];

  return (
    <HashRouter>
      <ResetStyle />
      <Header navi={Person.Contacts} author={Person.Author} sections={sections}/>
      <Route path="/" render={() => <Home person={Person} scrollTo={sections} />} exact={true} />
      <Route path="/detail/:id" component={Detail} />
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
