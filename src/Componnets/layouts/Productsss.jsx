import React from 'react'
import Container from '../Container'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Flex from '../Flex';
import { FaCircle } from "react-icons/fa6";
import Badge from '../Badge';

import Prouductiteam from './Prouductiteam';
import Heading from '../Heading';

import picture12 from '/src/assets/picture12.png'
import picture9 from '/src/assets/picture9.png'
import picture10 from '/src/assets/picture10.png'
import picture1 from '/src/assets/picture1.png'
import picture11 from '/src/assets/picture11.png'
import picture7 from '/src/assets/picture7.png'
import picture13 from '/src/assets/picture13.png'
import picture14 from '/src/assets/picture14.png'
import picture8  from '/src/assets/picture8.png'



const Productsss = () => {
    return (
        <>
            <div className="py-15">

                <Container>

                    <div className=''>

                        <h3 className='text-[49px] font-bold '>Products</h3>
                        <h4 className='flex items-center text-[12px] font-normal'><Link to={'/'}>Home</Link> <IoIosArrowForward /> Products</h4>
                    </div>
                </Container>
            </div>

            <Container>

                <div className='flex  justify-between '>

                    <div className='items-center '>

                        <div>
                            <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Category</h3>


                        </div>






                    </div>




                    <div className='flex '>
                        <div className='text-[#767676] text-[14px] font-normal '>
                            <label for='drees' className='px-3'> Sort by:</label>
                            <select id="drees" className='w-[200px] text-center border-1 outline-0  '>
                                <option value="Featured">Featured</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>


                        </div>


                        <div className=''>

                            <label for='number' className='px-3'> Show:</label>
                            <select id="number" className='w-[200px] text-center border-1 outline-0  '>
                                <option value="30">30</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                            </select>
                        </div>
                    </div>

                </div >

                <Flex className='gap-x-5 py-7 -mx-1 '>

                    <div className='w-1/4 flex  justify-between '>
                        <ul className=' text-[#6D6D6D] items-center font-normal text-[14px]'>

                            <Link to={"categoryone"} >
                                <li className='flex hover:text-green-600 hover:duration-750  py-5' >Category 1</li>
                            </Link>

                            <Link to={"Categorytwo"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Category 2</li>
                            </Link>

                            <Link to={"Categorythree"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Category 3</li>
                            </Link>

                            <Link to={"Categoryfour"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Category 4</li>
                            </Link>
                            <Link to={"Categoryfive"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Category 5</li>
                            </Link>
                        </ul>




                    </div>



                    <div className=''>
                        <Prouductiteam Imgproduct={picture7} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />

                    </div>
                    <div className=''>
                        <Prouductiteam Imgproduct={picture11} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>
                    <div className=''>
                        <Prouductiteam Imgproduct={picture10} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>
                </Flex>


                <Flex className='gap-x-5 py-7 -mx-1 '>

                    <div className='w-1/4   '>

                        <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Color</h3>
                        <ul className=' text-[#6D6D6D] items-center font-normal py-3 text-[14px] '>

                            <Link to={"categoryone"} >
                                <li className=' hover:text-[#000000] hover:duration-750  py-5 flex items-center gap-2 text-[#000000]'  > <FaCircle />Color1</li>
                            </Link>

                            <Link to={"Categorytwo"}>
                                <li className=' hover:text-[#FF8686] hover:duration-750 py-5 flex items-center text-[#FF8686] gap-2'> <FaCircle />Color 2</li>
                            </Link>

                            <Link to={"Categorythree"}>
                                <li className=' hover:text-[#7ED321] hover:duration-750 py-5 flex items-center text-[#7ED321] gap-2' > <FaCircle />Color 3</li>
                            </Link>

                            <Link to={"Categoryfour"}>
                                <li className=' hover:text-[#B6B6B6] hover:duration-750 py-5 flex text-[#B6B6B6] items-center gap-2' > <FaCircle />Color 4</li>
                            </Link>
                            <Link to={"Categoryfive"}>
                                <li className=' hover:text-[#15CBA5]  hover:duration-750 py-5 flex text-[#15CBA5]  items-center gap-2' > <FaCircle />Color 5</li>
                            </Link>
                        </ul>
                    </div>




                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture9} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />

                    </div>

                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture13} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>

                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture8} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>
                </Flex>




                <Flex className='gap-x-5 py-7 -mx-1 '>

                    <div className='w-1/4   '>

                        <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Brand</h3>
                        <ul className=' text-[#6D6D6D] font-normal text-[14px]'>

                            <Link to={"categoryone"} >
                                <li className=' hover:text-green-600 hover:duration-750  py-5' >Brand 1</li>
                            </Link>

                            <Link to={"Categorytwo"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand 2</li>
                            </Link>

                            <Link to={"Categorythree"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand 3</li>
                            </Link>

                            <Link to={"Categoryfour"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand 4</li>
                            </Link>
                            <Link to={"Categoryfive"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand 5</li>
                            </Link>
                        </ul>
                    </div>




                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture12} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />

                    </div>

                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture10} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>

                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture9} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>
                </Flex>



                <Flex className='gap-x-5 py-7 -mx-1 '>

                    <div className='w-1/4   '>

                        <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Price</h3>
                        <ul className=' text-[#6D6D6D] font-normal text-[14px]'>

                            <Link to={"categoryone"} >
                                <li className=' hover:text-green-600 hover:duration-750  py-5' >$0.00 - $9.99</li>
                            </Link>

                            <Link to={"Categorytwo"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>$20.00 - $29.99</li>
                            </Link>

                            <Link to={"Categorythree"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>$3.00 - $3.99</li>
                            </Link>

                            <Link to={"Categoryfour"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>$4.00 - $4.99</li>
                            </Link>
                            <Link to={"Categoryfive"}>
                                <li className=' hover:text-green-600 hover:duration-750 py-5'>$5.00 - $5.99</li>
                            </Link>
                        </ul>
                    </div>




                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture14} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />

                    </div>

                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture1} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>

                    <div className='w-1/4 py-3'>
                        <Prouductiteam Imgproduct={picture12} productBadge={'10%'} className='relative' title={'Basic Crew Neck Tee'} price={'$44.00'} />
                        <Heading Text={'black'} as={'h6'} className=' pl-[0px] py-2 text-[#767676] text-[12px] font-normal ' />
                    </div>
                </Flex>

                {/* 
                        <div  className='w-1/4 flex  justify-between '>
                            <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Color</h3>
                            <ul className=' text-[#6D6D6D] font-normal text-[14px] '>

                                <Link to={"categoryone"} >
                                    <li className=' hover:text-[#000000] hover:duration-750  py-5 flex items-center gap-2 text-[#000000]'  > <FaCircle />Color1</li>
                                </Link>

                                <Link to={"Categorytwo"}>
                                    <li className=' hover:text-[#FF8686] hover:duration-750 py-5 flex items-center text-[#FF8686] gap-2'> <FaCircle />Color 2</li>
                                </Link>

                                <Link to={"Categorythree"}>
                                    <li className=' hover:text-[#7ED321] hover:duration-750 py-5 flex items-center text-[#7ED321] gap-2' > <FaCircle />Color 3</li>
                                </Link>

                                <Link to={"Categoryfour"}>
                                    <li className=' hover:text-[#B6B6B6] hover:duration-750 py-5 flex text-[#B6B6B6] items-center gap-2' > <FaCircle />Color 4</li>
                                </Link>
                                <Link to={"Categoryfive"}>
                                    <li className=' hover:text-[#15CBA5]  hover:duration-750 py-5 flex text-[#15CBA5]  items-center gap-2' > <FaCircle />Color 5</li>
                                </Link>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Brand</h3>
                            <ul className=' text-[#6D6D6D] font-normal text-[14px]'>

                                <Link to={"categoryone"} >
                                    <li className=' hover:text-green-600 hover:duration-750  py-5' >Brand 1</li>
                                </Link>

                                <Link to={"Categorytwo"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand2</li>
                                </Link>

                                <Link to={"Categorythree"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand3</li>
                                </Link>

                                <Link to={"Categoryfour"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand 4</li>
                                </Link>
                                <Link to={"Categoryfive"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>Brand5</li>
                                </Link>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-[20px] font-bold text-[#262626]'>Shop by Price</h3>
                            <ul className=' text-[#6D6D6D] font-normal text-[14px]'>

                                <Link to={"categoryone"} >
                                    <li className=' hover:text-green-600 hover:duration-750  py-5' >$0.00 - $9.99</li>
                                </Link>

                                <Link to={"Categorytwo"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>$20.00 - $29.99</li>
                                </Link>

                                <Link to={"Categorythree"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>$3.00 - $3.99</li>
                                </Link>

                                <Link to={"Categoryfour"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>$4.00 - $4.99</li>
                                </Link>
                                <Link to={"Categoryfive"}>
                                    <li className=' hover:text-green-600 hover:duration-750 py-5'>$5.00 - $5.99</li>
                                </Link>
                            </ul>
                        </div>
 */}

            </Container >


        </>
    )
}

export default Productsss