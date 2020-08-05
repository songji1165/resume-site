import { useRef, useEffect } from 'react';

import { FaBlogger } from "react-icons/fa";

const iconArr = [
    {name: "Github", icon: `<FaGithub/>`},
    {name: "Blog", icon: `<FaBlogger/>`},
]

const useIcon = (icon) => {
  const element = useRef(null);

  useEffect(() => {
  
    const { current } = element;
    console.log("??CURRENT",current)
  
    if (current) {  
      if(icon){
        const findIcon = iconArr.filter(item => {
            return item.name === icon
        })
    console.log("FINDICON",findIcon)  
      current.innerHTML = findIcon[0].icon;
    }
  
    }
  }, []);


  

    return {
        ref : element
    }
} 

export default useIcon;



