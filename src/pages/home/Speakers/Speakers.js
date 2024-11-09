import React from 'react'
import ImageSwiper from '../../../components/ImageSwiper'
import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'

const Speakers = () => {
    return (
        <div className='w-[100%] '>
            <Box position='relative' padding='10' className=''>
                <Divider color="blue" />
                <AbsoluteCenter bg='white' px='4'>
                    <Text className='text-center text-3xl font-bold font-[Poppins]'>Speakers information</Text>
                </AbsoluteCenter>
            </Box>
            <ImageSwiper />
        </div>
    )
}

export default Speakers
