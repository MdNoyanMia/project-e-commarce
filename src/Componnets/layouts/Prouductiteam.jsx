import React from 'react'
import Badge from '../Badge'
import Container from '../Container'
import Image from '../Image'

import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import Heading from '../Heading'


const Prouductiteam = ({ Imgproduct, productBadge, btnText }) => {
    return (
        <>
            <div className=' relative group px-4'>
                <Container>
                    <Image imgSrc={Imgproduct} />
                    <Badge badgeText={productBadge} className='absolute top-6 left-6' />

                    <div className='bg-white py-[25px] px-[30px] absolute bottom-7 left-0 w-full opacity-0 group-hover:opacity-100 duration-700'>


                        <Link to={'/'} className='flex items-center justify-end gap-x-2'>Add to Wish List<FaHeart /></Link>

                        <Link to={'/'} className='flex items-center justify-end gap-x-2'>Compare<TbRefresh /></Link>

                        <Link to={'/'} className='flex items-center justify-end gap-x-2'> Add to Cart<FaCartShopping /></Link>
                    </div>

                    <div className='mt-2  flex justify-between'>
                        <Heading Text={" Basic Crew Neck Tee"} as={"h3"} />
                        <Heading Text={" $44"} as={"h3"} />

                    </div>
                  
                </Container>
            </div>
        </>
    )
}

export default Prouductiteam