import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`px-[15px] py-[10px] text-white text-[14px]  font-bold w-[100px] text-center bg-black ${className}`}>{badgeText}</div>
  )
}

export default Badge