import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logu from '/src/assets/logu.png'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className='py-9'>
        <Container>
          <Flex className='flex gap-x-80'>
            <div>
              <Link to={'/'}>
                <Image imgSrc={logu} />
              </Link>

            </div>

            <div>
              <ul className='flex gap-x-5 text-[16px] font-bold text-noyan'>



                <Link to={'/'}>
                  <li className=' hover:text-black'>Home</li>
                </Link>

                <Link to={'shop'}>
                  <li className=' hover:text-black'>Shop</li>
                </Link>

                <Link to={'about'}>
                  <li className=' hover:text-black'>About</li>
                </Link>

                <Link to={'contact'}>
                  <li className=' hover:text-black'>Contact</li>
                </Link>

                <Link to={'journal'}>
                  <li className=' hover:text-black'>Journal</li>
                </Link>




              </ul>

            </div>
          </Flex>

        </Container>
      </div>

      {/* 2nd div start */}
      <div className='py-5 bg-[#D8D8D8]'>
        <Container>
          <Flex className='justify-between'>
            <div className='flex items-center gap-x-2 text-[#262626]'>
              <FaBarsStaggered />
              <h3>Shop by Category</h3>

            </div>
            <div className='relative '>
              <input className='bg-[#FFFFFF] p-[15px] w-[550px] border-none outline-none' type="text" placeholder='Search Products' />

              <CiSearch className='absolute right-3 top-1/2 -translate-y-1/2' />

            </div>
            <div className='flex gap-x-3'>
              <div className='flex gap-x-1'>
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <FaCartArrowDown />
            </div>
          </Flex>
        </Container>

      </div>
    </>
  )
}

export default Header