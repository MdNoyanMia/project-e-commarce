import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logu from '/src/assets/logu.png'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
   <>


      <div className='bg-[#F5F5F3] py-10'>

        <Container>
          <Flex className='justify-between'>
            <div>
              <h3 className='text-[#262626] font-bold'>MENU</h3>

              <ul className=' text-[#6D6D6D] font-normal text-[14px]'>

                <Link to={"/"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Home</li>
                </Link>


                <Link to={"shop"}>
                  <li className=' hover:text-green-600 hover:duration-750 ' >Shop</li>
                </Link>

                <Link to={"about"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>About</li>
                </Link>

                <Link to={"contact"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Contact</li>
                </Link>

                <Link to={"journal"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Journal</li>
                </Link>
              </ul>
            </div>

            <div>

              <h3 className='text-[#262626] font-bold'>SHOP</h3>

              <ul className=' text-[#6D6D6D] font-normal text-[14px]'>
                <Link to={"categoryone"}>
                  <li className=' hover:text-green-600 hover:duration-750 ' >Category 1</li>
                </Link>

                <Link to={"Categorytwo"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Category 2</li>
                </Link>

                <Link to={"Categorythree"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Category 3</li>
                </Link>

                <Link to={"Categoryfour"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Category 4</li>
                </Link>
                <Link to={"Categoryfive"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Category 5</li>
                </Link>
              </ul>
            </div>

            <div>
              <h3 className='text-[#262626] font-bold'>HELP</h3>
              <ul className=' text-[#6D6D6D] font-normal text-[14px]'>
                <Link to={"shop"}>
                  <li className=' hover:text-green-600 hover:duration-750 ' >Privacy Policy</li>
                </Link>

                <Link to={"about"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Terms & Conditions</li>
                </Link>

                <Link to={"contact"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Special E-shop</li>
                </Link>

                <Link to={"journal"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Shipping</li>
                </Link>
                <Link to={"journal"}>
                  <li className=' hover:text-green-600 hover:duration-750 '>Secure Payments</li>
                </Link>
              </ul>
            </div>

            <div>

              <h3>(052) 611-5711</h3>
              <h4>company@domain.com</h4>
              <p className='text-[#6D6D6D] font-normal text-[14px]'>575 Crescent Ave. Quakertown, PA 18951</p>

            </div>
            <div>
              <Link to={"/"}>
                <Image imgSrc={logu} />
              </Link>
            </div>

          </Flex>

        </Container>
      </div>


      <div>
        <Container>
          <Flex className='flex justify-between'>
            <div className='flex gap-x-5'>

              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />

            </div>



            <div className='text-[14px] text-[#767676] font-normal'>
              <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </Flex>
        </Container>
      </div>


    </>
  )
}

export default Footer