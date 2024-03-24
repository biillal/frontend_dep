import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import { useDispatch, useSelector } from 'react-redux';
import { createRegistrations } from '../../redux/apiCalls/registrationApiCalls';

function Register() {
   const {registrations} = useSelector((state)=>state.registrations)
   const dispatch = useDispatch()
   const [nom , setNom] = useState('');
   const [prenom , setPrenom] = useState('');
   const [institution , setInstitution] = useState('');
   const [institutionAddress , setInstitutionAddress] = useState('');
   const [ville , setVille] = useState('');
   const [phone , setPhone] = useState('');
   const [email , setEmail] = useState('');

   const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(createRegistrations({nom,prenom,institution,institutionAddress,ville,phone,email}))
   }


   return (
      <MainLayout>
         <div className='flex justify-center items-center h-screen pt-20'>
            <div className=' lg:w-[50%] w-[100%] bg-white shadow-lg h-auto p-4 rounded-lg'>
               <Text className='text-xl font-bold text-center'>Please tell us more about yourself.</Text>
               <form className='mt-10' onSubmit={handleSubmit}>
                  <div className='flex gap-5 w-[100%] justify-center '>
                     <div className='flex flex-col gap-2 w-[50%]'>
                        <Text className='text-lg font-semibold text-blue-900'>Nom <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg'onChange={(e)=>setNom(e.target.value)} type='text' placeholder='Entrez votre nom' />
                     </div>
                     <div className='flex flex-col gap-2 w-[50%] '>
                        <Text className='text-lg font-semibold text-blue-900'>Prénom <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e)=>setPrenom(e.target.value)} type='text' placeholder='Entrez votre prénom' />
                     </div>
                  </div>
                  <div className='flex gap-5 w-[100%] justify-center mt-6'>
                     <div className='flex flex-col gap-2 w-[50%]'>
                        <Text className='text-lg font-semibold text-blue-900'>Institution  <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e)=>setInstitution(e.target.value)} type='text' placeholder='Entrez votre Institution ' />
                     </div>
                     <div className='flex flex-col gap-2 w-[50%] '>
                        <Text className='text-lg font-semibold text-blue-900'>Institution Address <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e)=>setInstitutionAddress(e.target.value)} type='text' placeholder='Entrez votre Institution address' />
                     </div>
                  </div>
                  <div className='flex gap-5 w-[100%] justify-center mt-6'>
                     <div className='flex flex-col gap-2 w-[50%]'>
                        <Text className='text-lg font-semibold text-blue-900'>Ville  <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e)=>setVille(e.target.value)} type='text' placeholder='Entrez votre Ville ' />
                     </div>
                     <div className='flex flex-col gap-2 w-[50%] '>
                        <Text className='text-lg font-semibold text-blue-900'>Phone number <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e)=>setPhone(e.target.value)} type='text' placeholder='Entrez votre Phone number' />
                     </div>
                  </div>
                  <div className='flex gap-5 w-[100%] mt-6'>
                     <div className='flex flex-col gap-2 w-[50%]'>
                        <Text className='text-lg font-semibold text-blue-900'>E-mail  <span className='text-red-600'>*</span> </Text>
                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Entrez votre E-mail ' />
                     </div>
                  </div>
                  <button type='submit' className='w-[100%] p-2 bg-blue-900 mt-6 rounded-lg text-white ' >Register</button>
               </form>
            </div>
         </div>
      </MainLayout>
   )
}

export default Register
