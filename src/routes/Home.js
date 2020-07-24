import React from 'react';

import Intro from '../components/Intro';
import Info from '../components/Info';
import Tech from '../components/Tech';
import Project from '../components/Project';

function Home() {
    // console.log(data);  
    return  (      
        <div>
           <Intro></Intro>
           <Info></Info>
           <Tech></Tech>
           <Project></Project>
        </div>
    )
}

export default Home;