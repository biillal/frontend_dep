import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='fixed w-[100%] z-50 '>
            <div className=' lg:flex justify-between bg-blue-900 items-center lg:pl-[130px] lg:pr-[130px] hidden '>
                <img className=' w-[120px] h-[60px] p-[10px] ' src={logo} alt='logo uhbc' />
                <div className=' w-[50%] flex justify-around'>
                    <Link to='/' className='text-white text-lg font-semibold hover:text-blue-500 '>Home</Link>
                    <Link to='/committees' className='text-white text-lg font-semibold hover:text-blue-500 '>Committees</Link>
                    <Link to='/topics' className='text-white text-lg font-semibold hover:text-blue-500 '>Topics</Link>
                    <Link to='/registrations' className='text-white text-lg font-semibold hover:text-blue-500 '>Registrations</Link>
                    <Link to='/contact' className='text-white text-lg font-semibold hover:text-blue-500 '>Contact</Link>
                </div>
            </div>


            <div className='lg:hidden flex justify-between pl-[20px] pr-[20px] md:pl-[90px]  md:pr-[90px] items-center bg-blue-900'>
                <img className=' w-[120px] h-[60px] p-[10px] ' src={logo} alt='logo uhbc' />
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
                        <Link to='/registrations' className=' text-lg font-bold hover:text-blue-500 '>Registrations</Link>
                        <Link to='/contact' className=' text-lg font-bold hover:text-blue-500 '>Contact</Link>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Header
