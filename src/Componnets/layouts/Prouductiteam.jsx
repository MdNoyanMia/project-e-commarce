import React from 'react'
import Badge from '../Badge'
import Container from '../Container'
import Image from '../Image'
import picture1 from '/src/assets/picture1.png'

const Prouductiteam = () => {
    return (
        <>
            <div className='w-1/4 relative'>
                <Container>
                 
                        <Badge badgeText={'new'} className='absolute top-3.5 left-3.5'/>
                        <Image imgSrc={picture1}/>
                 
                </Container>
            </div>
        </>
    )
}

export default Prouductiteam