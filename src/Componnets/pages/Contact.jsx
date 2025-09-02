import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../Button';

const Contact = () => {
  return (
    <>
      <Container>
        <div>
          <h3 className='text-[49px] font-bold '>Contact</h3>
          <h4 className='flex items-center text-[12px] font-normal'><Link to={'/'}>Home</Link> <IoIosArrowForward /> Contact</h4>
        </div>
      </Container>


      <div className='py-6'>

        <Container>
          <h3 className='text-[49px] font-bold '>Fill up a Form</h3>

          <div className='py-5'>



            <label htmlFor="" className='text-[16px] py-4 font-bold mt-2'>Name:</label> <br />
            <input type="text" placeholder='Enter your name' className='' /> <br />
            <label htmlFor="" className='text-[16px] py-4 font-bold '>Gamil:</label><br />
            <input type="text" placeholder='Enter your gamil' /> <br />
            <label htmlFor="" className='text-[16px]  py-4 font-bold '>massage</label><br />
            <textarea name="" id="" className='w-[200px] h-[100px] ' placeholder='massage here'></textarea> <br />
          </div>


          <Button btnText={'Post '} className=' mt-4 px-10' />






          <div className='py-[15px]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196713.24386481792!2d90.21149708456481!3d23.633013553376514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1754369922266!5m2!1sen!2sbd"
              width={1000}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </Container>
      </div>

    </>
  )
}

export default Contact