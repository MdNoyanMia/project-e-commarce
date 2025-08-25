import React from 'react'
import Prouductiteam from './Prouductiteam'
import Container from '../Container'
import Flex from '../Flex'
import picture5 from '/src/assets/picture5.png'
import picture6 from '/src/assets/picture6.png'
import picture7 from '/src/assets/picture7.png'
import picture8 from '/src/assets/picture8.png'
import Heading from '../Heading'
import axios from 'axios'
import { useState, useEffect } from 'react'


const OurBestsellers = () => {


    let [allData, setAllData] = useState([])
    useEffect(() => {
        async function alldatas() {
            let data = await axios.get("https://dummyjson.com/products")
            setAllData(data.data.products)
        }
        alldatas()
    }, [])






    return (
        <>


            <div className='py-15'>
                <Container>
                    <h3 className='text-[40px] font-bold text-black py-6 '> Our Bestsellers</h3>
                    <Flex className='gap-x-10'>

                        {
                            allData.slice(2, 6).map(item => (

                                <>
                                    <div className=' ' >

                                        <Prouductiteam Imgproduct={item.thumbnail} productBadge={'10%'} price={`$ ${item.price}`} title={item.title} />
                                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[16px] font-normal' />

                                    </div>

                                </>
                            ))
                        }



                        {/* 
                        <div className=''>
                            <Prouductiteam Imgproduct={picture5} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                            <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                        </div>


                        <div>

                            <Prouductiteam Imgproduct={picture6} productBadge={'Now'} title={'Basic Crew Neck Tee'} price={'$44.00'} />
                            <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal' />
                        </div>
                        <div>
                            <Prouductiteam Imgproduct={picture7} productBadge={'Now'} title={'Basic Crew Neck Tee'} price={'$44.00'} />
                            <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal' />
                        </div>
                        <div>
                            <Prouductiteam Imgproduct={picture8} title={'Basic Crew Neck Tee'} price={'$44.00'} productBadge={'Now'} />

                            <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                        </div> */}


                    </Flex>
                </Container>

            </div>

        </>
    )
}

export default OurBestsellers