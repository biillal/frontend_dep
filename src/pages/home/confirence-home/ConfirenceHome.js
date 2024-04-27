import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import logo1 from '../../../assets/logo-1.png'
import { motion } from 'framer-motion'
function ConfirenceHome() {
    return (
        <div className='lg:mt-[30px] lg:ml-[80px] lg:mr-[80px] '>

            <Box position='relative' padding='10' className=''>
                <Divider color="blue" />
                <AbsoluteCenter bg='white' px='4'>
                    <Text className='text-center text-3xl font-bold font-[Poppins] '>Conference objectives</Text>
                </AbsoluteCenter>
            </Box>
            <div className='lg:flex gap-32 p-7 bg-white'>
                <motion.div
                    initial={{opacity:0,translateX:50 }}
                    whileInView={{opacity:1,translateX:0}}
                    
                    transition={{duration:1}}
                    className='lg:w-[25%] lg:ml-24'
                >
                    <img src={logo1} className=' w-[100%]  lg:h-[300px] ' alt='logo1' />
                </motion.div>
                <div className='border lg:w-[50%] w-[100%] border-blue-900 p-4 rounded-lg'>
                    <Text className='text-xl font-bold font-[Poppins] text-black text-center '>
                        Chemistry stands as an experimental science
                        dedicated to serving humanity, positioned at the
                        crossroads of numerous disciplines including
                        biology, pharmacology, health sciences, materials
                        science, pharmacy, environmental studies,
                        electronics, agronomy, and more. The objective of
                        this event is to convene experts from diverse
                        realms of chemistry alongside post-graduate
                        scholars, facilitating the presentation and
                        discussion of their research findings, fostering the
                        exchange of experiences, and collectively
                        assessing the landscape of research across the key
                        branches of chemistry. Additionally, it aims to
                        shed light on the challenges encountered by
                        researchers since the inception of chemistry
                        research laboratories in Algeria.

                        Advise and guide the work of PhD student.

                        Establishment and development of sustainable.

                        Thematic research links and networks Publication
                        of the scientific work of the congress and future
                        publications on the treated issues in impacted
                        journals.
                    </Text>
                </div>

            </div>
        </div>
    )
}

export default ConfirenceHome
