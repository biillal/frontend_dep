import React from 'react'
import MainLayout from '../../components/MainLayout'
import { Text } from '@chakra-ui/react'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <MainLayout>
      <motion.div
        className='flex justify-center items-center pt-14'
        initial={{opacity:0 , scale:0.5}}
        animate={{opacity:1 , scale:1}}
        transition={{duration:1}}
      >
        <div className='lg:border lg:border-blue-900 rounded-lg w-[100%] lg:shadow-2xl lg:w-[70%] mt-12 h-[500px] flex flex-col justify-around  p-[30px] '>
          <Text className='text-center text-xl font-bold'>Si vous avez des questions, n'hésitez pas à nous contacter à tout moment</Text>

          <div className='flex flex-col items-center'>
            <span className='text-xl font-bold text-blue-600 '>Email</span>
            <Text className='text-lg font-semibold'>icmse.lpcma.sba.2024@gmail.com</Text>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-xl font-bold text-blue-600 '>Phone</span>
            <Text className='text-lg font-semibold'><span>+213</span>0540767481 ou 044 35 49 14</Text>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-xl font-bold text-blue-600 '>Address</span>
            <Text className='text-lg font-semibold'>University Pole of Ouled Fares, 02180,
              Chlef, Algeria.</Text>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-xl font-bold text-blue-600 '>Social Media</span>
            <Text className='text-lg font-semibold'>Faculty of Exact Sciences, Sidi Bel Abbbes, Algeria</Text>
          </div>
        </div>

      </motion.div>
    </MainLayout>
  )
}

export default Contact
