import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Flex from '../Flex';
import Image from '../Image';
import picture1 from '/src/assets/picture1.png'
import picture14 from '/src/assets/picture14.png'
import Button from '../Button';

const About = () => {
  return (
    <>
      <Container>
        <div>
          <h3 className='text-[49px] font-bold '>About</h3>
          <h4 className='flex items-center text-[12px] font-normal'><Link to={'/'}>Home</Link> <IoIosArrowForward /> About</h4>
        </div>
      </Container>

      <Container>

        <div className='flex justify-between px-50  '>
        <div className='relative'>
            <Image imgSrc={picture1} className='' />
          <Button btnText={'our brands '} className='absolute left-30 bottom-5'/>
        </div>


      <div className='relative'>
            <Image imgSrc={picture14} />
             <Button btnText={'Our Stores'} className='absolute left-30 bottom-4 '/>
      </div>



        </div>

        <h3 className='font-normal text-[39px] text-[#262626] w-[1400px] h-[100px]text-center py-5'>
          Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>


      </Container>


      <Container>
        <Flex className='py-9 flex gap-x-5'>
          <div className='1/3'>
            <h3 className='text[25px] font-bold text-[#262626]'>Our Vision</h3>
            <p className='w-[400px] h-[140px] text-[16px] text-[#767676] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
         <div className='1/3'>
            <h3 className='text[25px] font-bold text-[#262626]'>Our Story</h3>
            <p className='w-[400px] h-[140px] text-[16px] text-[#767676] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='1/3'>
            <h3 className='text[25px] font-bold text-[#262626]'>Our Brands</h3>
            <p className='w-[400px] h-[140px] text-[16px] text-[#767676] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </Flex>
      </Container>


    </>
  )
}

export default About