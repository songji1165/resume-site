import React from "react";

import Intro from "../components/Intro";
import Career from "../components/Careers";
import Tech from "../components/Tech";
import Project from "../components/Project";

function Home({ person }) {
  return (
    <div>
      <Intro intro={person.Intro}></Intro>
      <Career careers={person.Careers}></Career>
      <Tech tech={person.Tech}></Tech>
      <Project projects={person.Projects}></Project>
    </div>
  );
}

export default Home;
