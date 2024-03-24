import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import telecherger from '../../../assets/telecharger.png'
import { motion } from 'framer-motion';
function Download() {
  return (
    <div className='lg:mt-[30px] lg:ml-[80px] lg:mr-[80px] pl-5 pr-5' >
      <Box position='relative' padding='10' className=''>
        <Divider color="blue" />
        <AbsoluteCenter bg='white' px='4'>
          <Text className='text-center text-3xl font-bold '>Download</Text>
        </AbsoluteCenter>
      </Box>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        <motion.div
          className='border shadow-lg p-5 flex flex-col items-center rounded-lg'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <i class="ri-file-word-fill text-4xl text-blue-900"></i>
          <Text className='text-xl font-bold text-blue-900 mt-3'>Séminaire international</Text>
          <a href='séminaire-international-1.pptx' className='mt-6' download='séminaire-international-1.pptx' >
            <img src={telecherger} alt='telechergement' className='h-[40px] ' />
          </a>

        </motion.div>
        <motion.div
          className='border shadow-lg p-5 flex flex-col items-center rounded-lg'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <i class="ri-file-word-fill text-4xl text-blue-900"></i>
          <Text className='text-xl font-bold text-blue-900 mt-3'>Séminaire international</Text>
          <a href='emd_mccp2024_correction-1.docx' download='emd_mccp2024_correction-1.docx' className='mt-6'>
            <img src={telecherger} alt='telechergement' className='h-[40px] ' />
          </a>

        </motion.div>
        <motion.div
          className='border shadow-lg p-5 flex flex-col items-center rounded-lg'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <i class="ri-file-word-fill text-4xl text-blue-900"></i>
          <Text className='text-xl font-bold text-blue-900 mt-3'>Séminaire international</Text>
          <a href='séminaire-international-1.pptx' className='mt-6' download='séminaire-international-1.pptx' >
            <img src={telecherger} alt='telechergement' className='h-[40px] ' />
          </a>

        </motion.div>
        <motion.div
          className='border shadow-lg p-5 flex flex-col items-center rounded-lg'
          initial={{ scale: 1}}
          whileHover={{ scale: 1.1}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <i class="ri-file-word-fill text-4xl text-blue-900"></i>
          <Text className='text-xl font-bold text-blue-900 mt-3'>Séminaire international</Text>
          <a href='séminaire-international-1.pptx' className='mt-6' download='séminaire-international-1.pptx' >
            <img src={telecherger} alt='telechergement' className='h-[40px] ' />
          </a>

        </motion.div>
      </div>

    </div>
  )
}

export default Download
