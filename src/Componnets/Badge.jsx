import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`px-[20px] py-[10px] text-white text-[16px]  font-bold w-[90px] text-center bg-black ${className}`}>{badgeText}</div>
  )
}

export default Badge