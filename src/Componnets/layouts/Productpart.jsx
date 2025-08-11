import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Add1 from '/src/assets/Add1.png'
import Add2 from '/src/assets/Add2.png'
import Add3 from '/src/assets/Add3.png'

const Productpart = () => {
    return (
        <>
            <div className=' py-20 '>
                <Container className=' '>
                    <Flex className='gap-x-8.5 '>

                        <div className=' w-1/2'>
                            <Image imgSrc={Add1} className='w-full'/>
                        </div>


                        <div className='w-1/2 ' >
                            <Image imgSrc={Add2} className=' pb-8.5 w-full ' />
                            <Image imgSrc={Add3} className=' w-full' />


                        </div>

                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Productpart