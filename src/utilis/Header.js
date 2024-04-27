import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png'
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { user } = useSelector((state) => state.admin)
    return (
        <div className='fixed w-[100%] z-50 '>
            <div className=' lg:flex justify-between bg-blue-900 items-center h-[55px] lg:pl-[130px] lg:pr-[130px] hidden '>
                <h1 className='text-2xl text-white font-bold flex items-center gap-2'><img src={logo} alt={logo} className='w-12 h-12 ' /> ICCSM’2024  </h1>
                <div className=' w-[60%] flex justify-around'>
                    <Link to='/' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Home</Link>
                    <Link to='/committees' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Committees</Link>
                    <Link to='/topics' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Topics</Link>
                    <Link to='/registrations' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Registration</Link>
                    <Link to='/submission' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Submission</Link>
                    <Link to='/contact' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Contact</Link>
                    {
                        user ? (
                            <Link to='/dashboard' className='text-white font-[Roboto] text-lg font-semibold hover:text-blue-500 '>Dashboard</Link>
                        ) : null
                    }
                </div>
            </div>


            <div className='lg:hidden flex justify-between pl-[20px] pr-[20px] h-[45px] md:pl-[90px]  md:pr-[90px] items-center bg-blue-900'>
                <h1 className='text-2xl text-white font-bold flex items-center gap-2'><img src={logo} alt={logo} className='w-10 h-10 ' /> ICCSM’2024  </h1>
                <i class="ri-menu-line text-2xl " ref={btnRef} onClick={onOpen}></i>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Bienvnue</DrawerHeader>

                    <DrawerBody className='flex flex-col gap-10 mt-12'>
                        <Link to='/' className=' text-lg font-bold hover:text-blue-500 '>Home</Link>
                        <Link to='/committees' className=' text-lg font-bold hover:text-blue-500 '>Committees</Link>
                        <Link to='/topics' className=' text-lg font-bold hover:text-blue-500 '>Topics</Link>
                        <Link to='/registrations' className=' text-lg font-bold hover:text-blue-500 '>Registration</Link>
                        <Link to='/submission' className=' text-lg font-bold hover:text-blue-500 '>Submission</Link>
                        <Link to='/contact' className=' text-lg font-bold hover:text-blue-500 '>Contact</Link>
                        {
                            user ? (
                                <Link to='/dashboard' className=' text-lg font-bold hover:text-blue-500 '>Dashboard</Link>
                            ) : null
                        }

                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Header
