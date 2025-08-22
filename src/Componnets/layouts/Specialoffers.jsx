import React from 'react'
import Prouductiteam from './Prouductiteam'
import Container from '../Container'
import Flex from '../Flex'
import picture9 from '/src/assets/picture9.png'
import picture10 from '/src/assets/picture10.png'
import picture11 from '/src/assets/picture11.png'
import picture12 from '/src/assets/picture12.png'
import Heading from '../Heading'

import axios from 'axios'
import { useState, useEffect } from 'react'

const Specialoffers = () => {

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
          <h3 className='text-[40px] font-bold text-black py-6 '> Special Offers</h3>
          <Flex className='gap-x-10'>


            {
              allData.slice(0,4).map(item => (

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





              <Prouductiteam Imgproduct={picture9} productBadge={'10%'} className='relative'  />
              <Heading Text={'black'} as={'h6'} className=' pl-[15px] py-2 text-[#767676] text-[16px] font-normal' />
            </div> */}

{/* 
            <div>

              <Prouductiteam Imgproduct={picture10} productBadge={'Now'} />
              <Heading Text={'black'} as={'h6'} className=' pl-[15px] py-2 text-[#767676] text-[16px] font-normal' />
            </div>
            <div>
              <Prouductiteam Imgproduct={picture11} productBadge={'Now'} />
              <Heading Text={'black'} as={'h6'} className=' pl-[15px] py-2 text-[#767676] text-[16px] font-normal' />
            </div>
            <div>
              <Prouductiteam Imgproduct={picture12} productBadge={'Now'} />
              <Heading Text={'black'} as={'h6'} className=' pl-[15px] py-2 text-[#767676] text-[16px] font-normal' />
            </div> */}


          </Flex>
        </Container>

      </div>

    </>
  )
}

export default Specialoffers