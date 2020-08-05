import React from "react";

import Intro from "../components/Intro";
import Career from "../components/Careers";
import Tech from "../components/Tech";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Home({ person, scrollTo }) {
  return (
    <div>
      <Intro intro={person.Intro} refProp={scrollTo[0]} author={person.Author}></Intro>
      <Tech tech={person.Tech} refProp={scrollTo[1]}></Tech>
      <Career careers={person.Careers} refProp={scrollTo[2]}></Career>
      <Project projects={person.Projects} refProp={scrollTo[3]}></Project>
      <Footer contact={person.Contacts} refProp={scrollTo[4]}></Footer>
    </div>
  );
}

export default Home;
