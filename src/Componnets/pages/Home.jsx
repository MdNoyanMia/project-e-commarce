import React from 'react'
import Header from '../layouts/Header'
import Heading from '../Heading'
import Banner from '../layouts/Banner'
import Terms from '../layouts/terms'
import Productpart from '../layouts/Productpart'
import Newarrivals from '../layouts/Newarrivals'

const Home = () => {
  return (
<>
{/* <Heading as={'h4'} text={'hello'}/> */}

<Banner/>
<Terms/>
<Productpart/>
<Newarrivals/>
</>

  )
}

export default Home