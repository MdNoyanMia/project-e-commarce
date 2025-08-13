import React from 'react'
import { FaCircleLeft } from "react-icons/fa6";
const PrevArrow = (props) => {

    const { onClick } = props;

    return (

        <div
            className={"text-green-600 text-5xl top-1/2 left-10 -translate-1/2 z-10 absolute"}

            onClick={onClick}
        ><FaCircleLeft/></div >



    )
}

export default PrevArrow