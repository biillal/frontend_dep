import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import { useDispatch, useSelector } from 'react-redux';
import { createRegistrations } from '../../redux/apiCalls/registrationApiCalls';

function Register() {
 


   return (
      <MainLayout>
         <div className='lg:pl-36 lg:pr-36 p-3  pt-28'>
            <h1 className='text-3xl text-blue-900 font-bold mt-10'>REGISTRATION FEES</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-5 mb-11'>
               <div className='shadow-lg rounded-lg w-[100%] '>
                  <div className='bg-blue-900 text-white rounded-t-lg text-center font-bold text-xl p-4'>Teacher-researchers</div>
                  <div className='relative flex justify-center pt-3'>
                     <span className='absolute top-3 right-14 text-lg text-blue-900 font-semibold'>DA</span>
                     <span className='text-3xl font-bold text-blue-900'>12 000 </span>
                  </div>
                  <div className='flex flex-col gap-4 justify-center p-4'>
                     <h4 className='text-sm'>Access to the different sessions</h4>
                     <h4 className='text-sm'>Access to the Congress Proceding</h4>
                     <h4 className='text-sm'>Access to the coffee break</h4>
                     <h4 className='text-sm'>Access to the LUNCH</h4>
                  </div>
               </div>
               <div className='shadow-lg rounded-lg w-[100%] '>
                  <div className='bg-blue-900 text-white rounded-t-lg text-center font-bold text-xl p-4'>Post-graduate students</div>
                  <div className='relative flex justify-center pt-3'>
                     <span className='absolute top-3 right-14 text-lg text-blue-900 font-semibold'>DA</span>
                     <span className='text-3xl font-bold text-blue-900'>6 000  </span>
                  </div>
                  <div className='flex flex-col gap-4 justify-center p-4'>
                     <h4 className='text-sm'>Access to the different sessions</h4>
                     <h4 className='text-sm'>Access to the Congress Proceding</h4>
                     <h4 className='text-sm'>Access to the coffee break</h4>
                     <h4 className='text-sm'>Access to the LUNCH</h4>
                  </div>
               </div>
               <div className='shadow-lg rounded-lg w-[100%] '>
                  <div className='bg-blue-900 text-white rounded-t-lg text-center font-bold text-xl p-4'>Industrial</div>
                  <div className='relative flex justify-center pt-3'>
                     <span className='absolute top-3 right-14 text-lg text-blue-900 font-semibold'>DA</span>
                     <span className='text-3xl font-bold text-blue-900'>20 000 </span>
                  </div>
                  <div className='flex flex-col gap-4 justify-center p-4'>
                     <h4 className='text-sm'>Access to the different sessions</h4>
                     <h4 className='text-sm'>Access to the Congress Proceding</h4>
                     <h4 className='text-sm'>Access to the coffee break</h4>
                     <h4 className='text-sm'>Access to the LUNCH</h4>
                  </div>
               </div>
            </div>
         </div>
      </MainLayout>
   )
}

export default Register
