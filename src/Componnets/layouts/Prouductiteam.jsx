import React from 'react'
import Badge from '../Badge'
import Container from '../Container'
import Image from '../Image'
import picture1 from '/src/assets/picture1.png'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import Heading from '../Heading'

const Prouductiteam = () => {
    return (
        <>
            <div className='w-1/4 relative group'>
                <Container>
                    <Image imgSrc={picture1} />
                    <Badge badgeText={'New'} className='absolute top-6 left-6' />

                    <div className='bg-amber-300 py-[25px] px-[30px] absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 duration-700'>


                        <Link to={'/'} className='flex items-center justify-end gap-x-2'>Add to Wish List<FaHeart /></Link>

                        <Link to={'/'} className='flex items-center justify-end gap-x-2'>Compare<TbRefresh /></Link>

                        <Link to={'/'} className='flex items-center justify-end gap-x-2'> Add to Cart<FaCartShopping /></Link>
                    </div>

                    <div className='mt-2 bg-amber-900'>
                        <Heading Text={" Basic Crew Neck Tee"} as={"h3"}/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Prouductiteam