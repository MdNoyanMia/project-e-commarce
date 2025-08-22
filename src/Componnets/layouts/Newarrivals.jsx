
import Prouductiteam from './Prouductiteam'
import Container from '../Container'
import picture1 from '/src/assets/picture1.png'
import picture2 from '/src/assets/picture2.png'
import picture3 from '/src/assets/picture3.png'
import picture4 from '/src/assets/picture4.png'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Newarrivals = () => {
  let [allData, setAllData] = useState([])
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products)
    }
    alldatas()
  }, [])


  //slider==
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };
  //slider
  return (
    <>

      <Container className='bg-[#67676]'>

        <h3 className='text-[40px] font-bold text-black py-6 '> New Arrivals</h3>
        <div className='-mx-3'>
          <Slider {...settings}>
            {
              allData.map(item => (

                <>
                  <div className='px-3 ' >

                    <Prouductiteam Imgproduct={item.thumbnail} productBadge={item.category} price={`$ ${item.price}`} title={item.title} />
                  </div>
                </>
              ))
            }


            {/* 

            <div className='px-3'>
              <Prouductiteam Imgproduct={picture2} productBadge={'Now'} />
            </div>

            <div className='px-3'>
              <Prouductiteam Imgproduct={picture3} productBadge={'Now'} />
            </div>

            <div className='px-3'>
              <Prouductiteam Imgproduct={picture1} productBadge={'10%'} />
            </div>

            <div className='px-3'>
              <Prouductiteam Imgproduct={picture4} productBadge={'Now'} />
            </div> */}




          </Slider>
        </div >

      </Container >

    </>
  )
}

export default Newarrivals