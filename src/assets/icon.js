import React from "react";

import { FaBlogger } from "react-icons/fa";

const getIcon = (icon) => {
    const iconArr = [
        {name: "Github", icon:() => <FaGithub/>},
        {name: "Blog", icon: ()=> <FaBlogger/>},
    ]
    console.log("GETICON",icon)
    if(icon){
        const findIcon = iconArr.filter(item => {
            return item.name === icon
        })
console.log("FINDICON",findIcon[0].icon())  
        return findIcon[0].icon();
    }
   
    
}

export default getIcon;