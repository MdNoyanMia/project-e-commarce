import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const NextArrow = (props) => {
 const {  onClick } = props;

  return (
   
        <div
            className={"text-red-500 text-5xl top-1/2 -right-0 -translate-1/2  absolute"}
           
            onClick={onClick}
        > <FaArrowAltCircleRight/> </div>

  )
}

export default NextArrow