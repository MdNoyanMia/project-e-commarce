import React from 'react'

const Image = ({imgSrc, className, imgAlt}) => {
  return (
  <img className={`${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Image