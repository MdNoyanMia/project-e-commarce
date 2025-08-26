import React from 'react'

const Button = ({btnText, className, }) => {
  return (
 <button className={`font-medium text-[16px] py-3 px-6 rounded-2xl bg-black text-white ${className}`}>{btnText}</button>
  )
}

export default Button