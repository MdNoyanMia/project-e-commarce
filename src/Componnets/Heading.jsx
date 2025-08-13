import React from 'react'

const Heading = (props) => {
  return (
    // <props.as>{props.text}</props.as>

    <props.as classname={props.classname}>{props.Text}</props.as> 
  )
}

export default Heading