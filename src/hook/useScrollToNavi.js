import { createRef } from 'react';

const useScrollTo = () => {
  const sections = [
    {
      name : "HOME",
      ref : createRef() /* Ref per section */
    },
    {
      name : "HISTORY",
      ref : createRef()
    },
    {
      name : "TECH",
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

  // const element = createRef(); //Nav Item

  // Navi move To Ref 
  const handleNavigate = (section)=>{
    console.log("!",section)
    let el = section.ref.current;
  
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop
      });
  }

  return {
      sections : sections,
      handleClick : handleNavigate
  }
} 

export default useScrollTo;