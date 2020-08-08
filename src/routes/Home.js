import React, { createRef } from "react";

import Header from "../components/Header";
import Intro from "../components/Intro";
import Career from "../components/Careers";
import Tech from "../components/Tech";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Home({ person }) {
  console.log(process.env.REACT_APP_SERVICE_ID);
  const scrollTo = [
    {
      name: "HOME",
      ref: createRef(),
    },
    {
      name: "TECH",
      ref: createRef(),
    },
    {
      name: "CAREERS",
      ref: createRef(),
    },
    {
      name: "PROJECT",
      ref: createRef(),
    },
    {
      name: "CONTACT",
      ref: createRef(),
    },
  ];

  return (
    <div>
      <Header
        navi={person.Contacts}
        author={person.Author}
        sections={scrollTo}
      />
      <Intro
        intro={person.Intro}
        refProp={scrollTo[0]}
        author={person.Author}
        downScroll={scrollTo[1]}
      ></Intro>
      <Tech tech={person.Tech} refProp={scrollTo[1]}></Tech>
      <Career careers={person.Careers} refProp={scrollTo[2]}></Career>
      <Project projects={person.Projects} refProp={scrollTo[3]}></Project>
      <Footer
        contact={person.Contacts}
        author={person.Author}
        refProp={scrollTo[4]}
      ></Footer>
    </div>
  );
}

export default Home;
