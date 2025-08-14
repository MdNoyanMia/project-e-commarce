
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


const Newarrivals = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };

  return (
    <>
      <Container>

        <h3 className='text-[40px] font-bold text-black py-6 '> New Arrivals</h3>
        <Slider {...settings}>
          <div>
            <Prouductiteam Imgproduct={picture1} productBadge={'10%'} />
          
          </div>
          <div>
            <Prouductiteam Imgproduct={picture2} productBadge={'Now'} />
          </div>

          <div>
            <Prouductiteam Imgproduct={picture3} productBadge={'Now'} />
          </div>

          <div>
            <Prouductiteam Imgproduct={picture1} productBadge={'10%'} />
          </div>

          <div>
            <Prouductiteam Imgproduct={picture4} productBadge={'Now'} />
          </div>




        </Slider>

      </Container>


    </>
  )
}

export default Newarrivals