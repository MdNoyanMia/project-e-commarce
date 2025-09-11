import React from 'react'
import Badge from '../Badge'
import Container from '../Container'
import Image from '../Image'

import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import Heading from '../Heading'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../slices/addToCartSlice'



const Prouductiteam = ({ Imgproduct, productBadge, title, price }) => {
    let dispatch = useDispatch()

    let handleaddtocard = () => {

        dispatch(

            addtocart({
                title: title,
                img: Imgproduct,
                price: price,
                quantty: 1,
            })
        );

    };

    return (
        <>
            <div className=' relative group  '>
                <Container>
                    <Image imgSrc={Imgproduct} className=' ' />
                    <Badge badgeText={productBadge} className='absolute top-6 left-6' />

                    <div className='bg-white py-[25px] px-[30px]  absolute bottom-7 left-0 w-full opacity-0 group-hover:opacity-100 duration-700'>


                        <Link to={'/'} className='flex items-center justify-end gap-x-2'>Add to Wish List<FaHeart /></Link>

                        <Link to={'/'} className='flex items-center justify-end gap-x-2'>Compare<TbRefresh /></Link>

                        <Link to={'/'} className='flex items-center justify-end gap-x-2' onClick={handleaddtocard}>
                            Add to Cart<FaCartShopping /></Link>
                    </div>

                    <div className='mt-2  flex justify-between '>
                        <Heading Text={title} as={"h3"} className=' text-[#262626] text-[12px] font-bold' />
                        <Heading Text={price} as={"h3"} className=' text-[#767676] text-[12px] font-normal' />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Prouductiteam