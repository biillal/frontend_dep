import React from 'react'
import rectoratImg from '../../../assets/logo-3.png'
import logo1 from '../../../assets/logo-1.png'
import logo2 from '../../../assets/logo-2.png'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
function HeaderHome() {
  return (
    <div className="relative  z-30">
      <img src={rectoratImg} className='w-[100%]  lg:h-[550px] h-[570px] ' />
      <div className=' absolute top-0 lg:flex  lg:flex-row w-[90%] lg:items-center lg:h-[550px]  justify-around lg:w-[100%] '>
        <motion.div
          className='flex ml-6 mt-3 -lg:mt-5 lg:ml-0'
          initial={{translateY:-50}}
          animate={{translateY:50}}
          whileInView={{yoyo:Infinity}}
          transition={{duration:0.4 ,}}
        
        >
             <img src={logo1} className='w-[50%] h-[50%] ' alt='' />
             <img src={logo2} className='w-[50%] h-[50%]' alt='' />
        </motion.div>
        <motion.div 
          initial={{opacity:0 , scale:0.3}}
          whileInView={{opacity:1 , scale:1}}
          transition={{duration:0.9}}
          className='lg:w-[50%] ml-7 lg:mt-0 mt-14'>
          <Text className='text-3xl font-bold  '>The first International Conference on Chemistry Science,
            Materials Design and their applications ICCSM’2024

            November 18-20, 2024 -Chlef-</Text>
        </motion.div>
      </div>
      <motion.div
        className='absolute top-[460px] w-[100%] flex justify-center '
        initial={{scale:1}}
        whileHover={{scale:1.3}}
        whileTap={{scale:1.1}}
      >
        <Link to="/registrations" className='p-2 border border-blue-900 mt-14 lg:mt-0 bg-blue-900 text-white rounded-lg lg:hover:bg-blue-800'>Registration</Link>
      </motion.div>
    </div>
  )
}

export default HeaderHome
