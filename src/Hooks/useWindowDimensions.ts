import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

const useWindowDimensions = () => {
  const [windowDimensions,setWindowDimensions] = useState(getWindowDimensions());
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }
  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])
  return windowDimensions;
}

export default useWindowDimensions;