import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
function DateIm() {
    return (
        <div className='lg:mt-[30px] lg:ml-[80px] lg:mr-[80px] mt-8'>
            <Box position='relative' padding='10' className=''>
                <Divider color="blue" />
                <AbsoluteCenter bg='white' px='4'>
                    <Text className='text-center text-3xl font-bold font-[Poppins]'>Importent Dates</Text>
                </AbsoluteCenter>
            </Box>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-3'>
                <motion.div
                    className='border cursor-pointer shadow-lg pt-7 pb-7 flex flex-col items-center rounded-lg'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Text className='text-2xl font-bold text-blue-900 mt-3 font-[Poppins]'>Abstract submission</Text>
                    <span className='text-xl mt-4 font-semibold font-[Poppins]'>10/07/2024</span>

                </motion.div>
                <motion.div
                    className='border cursor-pointer shadow-lg pt-7 pb-7 flex flex-col items-center rounded-lg'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Text className='text-2xl font-bold text-blue-900 mt-3 font-[Poppins]'>Abstract submission Deadline:</Text>
                    <span className='text-xl mt-4 font-semibold font-[Poppins]'>30/10/2024</span>

                </motion.div>
                <motion.div
                    className='border cursor-pointer shadow-lg pt-7 pb-7 flex flex-col items-center rounded-lg'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Text className='text-2xl font-bold text-blue-900 mt-3 font-[Poppins]'>Notification of acceptance:</Text>
                    <span className='text-xl mt-4 font-semibold font-[Poppins]'>10/11/2024</span>

                </motion.div>

            </div>
        </div>
    )
}

export default DateIm
