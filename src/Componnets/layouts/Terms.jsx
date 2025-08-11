import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";


const Terms = () => {
    return (
        <>
            <Container className='py-4'>
                <Flex className='flex items-center justify-between'>

                    <div className='flex items-center gap-x-2 text-[16px] text-noyan font-normal'>
                        <RiNumber2 className=' text-mou' />
                        {/* <Heading as={'h6'} text={' Two years warranty'}/> kora jaye ai babe*/}
                        Two years warranty

                    </div>

                    <div className='flex items-center gap-x-2 text-[16px] text-noyan font-normal'>
                        <FaTruck className=' text-mou' />
                        Free shipping
                    </div>
                    <div className='flex items-center gap-x-2  text-[16px] text-noyan font-normal'>
                        <FaUndo className=' text-mou'/>
                        Return policy in 30 days
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Terms