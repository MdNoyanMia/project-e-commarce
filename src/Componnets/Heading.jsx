import React from 'react'

const Heading = (props) => {
  return (
    // <props.as>{props.text}</props.as>

    <props.as className={props.className}>{props.Text}</props.as> 
  )
}

export default Heading