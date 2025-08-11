import React from 'react'

const Heading = (props) => {
  return (
    <props.as>{props.text}</props.as>

    // <props.as classname={props.classname}>{props.text}</props.as> ata holo dynamic kora
  )
}

export default Heading