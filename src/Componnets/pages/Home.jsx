import React from 'react'
import Banner from '../layouts/Banner'
import Terms from '../layouts/Terms'
import Productpart from '../layouts/Productpart'
import Newarrivals from '../layouts/Newarrivals'
import OurBestsellers from '../layouts/OurBestsellers'

const Home = () => {
  return (
<>
{/* <Heading as={'h4'} text={'hello'}/> */}

<Banner/>
<Terms/>
<Productpart/>
<Newarrivals/>
<OurBestsellers/>
</>
  
  )
}

export default Home